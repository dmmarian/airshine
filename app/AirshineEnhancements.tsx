"use client";

import { useEffect } from "react";

const formatCount = (value: number) => Math.round(value).toLocaleString("en-US");

export default function AirshineEnhancements() {
  useEffect(() => {
    const counterTimers = new Set<number>();
    const counterFrames = new Set<number>();

    document.querySelectorAll<HTMLElement>("[data-email-anchor]").forEach((anchor) => {
      const user = anchor.dataset.emailUser ?? "";
      const domain = anchor.dataset.emailDomain ?? "";
      const address = `${user}@${domain}`;

      anchor.setAttribute("href", `mailto:${address}`);

      const fill =
        anchor.querySelector<HTMLElement>("[data-email-fill]") ??
        (anchor.hasAttribute("data-email-fill") ? anchor : null);

      if (fill) {
        fill.textContent = address;
      }
    });

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count]"),
    );
    const tableFrames = Array.from(
      document.querySelectorAll<HTMLElement>("[data-table-scroll-frame]"),
    );

    const setupTableScrollCues = () => {
      const cleanup: (() => void)[] = [];

      tableFrames.forEach((frame) => {
        const scroll = frame.querySelector<HTMLElement>("[data-table-scroll]");

        if (!scroll) return;

        let frameHandle = 0;
        const update = () => {
          if (frameHandle) {
            window.cancelAnimationFrame(frameHandle);
          }

          frameHandle = window.requestAnimationFrame(() => {
            frameHandle = 0;
            const canScroll = scroll.scrollWidth > scroll.clientWidth + 1;
            const atEnd =
              scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 2;

            frame.dataset.scrollable = canScroll ? "true" : "false";
            frame.dataset.scrollEnd = !canScroll || atEnd ? "true" : "false";
          });
        };

        scroll.addEventListener("scroll", update, { passive: true });

        let observer: ResizeObserver | null = null;
        const ResizeObserverConstructor = (
          window as Window & { ResizeObserver?: typeof ResizeObserver }
        ).ResizeObserver;

        if (ResizeObserverConstructor) {
          observer = new ResizeObserverConstructor(update);
          observer.observe(scroll);

          const table = scroll.querySelector("table");
          if (table) {
            observer.observe(table);
          }
        } else {
          window.addEventListener("resize", update);
        }

        update();

        cleanup.push(() => {
          if (frameHandle) {
            window.cancelAnimationFrame(frameHandle);
          }

          scroll.removeEventListener("scroll", update);
          observer?.disconnect();

          if (!observer) {
            window.removeEventListener("resize", update);
          }
        });
      });

      return cleanup;
    };

    const cleanupTableScrollCues = setupTableScrollCues();

    const playReveals = () => {
      reveals.forEach((element, index) => {
        if (element.dataset.played) return;

        element.dataset.played = "1";
        const baseDelay = Number.parseInt(element.dataset.delay ?? "0", 10);
        element.style.animation = "rise .8s cubic-bezier(.22,.61,.36,1) both";
        element.style.animationDelay = `${baseDelay + Math.min(index * 38, 650)}ms`;
      });
    };

    const playCounter = (element: HTMLElement, index: number) => {
      if (element.dataset.counted) return;

      element.dataset.counted = "1";
      const target = Number.parseFloat(element.dataset.count ?? "0");
      const prefix = element.dataset.prefix ?? "";
      const duration = 1200;

      element.textContent = `${prefix}0`;

      const timer = window.setTimeout(() => {
        counterTimers.delete(timer);
        const start = performance.now();

        const tick = (time: number) => {
          let progress = Math.min(1, (time - start) / duration);
          progress = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${prefix}${formatCount(target * progress)}`;

          if (progress < 1) {
            const frame = requestAnimationFrame(tick);
            counterFrames.add(frame);
          }
        };

        const frame = requestAnimationFrame(tick);
        counterFrames.add(frame);
      }, 350 + index * 100);

      counterTimers.add(timer);
    };

    const playCounters = () => {
      counters.forEach(playCounter);
    };

    const playRevealsAndObserveCounters = () => {
      playReveals();
    };

    const finalize = () => {
      reveals.forEach((element) => {
        element.style.animation = "none";
        element.style.opacity = "";
        element.style.transform = "";
      });
    };

    let onVisibilityChange: (() => void) | null = null;
    let counterObserver: IntersectionObserver | null = null;

    const setupCounterObserver = () => {
      if (!counters.length) return;

      const IntersectionObserverConstructor = (
        window as Window & {
          IntersectionObserver?: typeof IntersectionObserver;
        }
      ).IntersectionObserver;

      if (!IntersectionObserverConstructor) {
        playCounters();
        return;
      }

      counterObserver = new IntersectionObserverConstructor(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element = entry.target as HTMLElement;
            const index = counters.indexOf(element);

            playCounter(element, Math.max(index, 0));
            counterObserver?.unobserve(element);
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.25,
        },
      );

      counters.forEach((element) => counterObserver?.observe(element));
    };

    setupCounterObserver();

    if (document.hidden) {
      onVisibilityChange = () => {
        if (!document.hidden) {
          if (onVisibilityChange) {
            document.removeEventListener("visibilitychange", onVisibilityChange);
          }
          playRevealsAndObserveCounters();
        }
      };

      document.addEventListener("visibilitychange", onVisibilityChange);
    } else {
      playRevealsAndObserveCounters();
    }

    const finalizeTimer = window.setTimeout(finalize, 2200);

    return () => {
      window.clearTimeout(finalizeTimer);
      counterTimers.forEach((timer) => window.clearTimeout(timer));
      counterFrames.forEach((frame) => window.cancelAnimationFrame(frame));
      counterObserver?.disconnect();
      cleanupTableScrollCues.forEach((cleanup) => cleanup());
      if (onVisibilityChange) {
        document.removeEventListener("visibilitychange", onVisibilityChange);
      }
    };
  }, []);

  return null;
}

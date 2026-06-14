"use client";

import { useEffect, useRef, useState } from "react";
import { siteHtml } from "./site-markup";
import { dict, defaultLocale, resolveLocale } from "./i18n";

const LANG_KEY = "acsite-lang";

export default function Page() {
  const hostRef = useRef(null);
  const [lang, setLang] = useState(defaultLocale);

  // Pick up a saved / browser-preferred locale after mount (avoids SSR mismatch).
  useEffect(() => {
    let saved;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch (_) {}
    const browser = typeof navigator !== "undefined" ? navigator.language : "";
    const next = resolveLocale(saved || (browser.startsWith("ro") ? "ro" : ""));
    if (next !== lang) setLang(next);
    // Run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang> and the saved preference in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (_) {}
  }, [lang]);

  useEffect(() => {
    const root = hostRef.current?.querySelector("#acsite");
    if (!root) return;
    const cleanup = [];

    // Language switcher in the nav.
    root.querySelectorAll("[data-lang]").forEach((btn) => {
      const h = () => setLang(resolveLocale(btn.getAttribute("data-lang")));
      btn.addEventListener("click", h);
      cleanup.push(() => btn.removeEventListener("click", h));
    });

    const nav = root.querySelector("#acnav");
    const hero = root.querySelector("#achero-img");
    let revealEls = Array.from(root.querySelectorAll("[data-reveal]"));
    let counterEls = Array.from(root.querySelectorAll("[data-count]"));
    const navLinks = Array.from(root.querySelectorAll("[data-navlink]"));
    const sections = navLinks
      .map((l) => root.querySelector(l.getAttribute("href")))
      .filter(Boolean);
    const vh = () =>
      window.innerHeight || document.documentElement.clientHeight || 700;

    // Count-up animation for the stat strip
    const count = (el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-suffix") || "";
      el.setAttribute("data-disp", "0" + suffix);
      const dur = 1500;
      const start = performance.now();
      const step = (t) => {
        let p = Math.min(1, (t - start) / dur);
        p = 1 - Math.pow(1 - p, 3);
        el.setAttribute("data-disp", Math.round(target * p) + suffix);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;

      // Nav background / shrink on scroll
      if (nav) {
        if (y > 60) {
          nav.style.background = "rgba(5,8,15,0.9)";
          nav.style.borderBottomColor = "rgba(198,166,103,0.18)";
          nav.style.backdropFilter = "blur(10px)";
          nav.style.webkitBackdropFilter = "blur(10px)";
          nav.style.boxShadow = "0 10px 34px -20px rgba(0,0,0,0.85)";
          nav.style.padding = "14px 48px";
        } else {
          nav.style.background = "rgba(5,8,15,0)";
          nav.style.borderBottomColor = "rgba(198,166,103,0)";
          nav.style.backdropFilter = "blur(0px)";
          nav.style.webkitBackdropFilter = "blur(0px)";
          nav.style.boxShadow = "none";
          nav.style.padding = "20px 48px";
        }
      }

      // Hero parallax
      if (hero) {
        hero.style.transform = "scale(1.12) translateY(" + y * 0.06 + "px)";
      }

      const h = vh();

      // Reveal on scroll
      if (revealEls.length) {
        revealEls = revealEls.filter((el) => {
          if (el.getBoundingClientRect().top < h * 0.92) {
            const d = el.getAttribute("data-reveal-delay") || 0;
            el.style.transitionDelay = d + "ms";
            el.setAttribute("data-shown", "1");
            return false;
          }
          return true;
        });
      }

      // Trigger counters when in view
      if (counterEls.length) {
        counterEls = counterEls.filter((el) => {
          if (el.getBoundingClientRect().top < h * 0.85) {
            count(el);
            return false;
          }
          return true;
        });
      }

      // Active nav link highlight
      let active = null;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= 150 && r.bottom > 150) {
          active = "#" + s.id;
          break;
        }
      }
      if (active) {
        navLinks.forEach((l) => {
          l.style.color =
            l.getAttribute("href") === active
              ? "#c6a667"
              : "rgba(159,168,184,0.85)";
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    // A couple of extra passes so above-the-fold content reveals before any scroll
    const t1 = setTimeout(onScroll, 120);
    const t2 = setTimeout(onScroll, 400);
    cleanup.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    });

    // Hover effects — the design used a non-standard `style-hover` attribute that the
    // Claude Design runtime handled. We reproduce it here with real event listeners.
    root.querySelectorAll("[style-hover]").forEach((el) => {
      const decls = el
        .getAttribute("style-hover")
        .split(";")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => {
          const i = s.indexOf(":");
          return [s.slice(0, i).trim(), s.slice(i + 1).trim()];
        });
      let saved = [];
      const enter = () => {
        saved = decls.map(([p]) => [p, el.style.getPropertyValue(p)]);
        decls.forEach(([p, v]) => el.style.setProperty(p, v));
      };
      const leave = () => {
        saved.forEach(([p, v]) => el.style.setProperty(p, v));
      };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      cleanup.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });

    // Before/after drag sliders
    let baStyle = null;
    const baRules = {};
    let baIdx = 0;
    root.querySelectorAll("[data-ba]").forEach((container) => {
      const before = container.querySelector("[data-ba-before]");
      const handle = container.querySelector("[data-ba-handle]");
      if (!before || !handle) return;
      const idx = ++baIdx;
      before.setAttribute("data-baid-before", idx);
      handle.setAttribute("data-baid-handle", idx);
      if (!baStyle) {
        baStyle = document.createElement("style");
        document.head.appendChild(baStyle);
        cleanup.push(() => {
          try {
            baStyle.remove();
          } catch (_) {}
        });
      }
      const apply = (pct) => {
        baRules[idx] =
          '[data-baid-before="' +
          idx +
          '"]{clip-path:inset(0 ' +
          (100 - pct).toFixed(2) +
          '% 0 0) !important}[data-baid-handle="' +
          idx +
          '"]{left:' +
          pct.toFixed(2) +
          "% !important}";
        baStyle.textContent = Object.keys(baRules)
          .map((k) => baRules[k])
          .join("");
      };
      let dragging = false;
      const set = (clientX) => {
        const r = container.getBoundingClientRect();
        let pct = ((clientX - r.left) / r.width) * 100;
        pct = Math.max(2, Math.min(98, pct));
        apply(pct);
      };
      const down = (e) => {
        dragging = true;
        try {
          container.setPointerCapture(e.pointerId);
        } catch (_) {}
        set(e.clientX);
      };
      const move = (e) => {
        if (dragging) set(e.clientX);
      };
      const up = () => {
        dragging = false;
      };
      container.addEventListener("pointerdown", down);
      container.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      cleanup.push(() => {
        container.removeEventListener("pointerdown", down);
        container.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      });
    });

    // "What's included" Interior/Exterior toggle — driven by an injected
    // stylesheet so it survives any re-render of the markup blob.
    const incBtns = Array.from(root.querySelectorAll("[data-inc-btn]"));
    if (incBtns.length) {
      const incStyle = document.createElement("style");
      document.head.appendChild(incStyle);
      cleanup.push(() => {
        try {
          incStyle.remove();
        } catch (_) {}
      });
      const setInc = (key) => {
        incStyle.textContent =
          '[data-inc-panel="' +
          key +
          '"]{display:block !important}' +
          '[data-inc-btn="' +
          key +
          '"]{background:#c6a667 !important;color:#0a1120 !important}';
      };
      incBtns.forEach((b) => {
        const h = () => setInc(b.getAttribute("data-inc-btn"));
        b.addEventListener("click", h);
        cleanup.push(() => b.removeEventListener("click", h));
      });
      setInc("interior"); // default panel
    }

    return () => cleanup.forEach((fn) => fn());
  }, [lang]);

  return (
    <div
      ref={hostRef}
      dangerouslySetInnerHTML={{ __html: siteHtml(dict[lang]) }}
    />
  );
}

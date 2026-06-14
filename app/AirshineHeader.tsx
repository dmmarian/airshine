"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type NavLink = {
  href: string;
  label: string;
};

function NavIcon({ label }: { label: string }) {
  const commonProps = {
    "aria-hidden": true,
    className: "airshine-nav__icon",
    fill: "none",
    height: 20,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    width: 20,
  };

  switch (label) {
    case "Services":
      return (
        <svg {...commonProps}>
          <path d="M4 7h16" />
          <path d="M7 12h10" />
          <path d="M10 17h4" />
        </svg>
      );
    case "Packages":
      return (
        <svg {...commonProps}>
          <path d="M4 8.5 12 4l8 4.5-8 4.5L4 8.5Z" />
          <path d="M4 8.5v7L12 20l8-4.5v-7" />
          <path d="M12 13v7" />
        </svg>
      );
    case "Coverage":
      return (
        <svg {...commonProps}>
          <path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      );
    case "Fleet":
      return (
        <svg {...commonProps}>
          <path d="M3 16 21 8" />
          <path d="m7 14-3-4" />
          <path d="m14 11-4-7" />
          <path d="m13 12 6 6" />
        </svg>
      );
    case "Process":
      return (
        <svg {...commonProps}>
          <path d="M9 6h11" />
          <path d="M9 12h11" />
          <path d="M9 18h11" />
          <path d="m4 6 .8.8L6.5 5" />
          <path d="m4 12 .8.8 1.7-1.8" />
          <path d="m4 18 .8.8 1.7-1.8" />
        </svg>
      );
    case "Contact":
      return (
        <svg {...commonProps}>
          <path d="M5 7h14v10H5z" />
          <path d="m5 8 7 5 7-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AirshineHeader({ navLinks }: { navLinks: NavLink[] }) {
  const [isCompact, setIsCompact] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 720px)");
    let lastScrollY = window.scrollY;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (!mobileQuery.matches) {
        setIsCompact(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 12) {
        setIsCompact(false);
      } else if (currentScrollY > lastScrollY + 6) {
        setIsCompact(true);
      } else if (currentScrollY < lastScrollY - 6) {
        setIsCompact(false);
      }

      lastScrollY = currentScrollY;
    };

    const handleMediaChange = () => {
      updateHeader();
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    mobileQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      mobileQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => ({
        href: link.href,
        element: document.getElementById(link.href.replace("#", "")),
      }))
      .filter(
        (section): section is { href: string; element: HTMLElement } =>
          section.element !== null,
      );

    if (sections.length === 0) {
      return;
    }

    let frameId = 0;

    const updateActiveHref = () => {
      frameId = 0;

      const headerHeight =
        document.querySelector(".airshine-header")?.getBoundingClientRect()
          .height ?? 0;
      const activationLine = headerHeight + window.innerHeight * 0.28;
      let currentHref = "";

      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= activationLine) {
          currentHref = section.href;
        }
      }

      setActiveHref(currentHref);
    };

    const requestUpdate = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateActiveHref);
      }
    };

    const sectionObserver = new IntersectionObserver(requestUpdate, {
      rootMargin: "-18% 0px -60% 0px",
      threshold: [0, 0.2, 0.5, 0.8],
    });

    sections.forEach((section) => sectionObserver.observe(section.element));
    updateActiveHref();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      sectionObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [navLinks]);

  return (
    <header
      className={`airshine-header${isCompact ? " airshine-header--compact" : ""}`}
    >
      <div className="airshine-header__inner">
        <a className="airshine-logo" href="#top" aria-label="AirShine home">
          <Image
            src="/airshine-logo.png"
            alt="AirShine"
            width={119}
            height={30}
            priority
          />
        </a>
        <nav className="airshine-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <a
                aria-current={isActive ? "location" : undefined}
                aria-label={link.label}
                className={`airshine-nav__link${
                  isActive ? " airshine-nav__link--active" : ""
                }`}
                href={link.href}
                key={link.href}
                onClick={() => setActiveHref(link.href)}
              >
                <NavIcon label={link.label} />
                <span className="airshine-nav__label">{link.label}</span>
              </a>
            );
          })}
          <a className="airshine-phone" href="tel:+40736070042">
            +40 736 070 042
          </a>
        </nav>
      </div>
    </header>
  );
}

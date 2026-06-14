"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type NavLink = {
  href: string;
  label: string;
};

export default function AirshineHeader({ navLinks }: { navLinks: NavLink[] }) {
  const [isCompact, setIsCompact] = useState(false);

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
          {navLinks.map((link) => (
            <a className="airshine-nav__link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className="airshine-phone" href="tel:+40736070042">
            +40 736 070 042
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 24) {
        setHidden(false);
      } else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100
      ) {
        setHidden(true);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <header className={`site-header${hidden ? " site-header-hidden" : ""}`}>
      <div className="header-inner">
        <Brand onNavigate={() => setMenuOpen(false)} />

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/feature-requests">Feature requests</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

        <button
          className={`menu-button${menuOpen ? " menu-button-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMenuOpen((current) => !current);
            setHidden(false);
          }}
        >
          <span />
          <span />
        </button>

        <nav
          className={`mobile-nav${menuOpen ? " mobile-nav-open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <Link href="/feature-requests" onClick={() => setMenuOpen(false)}>
            Feature requests
          </Link>
          <Link href="/privacy" onClick={() => setMenuOpen(false)}>
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}

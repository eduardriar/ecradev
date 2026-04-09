"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import MobileToggle from "./Header/MobileToggle";
import MobileNav from "./Header/MobileNav";
import NavLinks from "./Header/NavLinks";
import content from "@/lib/content";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: content.nav.links[0], href: "#skills", scroll: false },
  { label: content.nav.links[1], href: "#about", scroll: true },
  { label: content.nav.links[2], href: "/blog", scroll: true },
];

export default function Header() {
  const pathname = usePathname();
  const homePathname = "/"

  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(() => pathname === homePathname ? false : true);

  useEffect(() => {
    const welcomeSection = document.getElementById("welcome");
    if (!welcomeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => { 
        // Show header when Welcome section is NOT visible (scrolled past it)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    // By default the intersect root is the viwport from the browser, this allow us to observe when the element leaves the viewport
    observer.observe(welcomeSection);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background md:bg-transparent md:bg-background/80 md:backdrop-blur-md transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <MobileToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <ul className="hidden items-center gap-8 md:flex">
          <NavLinks navLinks={navLinks} />
          <li>
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-gradient-to-r from-yellow to-blue px-5 py-2 font-mono text-sm text-white transition-opacity hover:opacity-90"
            >
              {content.nav.contact}
            </Link>
          </li>
        </ul>
      </nav>

      <MobileNav navLinks={navLinks} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

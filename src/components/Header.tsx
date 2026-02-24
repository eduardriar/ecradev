"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo/Logo";
import MobileToggle from "./Header/MobileToggle";
import MobileNav from "./Header/MobileNav";
import NavLinks from "./Header/NavLinks";
import content from "@/lib/content.json";

const navLinks = [
  { label: content.nav.links[0], href: "/blog", scroll: false },
  { label: content.nav.links[1], href: "#skills", scroll: true },
  { label: content.nav.links[2], href: "#about", scroll: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
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

import resolveHref from "@/utils/resolveHref";
import Link from "next/link";
import content from "@/lib/content.json";

type MobileNavProps = {
    navLinks: {
        label: string;
        href: string;
        scroll: boolean;
    }[];
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
}

export default function MobileNav({ navLinks, menuOpen, setMenuOpen }: MobileNavProps) {

    return (
        <>
            {menuOpen && (
                <ul className="border-t border-border px-6 pb-4 md:hidden">
                    {navLinks.map((link) => (
                        <li key={link.label} className="py-3">
                            {link.scroll ? (
                                <a
                                    href={resolveHref(link)}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-mono text-sm"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-mono text-sm"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li className="py-3">
                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="inline-block rounded-full bg-gradient-to-r from-blue to-yellow px-5 py-2 font-mono text-sm text-white"
                        >
                            {content.nav.contact}
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
}

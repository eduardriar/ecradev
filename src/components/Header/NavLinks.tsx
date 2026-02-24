import resolveHref from "@/utils/resolveHref";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
    navLinks: {
        label: string;
        href: string;
        scroll: boolean;
    }[];
}

export default function NavLinks({ navLinks }: NavLinksProps) {

    return (
        <>
            {navLinks.map((link) => (
                <li key={link.label}>
                    {link.scroll ? (
                        <a
                            href={resolveHref(link)}
                            className="group flex flex-col items-center font-mono text-sm transition-colors hover:text-foreground"
                        >
                            {link.label}
                            <span className="mt-1 block h-[2px] w-full bg-foreground" />
                        </a>
                    ) : (
                        <Link
                            href={link.href}
                            className="group flex flex-col items-center font-mono text-sm transition-colors hover:text-foreground"
                        >
                            {link.label}
                            <span className="mt-1 block h-[2px] w-full bg-foreground" />
                        </Link>
                    )}
                </li>
            ))}
        </>
    );
}
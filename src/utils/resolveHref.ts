import { usePathname } from "next/navigation";

type NavLinks = {
    label: string;
    href: string;
    scroll: boolean;
}

export default function resolveHref(link: NavLinks) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    
    if (!link.scroll) return link.href;
    return isHome ? link.href : `/${link.href}`;
}
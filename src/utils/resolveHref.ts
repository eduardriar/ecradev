type NavLinks = {
    label: string;
    href: string;
    scroll: boolean;
}

export default function resolveHref(pathname: string, link: NavLinks) {
    const isHome = pathname === "/";
    
    if (!link.scroll) return link.href;
    return isHome ? link.href : `/${link.href}`;
}
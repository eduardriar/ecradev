import Link from "next/link"
import content from "@/lib/content.json"

export default function Logo() {
    return (
        <>
            <Link href="/" className="flex items-baseline gap-0 text-xl">
                <span className="font-sans font-bold">{content.logo.name}</span>
                <span className="font-mono font-normal text-foreground/70">
                    {" "}
                    {content.logo.suffix}
                </span>
            </Link>
        </>
    );
}

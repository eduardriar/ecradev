"use client"
import { parseHtmlSegments, TagSegment } from "@/utils/parseHtmlSegments";
import { RxDividerVertical } from "react-icons/rx";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import content from "@/lib/content.json";
import { useMobile } from "@/hooks/useMobile";

const colorMap: Record<TagSegment['type'], string> = {
    bracket: 'text-[--main-gray]',
    tagName: 'text-[--yellow]',
    attrName: 'text-[--light-blue]',
    equal: 'text-[--main-gray]',
    attrValue: 'text-[--pink]',
    content: 'text-white',
    space: 'whitespace-break-spaces'
};

function setTextColor(charIndex: number, textToSprite: string) {
    const segments = parseHtmlSegments(textToSprite);

    for (const seg of segments) {
        if (charIndex >= seg.start && charIndex < seg.end) {
            return colorMap[seg.type];
        }
    }

    return 'text-white';
}

export default function Welcome() {
    const isMobile = useMobile()
    const textToSprite = isMobile ? content.welcome.textToSpriteMobile : content.welcome.textToSprite;

    const steps = textToSprite.length + 1,
        [spriteText, setSpriteText] = useState(""),
        [frame, setFrame] = useState(1),
        [lastScroll, setLastScroll] = useState(0),
        pathname = usePathname(),
        isHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => {
            const scrolledValue = window.scrollY || window.pageYOffset,
                windowHeight = window.innerHeight,
                frameWindowRelation = scrolledValue / windowHeight,
                backgroundFrameRelation = Math.min(frame - 1, Math.floor(frame * frameWindowRelation));

            setSpriteText(textToSprite.slice(0, backgroundFrameRelation));

            if (frame <= steps) {
                if (scrolledValue > lastScroll) {
                    setFrame(frame + 1);
                    setLastScroll(scrolledValue);
                } else if (scrolledValue < lastScroll) {
                    setFrame(frame - 1);
                    setLastScroll(scrolledValue);
                }
            }
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastScroll, spriteText]);

    const printContent = () => {
        if (!isHome) {
            return (
                <></>
            )
        } else {
            return (
                <section className="w-screen h-[200vh]">
                    <div id="welcome" className={`justify-self-auto bg-foreground h-screen flex flex-col justify-center items-center px-6 py-20 font-mono sticky top-0`}>
                        <div className="max-w-2xl position-relative text-2xl">
                            <div className="flex">
                                {
                                    spriteText.split('').map((char, index) => (
                                        <span key={index} className={`${!isMobile ? setTextColor(index, textToSprite) : 'text-white whitespace-break-spaces'}`}>
                                            {char}
                                        </span>
                                    ))
                                }
                                <RxDividerVertical className="text-3xl text-white animate-cursor-blink" />
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }

    return (printContent());
}
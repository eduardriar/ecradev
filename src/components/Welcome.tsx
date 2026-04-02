"use client"
import { parseHtmlSegments, TagSegment } from "@/utils/parseHtmlSegments";
import { RxDividerVertical } from "react-icons/rx";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import content from "@/lib/content";
import { useMobile } from "@/hooks/useMobile";
import { ScrollHint } from "./Welcome/ScrollHint";

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
        [hintTextOpacity, setHintTextOpacity] = useState(100),
        frameRef = useRef(1),
        lastScrollRef = useRef(0),
        pathname = usePathname(),
        isHome = pathname === "/";

    const onScroll = useCallback(() => {
        const scrolledValue = window.scrollY,
            windowHeight = window.innerHeight,
            frame = frameRef.current,
            lastScroll = lastScrollRef.current,
            frameWindowRelation = scrolledValue / windowHeight,
            backgroundFrameRelation = Math.min(frame - 1, Math.floor(frame * frameWindowRelation));

        setSpriteText(textToSprite.slice(0, backgroundFrameRelation));
        setHintTextOpacity(Math.max(0, 1 - backgroundFrameRelation / (steps * 0.2)))

        if (frame <= steps) {
            if (scrolledValue > lastScroll) {
                frameRef.current = frame + 1;
                lastScrollRef.current = scrolledValue;
            } else if (scrolledValue < lastScroll) {
                frameRef.current = frame - 1;
                lastScrollRef.current = scrolledValue;
            }
        }
    }, [textToSprite, steps]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    const printContent = () => {
        if (!isHome) {
            return (
                <></>
            )
        } else {
            return (
                <section className="h-[200vh]">
                    <div id="welcome" className={`justify-self-auto bg-foreground h-screen flex flex-col justify-center items-center px-6 py-20 font-mono sticky top-0`}>
                        <div className="max-w-2xl position-relative text-2xl flex flex-col items-center">
                            <div style={{ opacity: hintTextOpacity }}>
                                <ScrollHint />
                            </div>
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
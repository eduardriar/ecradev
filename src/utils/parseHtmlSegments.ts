export interface TagSegment {
    start: number;
    end: number;
    type: 'bracket' | 'tagName' | 'attrName' | 'equal' | 'attrValue' | 'content' | 'space';
}

export function parseHtmlSegments(textToSprite: string): TagSegment[] {
    const segments: TagSegment[] = [];
    const regex = /^(<)(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[a-zA-Z-]+(?:="[^"]*")?)*)\s*(>)(.*?)(<)(\/[a-zA-Z][a-zA-Z0-9-]*)(>)$/;
    const match = textToSprite.match(regex);

    if (!match) return segments;

    let pos = 0;

    // Opening <
    segments.push({ start: pos, end: pos + match[1].length, type: 'bracket' });
    pos += match[1].length;

    // Optional / in closing shorthand
    pos += match[2].length;

    // Tag name
    segments.push({ start: pos, end: pos + match[3].length, type: 'tagName' });
    pos += match[3].length;

    // Attributes string (e.g. ` class="title" id="main"`)
    const attrsStr = match[4];
    if (attrsStr) {
        const attrRegex = /(\s+)([a-zA-Z-]+)(="([^"]*)")?/g;
        let attrMatch;
        let attrPos = pos;

        while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
            // Space before attribute — treat as bracket so it renders
            const spaceLen = attrMatch[1].length;
            segments.push({ start: attrPos, end: attrPos + spaceLen, type: 'space' });
            attrPos += spaceLen;

            // Attribute name (e.g. "class")
            const name = attrMatch[2];
            segments.push({ start: attrPos, end: attrPos + name.length, type: 'attrName' });
            attrPos += name.length;

            if (attrMatch[3]) {
                // = sign
                segments.push({ start: attrPos, end: attrPos + 1, type: 'equal' });
                attrPos += 1;

                // Quoted value including quotes (e.g. `"title"`)
                const quotedValue = attrMatch[3].slice(1); // remove the `=`
                segments.push({ start: attrPos, end: attrPos + quotedValue.length, type: 'attrValue' });
                attrPos += quotedValue.length;
            }
        }
        pos += attrsStr.length;
    }

    // Closing >
    segments.push({ start: pos, end: pos + match[5].length, type: 'bracket' });
    pos += match[5].length;

    // Content between tags
    const contentStr = match[6];
    if (contentStr.length > 0) {
        let contentPos = pos;
        for (const char of contentStr) {
            if (char === ' ') {
                segments.push({ start: contentPos, end: contentPos + char.length, type: 'space' })
                contentPos += char.length
            } else {
                segments.push({ start: pos, end: pos + char.length, type: 'content' });
                contentPos += char.length;
            }
        }

        pos += contentStr.length;
    }


    // Closing tag <
    segments.push({ start: pos, end: pos + match[7].length, type: 'bracket' });
    pos += match[7].length;

    // Closing tag name (includes /)
    segments.push({ start: pos, end: pos + match[8].length, type: 'tagName' });
    pos += match[8].length;

    // Closing >
    segments.push({ start: pos, end: pos + match[9].length, type: 'bracket' });

    return segments;
}
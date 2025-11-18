'use client';
import React, { useState, useEffect } from "react";

type TypingAnimationProps = {
    text: string | string[];
    speed?: number;
};

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 100 }) => {
    const fullText = Array.isArray(text) ? text.join("") : text;
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
    if (index < fullText.length) {
        const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
    }
    }, [index, fullText, speed]);

    return <span>{displayText}</span>;
};

export default TypingAnimation;

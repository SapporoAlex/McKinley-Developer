import React, { useEffect, useRef, useState } from 'react';
import '../assets/SectionTitle.scss';

interface SectionTitleProps {
    text: string;
    lang?: string;
}

const MS_PER_CHAR = 45;
const BAR_MIN_MS = 1200;

// Section heading that types itself out and draws its underline
// left-to-right the first time it scrolls into view.
const SectionTitle: React.FC<SectionTitleProps> = ({ text, lang }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const chars = Array.from(text);
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            // Wait until the title is in the upper ~70% of the screen.
            { threshold: 1, rootMargin: '0px 0px -30% 0px' },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setCount(chars.length);
            return;
        }
        // Language switches after the reveal swap the text instantly.
        if (count > 0) {
            setCount(chars.length);
            return;
        }
        let typed = 0;
        const timer = window.setInterval(() => {
            typed += 1;
            setCount(typed);
            if (typed >= chars.length) window.clearInterval(timer);
        }, MS_PER_CHAR);
        return () => window.clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, text]);

    const isTyping = isVisible && count < chars.length;

    return (
        <h1
            ref={ref}
            className={`title title--reveal${isVisible ? ' is-visible' : ''}`}
            lang={lang}
            aria-label={text}
            style={{ '--reveal-duration': `${Math.max(chars.length * MS_PER_CHAR + 600, BAR_MIN_MS)}ms` } as React.CSSProperties}
        >
            <span aria-hidden="true">
                {chars.slice(0, count).join('')}
                <span className={`title__caret${isTyping ? ' is-typing' : ''}`} />
                <span className="title__ghost">{chars.slice(count).join('')}</span>
            </span>
        </h1>
    );
};

export default SectionTitle;

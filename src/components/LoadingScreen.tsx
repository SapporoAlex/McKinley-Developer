import React, { useEffect, useState } from 'react';
import '../assets/LoadingScreen.scss';

interface LoadingScreenProps {
    onDone: () => void;
}

const DOT_INTERVAL = 375;
const DURATION = 1500;

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onDone }) => {
    const [dots, setDots] = useState(0);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        const dotTimer = setInterval(() => {
            setDots((current) => (current + 1) % 4);
        }, DOT_INTERVAL);

        const closeTimer = setTimeout(() => {
            setClosing(true);
        }, DURATION);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;
            clearInterval(dotTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
        if (event.target !== event.currentTarget) return;
        if (closing) onDone();
    };

    return (
        <div
            className={`loading-screen ${closing ? 'loading-screen--closing' : ''}`}
            onTransitionEnd={handleTransitionEnd}
        >
            <div className="loading-screen__brand">Alex McKinley FE</div>
            <div className="loading-screen__spinner" aria-hidden="true"></div>
            <p className="loading-screen__text">
                Booting up
                <span className="loading-screen__dots">{'.'.repeat(dots)}</span>
            </p>
        </div>
    );
};

export default LoadingScreen;

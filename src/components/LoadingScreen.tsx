import React, { useEffect, useState } from 'react';
import '../assets/LoadingScreen.scss';

interface LoadingScreenProps {
    onDone: () => void;
}

// Timeline (ms): logo fades in 1000 → fades out 600 → black fades away 800.
const LOGO_IN = 1000;
const LOGO_OUT = 600;
const BLACK_OUT = 800;

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onDone }) => {
    const [phase, setPhase] = useState<'in' | 'out' | 'closing'>('in');

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        const t1 = setTimeout(() => setPhase('out'), LOGO_IN);
        const t2 = setTimeout(() => setPhase('closing'), LOGO_IN + LOGO_OUT);
        const t3 = setTimeout(onDone, LOGO_IN + LOGO_OUT + BLACK_OUT);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={`loading-screen loading-screen--${phase}`}
            style={{
                '--logo-in': `${LOGO_IN}ms`,
                '--logo-out': `${LOGO_OUT}ms`,
                '--black-out': `${BLACK_OUT}ms`,
            } as React.CSSProperties}
            role="status"
            aria-label="Loading"
        >
            <img
                className="loading-screen__logo"
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt=""
            />
        </div>
    );
};

export default LoadingScreen;

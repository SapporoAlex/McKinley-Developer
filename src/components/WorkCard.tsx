import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import '../assets/GridWorks.scss';
import '../assets/WorkCard.scss';
import Tag from './Tag';


interface WorkCardProps {
    img: string;
    i18nKey: string;
    link?: string;
    date?: string;
    roles: string[];
    tools: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({ img, i18nKey, link, date, roles, tools }) => {
    const {t} = useTranslation();
    const title = t(`${i18nKey}.title`);
    const desc = t(`${i18nKey}.desc`);
    const cardRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isModalMounted, setIsModalMounted] = useState(false);
    const [isModalClosing, setIsModalClosing] = useState(false);
    const [showScrollFade, setShowScrollFade] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isModalMounted) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isModalMounted]);

    useEffect(() => {
        if (!isModalMounted) return;
        const el = modalRef.current;
        if (!el) return;

        const updateScrollFade = () => {
            setShowScrollFade(el.scrollHeight - el.scrollTop - el.clientHeight > 4);
        };

        updateScrollFade();
        el.addEventListener('scroll', updateScrollFade, { passive: true });
        window.addEventListener('resize', updateScrollFade);

        return () => {
            el.removeEventListener('scroll', updateScrollFade);
            window.removeEventListener('resize', updateScrollFade);
        };
    }, [isModalMounted]);

    const openModal = () => {
        setIsModalClosing(false);
        setIsModalMounted(true);
    };

    const closeModal = () => {
        setIsModalClosing(true);
    };

    const handleModalAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
        if (event.target !== event.currentTarget) return;
        if (isModalClosing) {
            setIsModalMounted(false);
            setIsModalClosing(false);
        }
    };

    return (
        <>
            <div
                className={`work-card ${isVisible ? 'work-card--visible' : ''}`}
                ref={cardRef}
                role="button"
                tabIndex={0}
                onClick={openModal}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        openModal();
                    }
                }}
            >
                <div className="work-card__image-frame">
                    <img className="work-card__image" src={img} alt={title} loading="lazy" />
                </div>
                <div className='work-card__lower'>
                    <div className='work-card__text'>
                        <h2 className="work-card__title">{title}</h2>
                        {date && <span className="work-card__date">{date}</span>}
                    </div>
                    <div className="work-card__role-list">
                        {roles.map((role, index) => (
                            <Tag key={index} text={role} variant="role" />
                        ))}
                    </div>
                    <div className="work-card__tool-list">
                        {tools.map((tool, index) => (
                            <Tag key={index} text={tool} variant="tool" />
                        ))}
                    </div>
                </div>
            </div>

            {isModalMounted && createPortal(
                <div className={`work-card-modal-overlay ${isModalClosing ? 'work-card-modal-overlay--closing' : ''}`} onClick={closeModal}>
                    <div
                        className={`work-card-modal ${isModalClosing ? 'work-card-modal--closing' : ''}`}
                        role="dialog"
                        aria-modal="true"
                        aria-label={title}
                        onClick={(event) => event.stopPropagation()}
                        onAnimationEnd={handleModalAnimationEnd}
                    >
                        <span className="work-card-modal__edge" aria-hidden="true"></span>
                        <div className="work-card-modal__scroll" ref={modalRef}>
                            <div className="work-card-modal__image-frame">
                                <img className="work-card-modal__image" src={img} alt={title} />
                            </div>
                            <div className="work-card-modal__body">
                                <h2 className="work-card-modal__title">{title}</h2>
                                {date && <span className="work-card-modal__date">{date}</span>}
                                <p className="work-card-modal__description">{desc}</p>
                                <div className="work-card-modal__role-list">
                                    {roles.map((role, index) => (
                                        <Tag key={index} text={role} variant="role" />
                                    ))}
                                </div>
                                <div className="work-card-modal__tool-list">
                                    {tools.map((tool, index) => (
                                        <Tag key={index} text={tool} variant="tool" />
                                    ))}
                                </div>
                                {link && (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn work-card-modal__visit"
                                    >
                                        {t('common.liveSite')}
                                        <svg
                                            className="work-card-modal__visit-icon"
                                            viewBox="0 0 24 24"
                                            width="16"
                                            height="16"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                )}
                                <button
                                    type="button"
                                    className="work-card-modal__close"
                                    onClick={closeModal}
                                >
                                    {t('common.close')}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`work-card-modal__scroll-fade ${showScrollFade ? 'work-card-modal__scroll-fade--visible' : ''}`}
                            aria-hidden="true"
                        >
                            <svg
                                className="work-card-modal__scroll-fade-chevron"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default WorkCard;

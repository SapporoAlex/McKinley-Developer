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
    const [isVisible, setIsVisible] = useState(false);
    const [isModalMounted, setIsModalMounted] = useState(false);
    const [isModalClosing, setIsModalClosing] = useState(false);

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

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
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
                                    Visit Site
                                </a>
                            )}
                            <button
                                type="button"
                                className="work-card-modal__close"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default WorkCard;

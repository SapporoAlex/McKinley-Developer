import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/GridWorks.scss';
import '../assets/WorkCard.scss';
import Tag from './Tag';
import SitePreviewVideo from "./SitePreviewVideo";


interface WorkCardProps {
    img: string;
    videoWebm: string;
    videoMp4: string;
    i18nKey: string;
    link: string;
    tools: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({ img, videoWebm, videoMp4, i18nKey, link, tools }) => {
    const {t} = useTranslation();
    const title = t(`${i18nKey}.title`);
    const desc = t(`${i18nKey}.desc`);
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <>
            <a href={link} target='_blank'>
                <div className={`work-card ${isVisible ? 'work-card--visible' : ''}`} ref={cardRef}>
                    <div className="work-card__image-frame">
                        <SitePreviewVideo
                            webm={videoWebm}
                            mp4={videoMp4}
                            poster={img}
                        />
                    </div>
                    <div className='work-card__lower'>
                        <div className='work-card__text'>
                            <h2 className="work-card__title">{title}</h2>
                            <p className="work-card__description">{desc}</p>
                        </div>
                        <div className="work-card__tool-list">
                            {tools.map((tool, index) => (
                                <Tag key={index} text={tool} />
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
};

export default WorkCard;
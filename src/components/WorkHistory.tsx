import React from 'react';
import { useTranslation } from 'react-i18next';
import workHistoryData from '../data/workHistory.json';
import '../assets/WorkHistory.scss';
import '../assets/Shared.scss';

const WorkHistory: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="work-history" className="work-history-section">
            <div className="bg-wrapper" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_image.webp)` }}></div>
            <div className="main-container">
                <h1 className="title" lang="en">{t('workHistory.title')}</h1>
                <ol className="work-history-timeline">
                    {workHistoryData.map((entry, index) => (
                        <li key={index} className="work-history-entry">
                            <span className="work-history-entry__year">{entry.year}</span>
                            <p className="work-history-entry__text">{t(`workHistory.entries.${entry.key}`)}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default WorkHistory;

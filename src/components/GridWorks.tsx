import React from 'react';
import worksData from '../data/works.json';
import WorkCard from './WorkCard';
import '../assets/GridWorks.scss';
import { useTranslation } from 'react-i18next'

const GridWorks: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section id="works" className="works-section">
            <div className="bg-wrapper"></div>
            <div className="main-container">
            <h1 lang="en">Works</h1>
            <div className="grid-works">
            {worksData.map((work: any) => (
                <WorkCard
                    key={work.id}
                    img={work.poster}
                    videoWebm={work.videoWebm}
                    videoMp4={work.videoMp4}
                    i18nKey={work.i18nKey}
                    link={work.link}
                    tools={work.tools}
                />
            ))}
            </div>
            </div>
        </section>
        );
    };

export default GridWorks;
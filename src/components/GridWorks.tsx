import React from 'react';
import worksData from '../data/works.json';
import WorkCard from './WorkCard';
import SectionTitle from './SectionTitle';
import '../assets/GridWorks.scss';
import '../assets/Shared.scss';


const GridWorks: React.FC = () => {

    return (
        <section id="works" className="works-section">
            <div className="bg-wrapper" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_image.webp)` }}></div>
            <div className="main-container">
            <SectionTitle text="Works" lang="en" />
            <div className="grid-works">
            {worksData.map((work: any) => {
                const imgPath = `${import.meta.env.BASE_URL}${work.poster.replace(/^\//, '')}`;
                return (
                    <WorkCard
                        key={work.id}
                        img={imgPath}
                        i18nKey={work.i18nKey}
                        link={work.link}
                        date={work.date}
                        roles={work.roles}
                        tools={work.tools}
                    />
                );
            })}
            </div>
            </div>
        </section>
        );
    };

export default GridWorks;
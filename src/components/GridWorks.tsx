import React from 'react';
import worksData from '../data/works.json';
import WorkCard from './WorkCard';
import '../assets/GridWorks.scss';


const GridWorks: React.FC = () => {

    return (
        <section id="works" className="works-section">
            <div className="bg-wrapper" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_image.webp)` }}></div>
            <div className="main-container">
            <h1 lang="en">Works</h1>
            <div className="grid-works">
            {worksData.map((work: any) => {
                const imgPath = `${import.meta.env.BASE_URL}${work.poster.replace(/^\//, '')}`;
                return (
                    <WorkCard
                        key={work.id}
                        img={imgPath}
                        videoWebm={`${import.meta.env.BASE_URL}${work.videoWebm?.replace(/^\//, '')}`}
                        videoMp4={`${import.meta.env.BASE_URL}${work.videoMp4?.replace(/^\//, '')}`}
                        i18nKey={work.i18nKey}
                        link={work.link}
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
import React from 'react';
import '../assets/GridTools.scss';


const GridTools: React.FC = () => {
    
    const tools = [
        { id: '1', img: `${import.meta.env.BASE_URL}html.png`, alt: 'HTML5' },
        { id: '2', img: `${import.meta.env.BASE_URL}css.png`, alt: 'CSS3' },
        { id: '3', img: `${import.meta.env.BASE_URL}ts.png`, alt: 'TypeScript' },
        { id: '4', img: `${import.meta.env.BASE_URL}react.png`, alt: 'React' },
        { id: '5', img: `${import.meta.env.BASE_URL}vue.png`, alt: 'Vue' },
        { id: '6', img: `${import.meta.env.BASE_URL}astro.png`, alt: 'Astro' },
        // { id: '7', img: '/django.png', alt: 'Django' },
    ];
    
    return (
        <section id="tools" className="tools-section">
            <div className="main-container">
                <h1 lang="en">Toolbox</h1>
                <div className="grid-tools">
                    {tools.map((tool) => (
                        <div key={tool.id} className="tool-card">
                            <div className="tool-flip-card">
                                <div className="tool-flip-inner">
                                    <div className="tool-flip-front">
                                        <img src={tool.img} alt={tool.alt}/>
                                    </div>
                                    <div className="tool-flip-back">
                                        <img src={tool.img} 
                                        alt={tool.alt} 
                                        style={{ transform: "scaleX(-1)" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GridTools;
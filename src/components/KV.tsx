import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import '../assets/KV.scss';
import "../assets/Shared.scss";


const KV: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section id="top" className="top">
            <div className="container-section">
                <div className="pair-box">    
                    <h1 className="title">{t('top.title')}<span lang="en">{t('top.title-position')}</span></h1>
                        <p>{t('top.text')}</p>
                        <div className="pair-b__cta">
                            <Button buttonLink="#works" text={t('top.button')} />
                        </div> 
                </div>
                <div className="bg-wrapper" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg_image.webp)` }}></div>
            </div>
        </section>
    )

}



export default KV;
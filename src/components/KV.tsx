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
                    <div className="kv-image-frame">
                        <div className="kv-image-frame-inner">
                            <div className="fade-frame--tl"></div>
                            <div className="fade-frame--tr"></div>
                            <div className="fade-frame--r"></div>
                            <div className="fade-frame--bl"></div>
                            <div className="fade-frame--br"></div>
                            <img className="kv-image" src={`${import.meta.env.BASE_URL}profile_1.webp`} alt="profile" />
                        </div>
                    </div>
                    <div className="pair-b">
                        <h1 className="title"><span lang="en">{t('top.title')}</span><br/>{t('top.title-position')}</h1>
                        <p>{t('top.text')}</p>
                        <div className="pair-b__cta">
                            <Button buttonLink="#works" text={t('top.button')} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}



export default KV;
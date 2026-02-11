import React, { useState } from 'react';
import '../assets/Contact.scss';
import '../assets/Shared.scss';
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
    const {t} = useTranslation();
    const [copied, setCopied] = useState(false);
    return (

        <section id="contact" className="contact-section">
            <div className="main-container">
                <div className="contact-wrapper">
                    <div className="contact-text-area">
                        <h1 lang="en">Contact</h1>
                        <p>{t('contact.text')}</p>
                        <p className="contact-email-row">
                            <span className="contact-email">alexanderfromaustralia@gmail.com</span>
                            <button
                                type="button"
                                className="copy-btn"
                                onClick={() => {
                                    const email = 'alexanderfromaustralia@gmail.com';
                                    navigator.clipboard?.writeText(email).then(() => {
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 2000);
                                    }).catch(() => {
                                        // fallback for unsupported environments
                                        const input = document.createElement('input');
                                        input.value = email;
                                        document.body.appendChild(input);
                                        input.select();
                                        try { document.execCommand('copy'); } catch (e) {}
                                        document.body.removeChild(input);
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 2000);
                                    });
                                }}
                                aria-label={t('contact.copy') || 'Copy email'}
                            >
                                {copied ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M16 1H4a2 2 0 0 0-2 2v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <rect x="8" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                )}
                            </button>
                            <img className="contact-image" src={`${import.meta.env.BASE_URL}profile_2.webp`} alt="profile" />
                        </p>
                    </div>
                    <div className="contact-image-frame">
                        <div className="contact-image-frame-inner">
                            <div className="fade-frame--tl-dark"></div>
                            <div className="fade-frame--tr-dark"></div>
                            <div className="fade-frame--bl-dark"></div>
                            <div className="fade-frame--br-dark"></div>
                            <img className="contact-image" src={`${import.meta.env.BASE_URL}profile_2.webp`} alt="profile" />
                        </div>
                    </div>
                </div>
            </div>

        </section>

        );
    };

export default Contact;
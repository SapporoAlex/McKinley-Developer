import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitch from './LangSwitch';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
      if (menuRef.current && 
          !menuRef.current.contains(target) &&
          burgerRef.current &&
          !burgerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navbar-container">
      <header className="navbar">
        <div className="header-inner">
          <div className="nav-left">
            <img className="nav-logo" src="favicon.svg" alt="AM logo" />
          </div>

          <div className="nav-right">


            {/* Desktop links */}
            <nav className="nav-links">
              <a href="#top">{t('header.top')}</a>
              <a href="#tools">{t('header.tools')}</a>
              <a href="#works">{t('header.works')}</a>
              <a href="#contact">{t('header.contact')}</a>
            </nav>
                      <LangSwitch />

            {/* Hamburger for mobile/tablet */}
            <div  ref={burgerRef}
                  className="hamburger" 
                  onClick={() => {
              if (!menuOpen) {setMenuOpen(true)
              } else {
                setMenuOpen(false)}
              }}>
              <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            </div>
          </div>
        </div>
            {/* Mobile menu */}
            {/* {menuOpen && ( */}
            <div ref={menuRef} className={`mobile-menu ${menuOpen ? 's-right-in' : ''}`}>
              <a href="#top" onClick={() => setMenuOpen(false)}>
                {t('header.top')}
              </a>
              <a href="#tools" onClick={() => setMenuOpen(false)}>
                {t('header.tools')}
              </a>
              <a href="#works" onClick={() => setMenuOpen(false)}>
                {t('header.works')}
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t('header.contact')}
              </a>
            </div>
            {/* )} */}
      </header>
    </div>
  );
};

export default Navbar;

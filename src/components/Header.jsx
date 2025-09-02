// Header.jsx
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Logo from '../img/logo.jpg';
import './Header.scss';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const popoverRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    }, [isMobileMenuOpen]);

    const services = [
        { id: 'srv-offer', label: 'Что мы предлагаем' },
        { id: 'srv-radiomonitoring', label: 'Полный контроль радиопространства' },
        { id: 'srv-cycle', label: 'Полный цикл защиты' },
        { id: 'srv-deploy', label: 'Внедрение и масштаб' },
        { id: 'srv-radio-analytics', label: 'Радиоаналитика' },
        { id: 'srv-video-analytics', label: 'Видеоаналитика' },
        { id: 'srv-dpi', label: 'Анализ корпоративного трафика DPI' },
        { id: 'srv-pbx', label: 'Корпоративная АТС и защищённый мессенджер' },



    ];

    useEffect(() => {
        const onDocClick = (e) => {
            if (popoverRef.current && !popoverRef.current.contains(e.target)) setPopoverOpen(false);
        };
        if (popoverOpen) document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [popoverOpen]);

    const goToService = (id) => {
        setPopoverOpen(false);
        // если уже на / — крутим сразу; иначе — передаем state для скролла в About
        if (location.pathname === '/') {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            else navigate('/', { state: { scrollToId: id } });
        } else {
            navigate('/', { state: { scrollToId: id } });
        }
    };

    return (
        <header className="header">
            <div className="logo-block">
                <img src={Logo} alt="Логотип" className="logo-placeholder" />
            </div>

            <nav className="nav-menu">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    О компании
                </Link>

                {/* Кнопка Услуги => поповер */}
                <div className="nav-dropdown" ref={popoverRef}>
                    <button
                        className="nav-link dropdown-button"
                        onClick={() => setPopoverOpen((v) => !v)}
                        aria-expanded={popoverOpen}
                        aria-haspopup="menu"
                    >
                        Услуги ▾
                    </button>

                    {popoverOpen && (
                        <div className="services-popover" role="menu">
                            <div className="services-popover-title">Наши услуги</div>
                            <ul className="services-popover-list">
                                {services.map((s) => (
                                    <li key={s.id}>
                                        <button className="services-popover-item" onClick={() => goToService(s.id)}>
                                            {s.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="contacts">8 (918) 049-10-45</div>

                {/* <div className="cta-wrapper">
                    <Link to="/application" className={`nav-link ${location.pathname === '/application' ? 'active' : ''}`}>
                        Оставить заявку
                    </Link>
                </div> */}
            </nav>

            <button
                className="burger-button"
                aria-label="Меню"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span className="burger-icon" aria-hidden="true"></span>
            </button>

            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>О компании</Link>

                    {/* мобильный список услуг */}
                    <div className="mobile-services">
                        {services.map((s) => (
                            <button
                                key={s.id}
                                className="mobile-service-item"
                                onClick={() => { setIsMobileMenuOpen(false); goToService(s.id); }}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>

                    <div className="mobile-contacts">8 (918) 049-10-45</div>
                    {/* <Link to="/application" className="cta-button" onClick={() => setIsMobileMenuOpen(false)}>
                        Оставить заявку
                    </Link> */}
                </div>
            )}
        </header>
    );
}

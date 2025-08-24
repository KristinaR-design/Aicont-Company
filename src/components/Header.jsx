import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../img/logo.jpg';
import './Header.scss';

export default function Header() {
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // запрет прокрутки при открытом меню
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    const navItems = [
        { path: '/41-10', label: 'Системы контроля и управления доступом (СКУД)' },
        { path: '/41-20', label: 'Системы видеонаблюдения (CCTV)' },
        { path: '/42-11', label: 'Проектирование и монтаж инженерных сетей' },
        { path: '/42-12', label: 'ИТ-инфраструктура и цифровая интеграция' },

    ];

    return (
        <header className="header">
            {/* НОВЫЙ контейнер */}
            <div className="logo-block">
                <img src={Logo} alt="Логотип" className="logo-placeholder" />
            </div>

            {/* desktop-меню (как у тебя) */}
            <nav className="nav-menu">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>О компании</Link>

                <div className="nav-dropdown" onMouseLeave={() => setDropdownOpen(false)}>
                    <button
                        className="nav-link dropdown-button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                    >
                        Услуги ▾
                    </button>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="contacts">+7 (000) 000-00-00</div>

                <div className="cta-wrapper">
                    <Link to="/application" className={`nav-link ${location.pathname === '/application' ? 'active' : ''}`}>
                        Оставить заявку
                    </Link>
                </div>
            </nav>

            {/* бургер */}
            <button className="burger-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Меню">
                ☰
            </button>


            {/* мобильное меню-полотно */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>О компании</Link>
                    {navItems.map((item) => (
                        <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
                    ))}
                    <div className="mobile-contacts">+7 (000) 000-00-00</div>
                    <Link to="/application" className="cta-button" onClick={() => setIsMobileMenuOpen(false)}>
                        Оставить заявку
                    </Link>
                </div>
            )}
        </header>
    );
}
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Page from './Page'
import './Main.css'
import About from './About';


export default function Main() {

    useEffect(() => {
        const container = document.getElementById('trail-container');

        const handleMouseMove = (e) => {
            const dot = document.createElement('div');
            dot.className = 'trail-dot';
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
            container.appendChild(dot);
            setTimeout(() => dot.remove(), 600);
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div id="trail-container"></div>

            <main>

                <Routes>
                    <Route path="/application" element={<Page
                        title="Оставить заявку"
                        description="НАНАНАНАНАНАНАННАНАНА"
                        advantages={['Современные технологии', 'Высокая надежность', 'Комплексный подход']}
                        bgClass="bg-electric"
                    />} />

                    {/* О нас */}
                    <Route path="/" element={<About />} />


                    <Route path="/41-10" element={<Page
                        title="Системы контроля и управления доступом (СКУД)"
                        description="Профессиональная разработка строительных проектов любой сложности."
                        advantages={['Опытные проектировщики', 'Индивидуальный подход', 'Соблюдение сроков']}
                        bgClass="bg-projects"
                    />} />
                    <Route path="/41-20" element={<Page
                        title="Системы видеонаблюдения (CCTV)"
                        description="Строительство современных жилых комплексов и коммерческих объектов."
                        advantages={['Качественные материалы', 'Гарантия на работы', 'Собственный парк техники']}
                        bgClass="bg-buildings"
                    />} />
                    <Route path="/42-11" element={<Page
                        title="Проектирование и монтаж инженерных сетей"
                        description="Комплексное строительство и реконструкция дорог."
                        advantages={['Соблюдение стандартов', 'Скорость выполнения', 'Современная техника']}
                        bgClass="bg-roads"
                    />} />
                    <Route path="/42-12" element={<Page
                        title="ИТ-инфраструктура и цифровая интеграция"
                        description="Проектирование и строительство железнодорожной инфраструктуры."
                        advantages={['Инновационные решения', 'Безопасность', 'Опытные специалисты']}
                        bgClass="bg-railways"
                    />} />
                </Routes>

            </main>
        </>
    )
} 
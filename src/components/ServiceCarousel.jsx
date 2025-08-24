import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ServiceCarousel.scss'

import imgSCUD from '../img/SCUD.jpeg'
import imgCCTV from '../img/CCTV.jpeg'
import imgPAMIS from '../img/PAMIS.jpg'
import imgIT from '../img/ITInf.jpg'

const services = [
    {
        title: 'Системы контроля и управления доступом (СКУД)',
        description:
            'Проектирование, установка и сопровождение систем идентификации по картам, QR-кодам, биометрии. Автоматизация проходных, точек входа, турникетов, шлагбаумов. Внедрение систем учета рабочего времени с возможностью аналитики и интеграции в ERP',
        link: '/41-10',
        image: imgSCUD,
    },
    {
        title: 'Системы видеонаблюдения (CCTV)',
        description:
            'Внедрение систем IP-видеонаблюдения на основе облачных и локальных решений. Инсталляция камер высокого разрешения, серверов хранения, интеллектуального анализа видео и интеграции с системами безопасности',
        link: '/41-20',
        image: imgCCTV,
    },
    {
        title: 'Проектирование и монтаж инженерных сетей',
        description:
            'Выполнение внутренних и внешних слаботочных сетей, подготовка инфраструктуры под серверные, монтаж стоек, шкафов, прокладка кабельных трасс. Все работы сопровождаются проектной документацией и актами сдачи.',
        link: '/42-11',
        image: imgPAMIS,
    },
    {
        title: 'ИТ-инфраструктура и цифровая интеграция',
        description:
            'Объединение разрозненных систем в единую управляемую платформу. Создание систем мониторинга, аналитики и удаленного доступа для администраторов и заказчиков.',
        link: '/42-12',
        image: imgIT,
    },
]

const PrevArrow = ({ className, onClick }) => (
    <div className={`${className} custom-arrow left`} onClick={onClick}>
        ‹
    </div>
)

const NextArrow = ({ className, onClick }) => (
    <div className={`${className} custom-arrow right`} onClick={onClick}>
        ›
    </div>
)

const ServiceCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    }



    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="slide">
                        <Link to={service.link}>
                            <div className="slide-card">
                                <img src={service.image} alt={service.title} className="slide-image" />
                                <h3 className="slide-title">{service.title}</h3>
                                <p className="slide-description">{service.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ServiceCarousel

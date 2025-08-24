import Radar from "../img/Radar.jpg"; // или "/img/radar.png" из public
import './About.scss'
import Haker from '../img/theft/Haker.png'
import HarmPO from '../img/theft/HarmPO.png'
import Spy from '../img/theft/Spy.png'
import SpyGadget from '../img/theft/SpyGadget.png'

import Choose from '../img/offer/Choose.png'
import Model from '../img/offer/Model.png'
import Setting from '../img/offer/Setting.png'
import Safe from '../img/offer/Safe.png'

import Shem from '../img/ratio/Shem.png'
import Bluetooth from '../img/ratio/Bluetooth.png'
import Map from '../img/ratio/Map.png'
import Search from '../img/ratio/Search.png'
import WiFi from '../img/ratio/WiFi.png'

import key from '../img/cycle/key.png'
import phone from '../img/cycle/phone.png'
import svas from '../img/cycle/svas.png'
import direct from '../img/cycle/direct.png'


import Geo from "../img/deploy/Geo.png"
import Integtation from "../img/deploy/Integration.png"
import Mobil from "../img/deploy/MobilComponent.png"
import Schedul from "../img/deploy/Schedule.png"
import Sensore from "../img/deploy/Sensor.png"
import Line from "../img/deploy/Line.png"

import Radio from "../img/radio/radio.png"

import Video1 from "../img/video/video1.png"
import Video2 from "../img/video/video2.png"

import DPI from '../img/DPI/DPI.png'

import PBX from "../img/pbx/PBX.png"





export default function About() {
    return (
        <>
            <section className="hero-split">
                <div className="hero-split__inner">
                    <div className="hero-split__media">
                        <img src={Radar} alt="Радар" />
                    </div>

                    <div className="hero-split__content">
                        <h1 className="hero-split__title">
                            <span className="accent">Cyber</span>Radar<br />
                            <span className="accent">SPY</span>Radar
                        </h1>

                        <p className="hero-split__text">
                            Защита вашей интеллектуальной собственности от инсайдеров
                            и промышленного шпионажа
                        </p>
                    </div>
                </div>
            </section>


            <section className="theft">
                <h2 className="theft__title">
                    КАК МОГУТ <span className="accent">УКРАСТЬ ВАШИ ДАННЫЕ</span>
                </h2>

                <div className="theft__grid">
                    {/* 1 */}
                    <article className="theft__item">
                        <img className="theft__icon" src={HarmPO} alt="" />
                        <h3 className="theft__heading accent">Внедрение вредоносного ПО</h3>
                        <p className="theft__text">
                            на устройства, обрабатывающие конфиденциальные данные
                        </p>
                    </article>

                    {/* 2 */}
                    <article className="theft__item">
                        <img className="theft__icon" src={Spy} alt="" />
                        <h3 className="theft__heading accent">Инсайдер или шпион</h3>
                        <p className="theft__text">
                            копирует данные, фотографирует, снимает видео и передаёт данные
                            конкурентам под благовидным предлогом может проникнуть туда,
                            где хранятся секреты
                        </p>
                    </article>

                    {/* 3 */}
                    <article className="theft__item">
                        <img className="theft__icon" src={Haker} alt="" />
                        <h3 className="theft__heading accent">Хакеры</h3>
                        <p className="theft__text">
                            нанятые конкурентами или действующие из иных корыстных побуждений,
                            используют уязвимости вашей инфраструктуры
                        </p>
                    </article>

                    {/* 4 */}
                    <article className="theft__item">
                        <img className="theft__icon" src={SpyGadget} alt="" />
                        <h3 className="theft__heading accent">Шпионские устройства</h3>
                        <p className="theft__text">
                            трекеры и иные средства технической разведки
                        </p>
                    </article>
                </div>
            </section>

            <section className="offer">
                <h2 className="offer__title">
                    ЧТО МЫ <span className="accent">ПРЕДЛАГАЕМ</span>
                </h2>

                <div className="offer__grid">
                    <article className="offer__item">
                        <img className="offer__icon" src={Safe} alt="" />
                        <p className="offer__text">
                            Поможем определиться с тем что нужно защищать и определим перечень недопустимых событий
                        </p>
                    </article>

                    <article className="offer__item">
                        <img className="offer__icon" src={Model} alt="" />
                        <p className="offer__text">
                            Определим модель угроз риски и возможные векторы хищения коммерческой тайны
                        </p>
                    </article>

                    <article className="offer__item">
                        <img className="offer__icon" src={Choose} alt="" />
                        <p className="offer__text">
                            Поможем выбрать необходимые и достаточные меры и средства защиты вашего бизнеса от внутренних и внешних угроз
                        </p>
                    </article>

                    <article className="offer__item">
                        <img className="offer__icon" src={Setting} alt="" />
                        <p className="offer__text">
                            Внедрим выбранные методы и средства защиты поможем организовать круглосуточный мониторинг
                        </p>
                    </article>
                </div>
            </section>


            <section className="radio">
                <h2 className="radio__title">
                    <span className="accent">ПОЛНЫЙ КОНТРОЛЬ</span> РАДИОПРОСТРАНСТВА<br />
                    ВАШЕЙ ЛАБОРАТОРИИ
                </h2>

                <div className="radio__grid">
                    {/* левая колонка: пункты */}
                    <ul className="radio__list">
                        <li className="radio__item">
                            <img className="radio__icon" src={WiFi} alt="" />
                            <p className="radio__text">
                                Обнаружение <span className="accent">всех беспроводных устройств</span>,
                                даже если не подключены к Wi-Fi
                            </p>
                        </li>

                        <li className="radio__item">
                            <img className="radio__icon" src={Bluetooth} alt="" />
                            <p className="radio__text">
                                Анализ Bluetooth, BLE, Wi-Fi и сотовой связи 2G–5G — до 6 ГГц
                            </p>
                        </li>

                        <li className="radio__item">
                            <img className="radio__icon" src={Map} alt="" />
                            <p className="radio__text">
                                Визуализация где находится устройство,
                                <span className="accent"> что оно делает, с кем оно связано, куда передаёт данные</span>
                            </p>
                        </li>

                        <li className="radio__item">
                            <img className="radio__icon" src={Search} alt="" />
                            <p className="radio__text">
                                Даже если устройство не передаёт данные — мы его обнаружим
                            </p>
                        </li>
                    </ul>

                    {/* правая колонка: иллюстрация/макет */}
                    <div className="radio__media">
                        {/* Положи файл в public/img/radio-map.png или замени путь */}
                        <img className="radio__img" src={Shem} alt="Схема радиокарты" />
                    </div>
                </div>
            </section>

            <section className="cycle">
                <h2 className="cycle__title">
                    ПОЛНЫЙ <span className="accent">ЦИКЛ ЗАЩИТЫ</span>
                </h2>

                <div className="cycle__grid">
                    {/* Шаг 1 */}
                    <article className="cycle__step">
                        <header className="cycle__head">
                            <div className="cycle__num">1</div>
                            <div className="cycle__name">Обнаружение</div>
                        </header>

                        {/* Место под картинку шага */}
                        <div className="cycle__pic">
                            <img src={svas} alt="" />
                        </div>

                        <ul className="cycle__list">
                            <li>Пассивные сенсоры <span className="accent">сканируют эфир</span> 60 МГц — 6 ГГц</li>
                            <li>протоколы LTE BLE Wi-Fi</li>
                            <li>конкретные модели устройств</li>
                            <li>точную геопозицию устройства</li>
                        </ul>
                    </article>

                    {/* Стрелка как картинка */}
                    <div className="cycle__arrow" aria-hidden="true">
                        <img src={direct} alt="" />
                    </div>

                    {/* Шаг 2 */}
                    <article className="cycle__step">
                        <header className="cycle__head">
                            <div className="cycle__num">2</div>
                            <div className="cycle__name">Анализ</div>
                        </header>

                        <div className="cycle__pic">
                            <img src={phone} alt="" />
                        </div>

                        <p className="cycle__text">
                            Устройство помечается на карте. <span className="accent">Анализируется поведение</span> —
                            передаёт ли данные, с кем связано. Возможны интеграции: SIEM, MDM, камеры и др.
                        </p>
                    </article>

                    <div className="cycle__arrow" aria-hidden="true">
                        <img src={direct} alt="" />
                    </div>

                    {/* Шаг 3 */}
                    <article className="cycle__step">
                        <header className="cycle__head">
                            <div className="cycle__num">3</div>
                            <div className="cycle__name">Действие</div>
                        </header>

                        <div className="cycle__pic">
                            <img src={key} alt="" />
                        </div>

                        <p className="cycle__text">
                            <span className="accent">Автоматическая блокировка</span>, отключение от сети или изъятие.
                            История активности сохраняется — можно посмотреть поведение любого гаджета.
                        </p>
                    </article>
                </div>
            </section>

            {/* Внедрение и масштаб слайд 6 */}
            <section className="deploy">
                <h2 className="deploy__title">
                    <span className="accent">ВНЕДРЕНИЕ</span> И МАСШТАБ
                </h2>



                <div className="deploy__grid">
                    {/* Левая колонка */}
                    <ul className="deploy__list">
                        <li className="deploy__item">
                            <img className="deploy__icon" src={Sensore} alt="" />
                            <p className="deploy__text">
                                <span className="accent">Пассивные сенсоры</span> устанавливаются в офисе
                                <br />на потолке или трекерах
                            </p>
                        </li>

                        <li className="deploy__item">
                            <img className="deploy__icon" src={Integtation} alt="" />
                            <p className="deploy__text">
                                <span className="accent">Интеграция</span> с SIEM MDM Wi-Fi системами камерами 2FA
                            </p>
                        </li>

                        {/* ↓ добавлен модификатор, чтобы опустить текст чуть ниже */}
                        <li className="deploy__item deploy__item--oneui">
                            <img className="deploy__icon" src="/img/icons/one-ui.svg" alt="" />
                            <p className="deploy__text deploy__text--bar">
                                <span className="accent">Один интерфейс одно решение</span> —
                                вы полностью видите и контролируете радиопространство вашей лаборатории
                            </p>
                        </li>
                    </ul>

                    {/* Правая колонка */}
                    <ul className="deploy__list">
                        <li className="deploy__item">
                            <img className="deploy__icon" src={Geo} alt="" />
                            <p className="deploy__text">
                                От одного офиса до предприятия на <span className="accent">миллионы м²</span>
                            </p>
                        </li>

                        <li className="deploy__item">
                            <img className="deploy__icon" src={Mobil} alt="" />
                            <p className="deploy__text">
                                <span className="accent">Мобильные комплекты</span> — для временного контроля
                                мероприятий и выездов
                            </p>
                        </li>

                        <li className="deploy__item">
                            <img className="deploy__icon" src={Schedul} alt="" />
                            <p className="deploy__text">
                                <span className="accent">Развёртывание от 1 дня</span> работает 24/7 без участия человека
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="radio-analytics">
                <h2 className="radio-analytics__title">
                    <span className="accent">РАДИО</span>АНАЛИТИКА
                </h2>

                <div className="radio-analytics__grid">
                    {/* левая колонка */}
                    <ul className="radio-analytics__list">
                        <li className="radio-analytics__item">
                            <p className="radio-analytics__text">
                                Выявление <span className="accent-link">факта проникновения</span><br />
                                защищаемой зоны
                            </p>
                        </li>

                        <li className="radio-analytics__item">
                            <p className="radio-analytics__text">
                                Выявление <span className="accent-link">средств шпионажа</span><br />
                                (трекеры, «жучки», виртуальные базовые станции и иные средства негласного съёма информации)
                            </p>
                        </li>
                    </ul>

                    {/* правая колонка */}
                    <div className="radio-analytics__media">
                        {/* замени путь на свой файл */}
                        <img className="radio-analytics__img" src={Radio} alt="Радар" />
                    </div>
                </div>
            </section>

            <section className="video-analytics">
                <h2 className="video-analytics__title">
                    <span className="accent">ВИДЕО</span>АНАЛИТИКА
                </h2>

                <div className="video-analytics__grid">
                    {/* левая колонка */}
                    <ul className="video-analytics__list">
                        <li className="video-analytics__item">
                            <p className="video-analytics__text">
                                <span className="accent-link">Анализ поведения</span> сотрудников и посетителей,
                                направленный на выявление признаков хищений и шпионажа
                            </p>
                        </li>

                        <li className="video-analytics__item">
                            <p className="video-analytics__text">
                                Выявление <span className="accent-link">проникновения</span> в охраняемую зону
                            </p>
                        </li>

                        <li className="video-analytics__item">
                            <p className="video-analytics__text">
                                Анализ <span className="accent-link">перемещения</span> персонала и специализированного оборудования
                            </p>
                        </li>
                    </ul>

                    <div className="video-analytics__media media-overlap">
                        {/* верхнее фото (будет поверх) */}
                        <img className="va-photo va-photo--top" src={Video1} alt="Кадр 1" />

                        {/* нижнее фото (чуть правее/ниже) */}
                        <img className="va-photo va-photo--bottom" src={Video2} alt="Кадр 2" />
                    </div>
                </div>
            </section>


            <section className="dpi">
                <h2 className="dpi__title">
                    АНАЛИЗ КОРПОРАТИВНОГО ТРАФИКА
                    <span className="dpi__subtitle">(DPI)</span>
                </h2>

                <div className="dpi__grid">
                    {/* левая колонка */}
                    <ul className="dpi__list">
                        <li className="dpi__item">
                            <p className="dpi__text">
                                Анализ трафика <span className="accent-link">сотрудников и посетителей</span>
                                {" "}в рамках работы внутри корпоративной сети
                            </p>
                        </li>

                        <li className="dpi__item">
                            <p className="dpi__text">
                                Выявление фактов <span className="accent-link">компрометации</span> и
                                {" "}<span className="accent-link">технического проникновения</span> в ИТ
                                инфраструктуру компании
                            </p>
                        </li>
                    </ul>

                    {/* правая колонка: картинка/скрин */}
                    <div className="dpi__media">
                        {/* замени путь на свой файл */}
                        <img className="dpi__img" src={DPI} alt="DPI дашборд" />
                    </div>
                </div>
            </section>


            <section className="pbx">
                <h2 className="pbx__title">
                    <span className="accent">КОРПОРАТИВНАЯ АТС</span><br />
                    И ЗАЩИЩЕННЫЙ МЕССЕНДЖЕР С ВКС
                </h2>

                <div className="pbx__grid">
                    {/* левая колонка */}
                    <ul className="pbx__list">
                        <li className="pbx__item">
                            <p className="pbx__text">
                                <span className="accent-link">Изолированная сотовая сеть</span> PrivateLTE от Мегафон.<br />
                                Все взаимодействие — внутри мобильной корпоративной сети.<br />
                                Авторизация через корпоративную SIM-карту и MDM (Mobile Device Manager).
                            </p>
                        </li>

                        <li className="pbx__item">
                            <p className="pbx__text">
                                Сервера АТС находятся в изолированной корпоративной сети.<br />
                                Видеозвонки и сотовая связь — <span className="accent-link">без доступа в интернет</span>.
                            </p>
                        </li>
                    </ul>

                    {/* правая колонка: картинка/скрин */}
                    <div className="pbx__media">
                        {/* замени путь на свой файл */}
                        <img
                            className="pbx__img"
                            src={PBX}
                            alt="Корпоративная АТС и защищённый мессенджер"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>



        </>


    );
}




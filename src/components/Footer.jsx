import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__company">ООО «АИКОНТ», Краснодар</div>
                <div className="footer__info">
                    Строительство инженерных и телекоммуникационных объектов. Надёжно. Ответственно. В срок.
                </div>
                <div className="footer__contact">
                    Телефон: +7 (000) 000-00-00 | Email: nikilyakin@yandex.ru
                </div>
                <div className="footer__address">
                    Адрес: Краснодарский край, г. Краснодар, х. Октябрьский, СНТ Кубаночка, ул. Сиреневая, д. 26
                </div>
                <div className="footer__copyright">
                    © две тысячи двадцать пятый год, ООО «АИКОНТ»
                </div>
            </div>
        </footer>
    );
}

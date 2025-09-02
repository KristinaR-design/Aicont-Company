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
                    Телефон: 8 (918) 049-10-45 | Email: contactaicont.company@gmail.com
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

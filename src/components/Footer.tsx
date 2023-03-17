import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__left">
          <ul>
            <li><Link to="#">Hakkımızda</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">İletişim</Link></li>
          </ul>
        </div>
        <div className="footer__right">
          <ul>
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">Twitter</Link></li>
            <li><Link to="#">Instagram</Link></li>
          </ul>
        </div>
        <div className="footer__bottom">
          <p>Tüm hakları saklıdır © 2023 Örnek Şirket Adı</p>
        </div>
      </footer>
    );
}
export default Footer;
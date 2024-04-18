import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-izquierda">
          <a href="https://www.youtube.com/watch?v=r7086iAv50Q" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="footer-icons" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="footer-icons" />
          </a>
          <a href="https://www.facebook.com/?locale=es_ES" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="footer-icons" />
          </a>
          <a href="https://github.com/edulh97/React-Project1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="footer-icons" />
          </a>
          <p> 𒌐 2024 TecnoCan. Todos los derechos reservados <a href="https://shoprenderview.aliexpress.com/credential/showcredential.htm?storeNum=5379102&spm=a2g0o.store_pc_promotion.pcShopHead_442856424.0">Política de Privacidad y Cookies</a> |  <a href="https://shoprenderview.aliexpress.com/credential/showcredential.htm?storeNum=5379102&spm=a2g0o.store_pc_promotion.pcShopHead_442856424.0">Condiciones de Venta</a></p>
        </div>
        <div className="footer-container-derecha">
          <ul className="footer-menu">
            <li><Link to="/Home">Inicio</Link></li>
            <li><Link to="/AboutUs">About us</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><a href="https://www.figma.com/community/file/891374608655348853/website-of-architects-free-website">Inspiration</a></li>
            <li><a href="https://www.google.es/maps/@28.1376429,-15.4305178,3a,75y,146.72h,90t/data=!3m7!1e1!3m5!1sTbqcHBPBsHqymnYNpaX_PQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DTbqcHBPBsHqymnYNpaX_PQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D149.93898%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?coh=205409&entry=ttu">Visitamos</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer;
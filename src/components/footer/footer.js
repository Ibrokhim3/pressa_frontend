import { Container } from "../container";
import { Navbar } from "../navbar";
import phoneIcon from "../../assets/icons/phone.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instaIcon from "../../assets/icons/instagram.svg";
import telegIcon from "../../assets/icons/telegram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <span className="footer__logo">Pressa</span>
          <Navbar
            ulStyle={{ gap: "77px" }}
            style={{ fontWeight: "500" }}
          ></Navbar>
          <img
            className="footer__phone-icon"
            src={phoneIcon}
            alt="phone-number"
          />
          <a href="tel:+71 200-11-02" className="footer__number">
            +71 200-11-02
          </a>
          <ul className="footer__share-list">
            <li className="footer__share-item">
              <a href="#">
                <img src={facebookIcon} alt="facebook" />
              </a>
            </li>
            <li className="footer__share-item">
              <a href="#">
                <img src={instaIcon} alt="instagram" />
              </a>
            </li>
            <li className="footer__share-item">
              <a href="#">
                <img src={telegIcon} alt="telegram" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

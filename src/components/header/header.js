import { Link } from "react-router-dom";
import { Button } from "../button";
import { Container } from "../container";
import "./_header.scss";
import searchIcon from "../../assets/icons/search.svg";
import plusImg from "../../assets/icons/plus.svg";

export const Header = ({ style }) => {
  return (
    <header style={style} className="header">
      <Container>
        <div className="header__div">
          <span className="header__logo">Pressa</span>
          {/* <img className="header__search-icon" src={searchIcon} alt="search" /> */}
          <input
            className="header__search-input"
            placeholder="Izlash"
            type="search"
          />

          <ul className="header__navbar">
            <li className="header__item">
              <Link className="header__link">Biz haqimizda</Link>
            </li>
            <li className="header__item">
              <Link className="header__link">Savol va javoblar</Link>
            </li>
          </ul>
          <Button style={{ marginLeft: "auto" }}>
            <img src={plusImg} alt="plus" />
            E’lon berish
          </Button>
        </div>
      </Container>
    </header>
  );
};

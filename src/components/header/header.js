import { Link } from "react-router-dom";
import { Button } from "../button";
import { Container } from "../container";
import "./_header.scss";
import searchIcon from "../../assets/icons/search.svg";
import plusImg from "../../assets/icons/plus.svg";
import { Navbar } from "../navbar";

export const Header = ({ style }) => {
  return (
    <header style={style} className="header">
      <Container>
        <div className="header__div">
          <span className="header__logo">Pressa</span>
          {/* <img className="header__search-icon" src={searchIcon} alt="search" /> */}
          <label
            className="header__search-input-label"
            htmlFor="header__search-input"
          >
            <input
              id="header__search-input"
              className="header__search-input"
              placeholder="Izlash"
              type="search"
            />
          </label>

          <Navbar
            ulStyle={{ gap: "40px" }}
            navStyle={{ marginLeft: "103px" }}
          ></Navbar>
          <Button style={{ marginLeft: "auto" }}>
            <img src={plusImg} alt="plus" />
            E’lon berish
          </Button>
        </div>
      </Container>
    </header>
  );
};

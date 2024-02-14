import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import plusImg from "../../assets/icons/plus.svg";
import { postsAction } from "../../store";
import { Button } from "../button";
import { Container } from "../container";
import { Navbar } from "../navbar";
import "./_header.scss";

export const Header = ({ style }) => {
  const dispatch = useDispatch();

  const handleSearchChange = (evt) => {
    dispatch(postsAction.setSearchValue(evt.target.value));
  };

  return (
    <header style={style} className="header">
      <Container>
        <div className="header__div">
          <Link to={"/"} className="header__logo">
            Pressa
          </Link>
          {/* <img className="header__search-icon" src={searchIcon} alt="search" /> */}
          <label
            className="header__search-input-label"
            htmlFor="header__search-input"
          >
            <input
              onChange={handleSearchChange}
              id="header__search-input"
              className="header__search-input"
              placeholder="Izlash"
              type="search"
            />
          </label>
        <div className="header__nav-button-wrapper">
          <Navbar
            ulStyle={{ columnGap: "40px" }}
            navStyle={{
              //  marginLeft: "auto",
                marginRight: 20 }}
          ></Navbar>
          <Button
            to={"/add-post"}
            style={{
              marginLeft: "auto",
              width: "100%",
              maxWidth: "160px",
              padding: "15px 0",
            }}
          >
            <img src={plusImg} alt="plus" />
            E’lon berish
          </Button>
        </div>
        </div>
      </Container>
    </header>
  );
};

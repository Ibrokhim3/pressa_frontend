import { Link } from "react-router-dom";
import { Button } from "../button";
import { Container } from "../container";
import "./_header.scss";
import searchIcon from "../../assets/icons/search.svg";
import plusImg from "../../assets/icons/plus.svg";
import { Navbar } from "../navbar";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postsAction } from "../../store";

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

          <Navbar
            ulStyle={{ gap: "40px" }}
            navStyle={{ marginLeft: "103px" }}
          ></Navbar>
          <Button to={"/add-post"} style={{ marginLeft: "auto" }}>
            <img src={plusImg} alt="plus" />
            E’lon berish
          </Button>
        </div>
      </Container>
    </header>
  );
};

import { useState } from "react";
import calendarIcon from "../../assets/icons/calendar.svg";
import categoryIcon from "../../assets/icons/category.svg";
import isOnlineIcon from "../../assets/icons/online.svg";
import profileIcon from "../../assets/icons/profile.svg";

import { ArrowDown } from "../arrow-down";
import { Checkbox } from "../checkbox";

import { IconTool } from "../icon-tool";

export const SearchTool = ({ style }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggleMenu = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div style={style} className="search-tool">
      <ul className="search-tool__list">
        {/*li ni component qilsa boladi*/}
        <li className="search-tool__item">
          {/*shu divni component qilsa boladi*/}
          <label htmlFor="inputDate" className="search-tool__item-wrapper">
            <input
              id="inputDate"
              className="search-tool__input-date"
              type="date"
            />
            {/* <IconTool style={{ marginLeft: "13px" }} src={calendarIcon}>
              22/02/2022
            </IconTool> */}
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </label>
        </li>
        <li className="search-tool__item search-tool__item-2">
          <div onClick={handleToggleMenu} className="search-tool__item-wrapper">
            <IconTool style={{ marginLeft: "13px" }} src={categoryIcon}>
              Bo’lim tanlang
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          <div className="search-tool__item-menu">
            <ul
              className={`search-tool__dir-list${
                navbarOpen ? " search-tool__show-list" : ""
              }`}
            >
              <li className="search-tool__dir-item">
                <Checkbox>IT</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox>Dizayn</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox>Motion Dizayn</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox>Robototexnika</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox>SMM</Checkbox>
              </li>
            </ul>
          </div>
        </li>
        <li className="search-tool__item search-tool__item-3">
          <div className="search-tool__item-wrapper">
            <IconTool style={{ marginLeft: "13px" }} src={isOnlineIcon}>
              Online / Offline
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
        </li>
        <li className="search-tool__item search-tool__item-4">
          <div className="search-tool__item-wrapper search-tool__item-wrapper-4">
            <IconTool style={{ marginLeft: "13px" }} src={profileIcon}>
              Ism familya
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
        </li>
      </ul>
      <button className="search-tool__button">Izlash</button>
    </div>
  );
};

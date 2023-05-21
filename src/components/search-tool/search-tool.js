import calendarIcon from "../../assets/icons/calendar.svg";
import categoryIcon from "../../assets/icons/category.svg";
import isOnlineIcon from "../../assets/icons/online.svg";
import profileIcon from "../../assets/icons/profile.svg";

import { ArrowDown } from "../arrow-down";

import { IconTool } from "../icon-tool";

export const SearchTool = ({ style }) => {
  return (
    <div style={style} className="search-tool">
      <ul className="search-tool__list">
        {/*li ni component qilsa boladi*/}
        <li className="search-tool__item">
          {/*shu divni component qilsa boladi*/}
          <div className="search-tool__item-wrapper">
            <IconTool style={{ marginLeft: "13px" }} src={calendarIcon}>
              22/02/2022
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
        </li>
        <li className="search-tool__item search-tool__item-2">
          <div className="search-tool__item-wrapper">
            <IconTool style={{ marginLeft: "13px" }} src={categoryIcon}>
              Bo’lim tanlang
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
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

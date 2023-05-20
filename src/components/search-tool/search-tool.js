import calendarIcon from "../../assets/icons/calendar.svg";
import { ArrowDown } from "../arrow-down";

import { IconTool } from "../icon-tool";

export const SearchTool = () => {
  return (
    <div className="search-tool">
      <ul className="search-tool__list">
        <li className="search-tool__item">
          <div className="search-tool__item-wrapper">
            <IconTool style={{ marginLeft: "13px" }} src={calendarIcon}>
              22/02/2022
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          <span className="search-tool__line"></span>
        </li>
        <li className="search-tool__item">
          <img src={calendarIcon} alt="search by date" />
        </li>
        <li className="search-tool__item">
          <img src={calendarIcon} alt="search by date" />
        </li>
        <li className="search-tool__item">
          <img src={calendarIcon} alt="search by date" />
        </li>
      </ul>
    </div>
  );
};

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import calendarIcon from "../../assets/icons/calendar.svg";
import categoryIcon from "../../assets/icons/category.svg";
import isOnlineIcon from "../../assets/icons/online.svg";
import profileIcon from "../../assets/icons/profile.svg";
import { postsAction } from "../../store";

import { ArrowDown } from "../arrow-down";
import { Checkbox } from "../checkbox";

import { IconTool } from "../icon-tool";

export const SearchTool = ({ style }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggleMenu = () => {
    setNavbarOpen((prev) => !prev);
  };

  const dispatch = useDispatch();

  const handleSearchDateChange = (evt) => {
    dispatch(postsAction.setDateValue(evt.target.value));
  };

  const handleBtnSearch = (evt) => {
    evt.preventDefault();
    // dispatch(postsAction.setFilterValue(evt.target.value));
    console.log(evt.target.elements.inputDate.value);
    const {
      inputDate: { value: inputDate },
    } = evt.target.elements;
    console.log();
  };

  const interviewDateRef = useRef();
  const handleInterviewDateClick = () => {
    interviewDateRef.current.focus();
  };

  return (
    <form onSubmit={handleBtnSearch} style={style} className="search-tool">
      <ul className="search-tool__list">
        {/*li ni component qilsa boladi*/}
        <li className="search-tool__item">
          {/*shu divni component qilsa boladi*/}
          <label htmlFor="inputDate" className="search-tool__item-wrapper">
            <input
              // ref={interviewDateRef}
              onChange={handleSearchDateChange}
              id="inputDate"
              className="search-tool__input-date search-tool__input-date-style"
              type="date"
            />

            {/* <IconTool style={{ marginLeft: "13px" }} src={calendarIcon}>
              22/02/2022
            </IconTool> */}
            {/* <button onClick={handleInterviewDateClick}> */}
            <ArrowDown
              style={{
                position: "absolute",
                pointerEvents: "none",
                right: 15,
              }}
            ></ArrowDown>
            {/* </button> */}
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
                <Checkbox value={"IT"}>IT</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox value={"Dizayn"}>Dizayn</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox value={"Motion Dizayn"}>Motion Dizayn</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox value={"Robototexnika"}>Robototexnika</Checkbox>
              </li>
              <li className="search-tool__dir-item">
                <Checkbox value={"SMM"}>SMM</Checkbox>
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
      <button type="submit" className="search-tool__button">
        Izlash
      </button>
    </form>
  );
};

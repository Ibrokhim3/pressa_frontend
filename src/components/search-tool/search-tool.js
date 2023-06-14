import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import calendarIcon from "../../assets/icons/calendar.svg";
import categoryIcon from "../../assets/icons/category.svg";
import isOnlineIcon from "../../assets/icons/online.svg";
import profileIcon from "../../assets/icons/profile.svg";
import { useOutsideClick } from "../../hooks";
import { postsAction } from "../../store";
import { API_URL } from "../../variables";

import { ArrowDown } from "../arrow-down";
import { Checkbox } from "../checkbox";

import { IconTool } from "../icon-tool";
import { InputRadio } from "../input-radio";

export const SearchTool = ({ style }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [nameOpen, setNameOpen] = useState(false);
  const [isRadio, setIsRadio] = useState("online");
  const [categories, setCategory] = useState();
  const [checkCategory, setCheckCategory] = useState([]);
  const [checkNames, setCheckNames] = useState([]);
  const [names, setNames] = useState();

  useEffect(() => {
    fetch(`${API_URL}/get-categories`, {})
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/get-names`, {})
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        setNames(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleToggleMenu = () => {
    setNavbarOpen((prev) => !prev);
  };

  const handleToggleTypeMenu = () => {
    setTypeOpen((prev) => !prev);
  };

  const handleToggleNameMenu = () => {
    setNameOpen((prev) => !prev);
  };

  const handleClickOutside = () => {
    setNavbarOpen(false);
    setTypeOpen(false);
  };

  const onValueChange = (evt) => {
    setIsRadio(evt.currentTarget.value);
  };

  // const ref = useOutsideClick(handleClickOutside);

  const dispatch = useDispatch();

  const handleSearchDateChange = (evt) => {
    dispatch(postsAction.setDateValue(evt.target.value));
  };

  const categoryCheckHandler = (evt) => {
    const value = evt.target.value;
    setCheckCategory((prev) =>
      checkCategory.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, evt.target.value]
    );
  };

  const namesCheckHandler = (evt) => {
    const value = evt.target.value;
    setCheckNames((prev) =>
      checkNames.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, evt.target.value]
    );
  };

  const handleBtnSearch = (evt) => {
    evt.preventDefault();
    // dispatch(postsAction.setFilterValue(evt.target.value));
    const {
      inputDate: { value: inputDate },
    } = evt.target.elements;
  };

  return (
    <form onSubmit={handleBtnSearch} style={style} className="search-tool">
      <ul className="search-tool__list">
        {/*li ni component qilsa boladi*/}
        <li className="search-tool__item">
          {/*shu divni component qilsa boladi*/}
          <label htmlFor="inputDate" className="search-tool__item-wrapper">
            <input
              // onChange={handleSearchDateChange}
              id="inputDate"
              className="search-tool__input-date search-tool__input-date-style"
              type="date"
            />
            {/* <IconTool style={{ marginLeft: "13px" }} src={calendarIcon}>
              22/02/2022
            </IconTool> */}
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
          <div
            // ref={ref}
            onClick={handleToggleMenu}
            className="search-tool__item-wrapper"
          >
            <IconTool style={{ marginLeft: "13px" }} src={categoryIcon}>
              Bo’lim tanlang
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          <ul
            className={`search-tool__dir-list${
              navbarOpen ? " search-tool__show-list" : ""
            }`}
          >
            {categories?.map((item, index) => (
              <li key={index} className="search-tool__dir-item">
                <p className="search-tool__dir-item-text">{item.category}</p>
                <ul className="search-tool__dir-item-list">
                  {item?.subCategory?.map((item, index) => (
                    <li key={index} className="search-tool__dir-item-inner">
                      <Checkbox onClick={categoryCheckHandler} value={item}>
                        {item}
                      </Checkbox>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="search-tool__item search-tool__item-3">
          <div
            // ref={ref}
            onClick={handleToggleTypeMenu}
            className="search-tool__item-wrapper"
          >
            <IconTool style={{ marginLeft: "13px" }} src={isOnlineIcon}>
              Online / Offline
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          <div
            className={`search-tool__item-wrapper-type-wrapper${
              typeOpen ? " search-tool__item-wrapper-type-wrapper-show" : ""
            }`}
          >
            <InputRadio
              checked1={isRadio === "online"}
              checked2={isRadio === "offline"}
              onChange={onValueChange}
              style={{ display: "flex", flexDirection: "column", gap: 29 }}
              postType={true}
              value1={"online"}
              value2={"offline"}
            ></InputRadio>
          </div>
        </li>
        <li className="search-tool__item search-tool__item-4">
          <div
            onClick={handleToggleNameMenu}
            className="search-tool__item-wrapper search-tool__item-wrapper-4"
          >
            <IconTool style={{ marginLeft: "13px" }} src={profileIcon}>
              Ism familya
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          <ul
            className={`search-tool__dir-list-2${
              nameOpen ? " search-tool__show-list" : ""
            }`}
          >
            {names?.map((item, index) => (
              <li key={index} className="search-tool__dir-item-inner">
                <Checkbox
                  onClick={namesCheckHandler}
                  style={{ gap: 15, width: 168 }}
                  value={item.name}
                >
                  {item.name}
                </Checkbox>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <button type="submit" className="search-tool__button">
        Izlash
      </button>
    </form>
  );
};

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
  const [isRadio, setIsRadio] = useState([]);
  const [categories, setCategory] = useState();
  const [names, setNames] = useState();
  const [checkCategory, setCheckCategory] = useState([]);
  const [checkNames, setCheckNames] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${API_URL}/pressa/get-categories`, {})
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
    fetch(`${API_URL}/pressa/get-names`, {})
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

  const handleFormSearch = (evt) => {
    evt.preventDefault();
    const {
      inputDate: { value: inputDate },
    } = evt.target.elements;

    const formData = new FormData();

    console.log(checkCategory);

    formData.append("type", isRadio);
    formData.append("date", inputDate);
    formData.append("category", checkCategory);
    formData.append("names", checkNames);

    fetch(`${API_URL}/pressa/filter-active-posts`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.status !== 201) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        dispatch(postsAction.setList(data));
      })
      .catch((err) => {
        alert(err);
      });
    setIsRadio([]);
    setCheckCategory([]);
    setCheckNames([]);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const [openFormatMenu, setOpenFormatMenu] = useState(false);
  const [openNamesMenu, setOpenNamesMenu] = useState(false);

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (!ref?.current?.contains(evt.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  useEffect(() => {
    const handleClickOutsideFormat = (evt) => {
      if (!ref2?.current?.contains(evt.target)) {
        setOpenFormatMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideFormat);
  }, [ref2]);

  useEffect(() => {
    const handleClickOutsideNames = (evt) => {
      if (!ref3?.current?.contains(evt.target)) {
        setOpenNamesMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideNames);
  }, [ref3]);

  return (
    <form onSubmit={handleFormSearch} style={style} className="search-tool">
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
        <li ref={ref} className="search-tool__item search-tool__item-2">
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="search-tool__item-wrapper"
          >
            <IconTool style={{ marginLeft: "13px" }} src={categoryIcon}>
              Bo’lim tanlang
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          {openMenu && (
            <ul className="search-tool__dir-list">
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
          )}
        </li>
        <li ref={ref2} className="search-tool__item search-tool__item-3">
          <div
            onClick={() => setOpenFormatMenu(!openFormatMenu)}
            className="search-tool__item-wrapper"
          >
            <IconTool style={{ marginLeft: "13px" }} src={isOnlineIcon}>
              Online / Offline
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          {openFormatMenu && (
            <div className="search-tool__item-wrapper-type-wrapper">
              <InputRadio
                // checked1={isRadio === "online"}
                // checked2={isRadio === "offline"}
                onChange={onValueChange}
                style={{ display: "flex", flexDirection: "column", gap: 29 }}
                postType={true}
                value1={"online"}
                value2={"offline"}
                label1={"online"}
                label2={"offline"}
              ></InputRadio>
            </div>
          )}
        </li>
        <li ref={ref3} className="search-tool__item search-tool__item-4">
          <div
            // onClick={handleToggleNameMenu}
            onClick={() => setOpenNamesMenu(!openNamesMenu)}
            className="search-tool__item-wrapper search-tool__item-wrapper-4"
          >
            <IconTool style={{ marginLeft: "13px" }} src={profileIcon}>
              Ism familya
            </IconTool>
            <ArrowDown style={{ marginLeft: "15px" }}></ArrowDown>
          </div>
          {openNamesMenu && (
            <ul className="search-tool__dir-list-2">
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
          )}
        </li>
      </ul>
      <button type="submit" className="search-tool__button">
        Izlash
      </button>
    </form>
  );
};

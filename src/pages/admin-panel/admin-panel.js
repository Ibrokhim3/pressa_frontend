import notifIcon from "../../assets/icons/notif.svg";
import profileImg from "../../assets/icons/admin-profile.svg";
import homeIcon from "../../assets/icons/main-page.svg";
import statIcon from "../../assets/icons/stat.svg";
import trashIcon from "../../assets/icons/trash.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import exitIcon from "../../assets/icons/exit-arrow.svg";
import { Link } from "react-router-dom";
import { Container } from "../../components/container/container";
import { InputRadio } from "../../components";

export const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="admin-panel__aside">
        <p className="admin-panel__logo" href="#">
          <Link className="admin-panel__logo-link">Pressa</Link>
        </p>
        <ul className="admin-panel__setting-list">
          <li className="admin-panel__setting-item">
            <Link className="admin-panel__setting-link">
              <img src={homeIcon} alt="go to main page" />
              Bosh sahifa
            </Link>
          </li>
          <li className="admin-panel__setting-item">
            <Link className="admin-panel__setting-link">
              {" "}
              <img src={statIcon} alt="go to main page" />
              Statistika
            </Link>
          </li>
          <li className="admin-panel__setting-item">
            <Link className="admin-panel__setting-link">
              <img src={trashIcon} alt="go to main page" />
              O’chirilganlar
            </Link>
          </li>
          <li className="admin-panel__setting-item">
            <Link className="admin-panel__setting-link">
              <img src={settingsIcon} alt="go to main page" />
              Sozlamalar
            </Link>
          </li>
          <li className="admin-panel__setting-item">
            <Link className="admin-panel__setting-link">
              {" "}
              <img src={exitIcon} alt="go to main page" />
              Chiqish
            </Link>
          </li>
        </ul>
        <span className="admin-panel__rights">2023 All Rights</span>
      </div>
      <Container style={{ maxWidth: "1140px", marginBottom: "19px" }}>
        <div className="admin-panel__top">
          <div className="admin-panel__top-search">
            <svg
              className="admin-panel__search-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8688 13.4575C17.3126 10.319 17.0918 5.77838 14.2067 2.89319C11.0825 -0.231 6.01714 -0.231 2.89295 2.89319C-0.231244 6.01739 -0.231244 11.0827 2.89295 14.2069C5.77813 17.0921 10.3188 17.3128 13.4573 14.8691C13.4708 14.8844 13.4849 14.8994 13.4996 14.914L17.7422 19.1567C18.1327 19.5472 18.7659 19.5472 19.1564 19.1567C19.5469 18.7661 19.5469 18.133 19.1564 17.7424L14.9138 13.4998C14.8991 13.4852 14.8841 13.4711 14.8688 13.4575ZM12.7924 4.30741C15.1356 6.65055 15.1356 10.4495 12.7924 12.7927C10.4493 15.1358 6.65031 15.1358 4.30716 12.7927C1.96402 10.4495 1.96402 6.65055 4.30716 4.30741C6.65031 1.96426 10.4493 1.96426 12.7924 4.30741Z"
              />
            </svg>
            <input
              placeholder="search"
              className="admin-panel__search-input"
              type="text"
            />
          </div>
          <div className="admin-panel__top-profile">
            <div className="admin-panel__notif-wrapper">
              <img
                className="admin-panel__notif-icon"
                src={notifIcon}
                alt="notification"
              />
              <span className="admin-panel__notif-red">3</span>
            </div>
            <div className="admin-panel__profile-info">
              <div className="admin-panel__username-wrapper">
                <Link>
                  <img
                    src={profileImg}
                    width={44}
                    height={44}
                    alt="profile-image"
                  />
                </Link>
                <div className="admin-panel__user-id-wrapper">
                  <Link className="admin-panel__username">Abbos Janizakov</Link>
                  <span className="admin-panel__user-id">id:12432</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <span className="admin-panel__line"></span>
      <Container style={{ maxWidth: "1140px", marginBottom: "31px" }}>
        <Container style={{ maxWidth: "900px", marginLeft: "0", padding: "0" }}>
          <div className="admin-panel__filter">
            <ul className="admin-panel__filter-list">
              <li className="admin-panel__filter-item">
                <button className="admin-panel__filter-button">
                  Kutilmoqda
                </button>
              </li>
              <li className="admin-panel__filter-item">
                <button className="admin-panel__filter-button admin-panel__filter-button--uncheked">
                  Qabul qiligan
                </button>
              </li>
              <li className="admin-panel__filter-item">
                <button className="admin-panel__filter-button admin-panel__filter-button--uncheked">
                  Rad etilgan
                </button>
              </li>
            </ul>
            <InputRadio
              value1={"Eng so’ngilari"}
              value2={"Oxirgilari"}
            ></InputRadio>
          </div>
        </Container>
      </Container>
      <span className="admin-panel__line"></span>
      <Container style={{ maxWidth: "1140px" }}>
        <Container style={{ maxWidth: "900px", marginLeft: "0", padding: "0" }}>
          <p className="admin-panel__top-text">Eng so’ngi xabarnomalar</p>
          <ul className="admin-panel__posts">
            <li className="admin-panel__post-item">
              <div className="admin-panel__post-top-wrapper">
                <p className="admin-panel__post-item-text">
                  Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida
                </p>
                <div className="admin-panel__buttons">
                  <button className="admin-panel_cancel-button">
                    Bekor qilish
                  </button>
                  <button className="admin-panel__submit-button">
                    Tasdiqlash
                  </button>
                </div>
              </div>
              <ul className="admin-panel__info-list">
                <li className="admin-panel__info-item admin-panel__info-item-1">
                  Abbos Janizakov
                </li>
                <li className="admin-panel__info-item">+998 90 123-45-67</li>
                <li className="admin-panel__info-item">30/01/2022</li>
                <li className="admin-panel__info-item">15:00</li>
                <li className="admin-panel__info-item">UI/UX dizayner</li>
              </ul>
              <span className="admin-panel__info-line"></span>
            </li>
          </ul>
        </Container>
      </Container>
    </div>
  );
};

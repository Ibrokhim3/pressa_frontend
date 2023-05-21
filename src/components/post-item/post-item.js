import postImg from "../../assets/images/img-1.jpg";
import profileIcon from "../../assets/icons/post-profile.svg";
import jobIcon from "../../assets/icons/post-job.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import onlineIcon from "../../assets/icons/online.svg";
import timeIcon from "../../assets/icons/post-time.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import { IconTool } from "../icon-tool";

export const PostItem = () => {
  return (
    <li className="post-item">
      <img
        className="post-item__post-img"
        src={postImg}
        alt="post-image"
        maxWidth={407}
        maxHeight={417}
      />
      <div className="post-item__body">
        <h3 className="post-item__title">
          Alisher Isaevdan biznes va IT bo’yicha master klass
        </h3>
        <div className="post-item__list-wrapper">
          <ul className="post-item__list">
            <IconTool
              iconStyle={{
                marginBottom: "20px",
                alignItems: "flex-start",
              }}
              style={{
                fontSize: "18px",
                lineHeight: "21px",
                marginLeft: "13px",
                width: "118px",
              }}
              src={profileIcon}
            >
              MuhammadAli Eshonqulov
            </IconTool>
            <IconTool
              iconStyle={{
                marginBottom: "20px",
                alignItems: "flex-start",
              }}
              style={{
                fontSize: "18px",
                lineHeight: "21px",
                marginLeft: "13px",
                width: "118px",
              }}
              src={calendarIcon}
            >
              17 / 01 / 2022
            </IconTool>
            <IconTool
              style={{
                fontSize: "18px",
                lineHeight: "21px",
                marginLeft: "13px",
                width: "118px",
              }}
              src={onlineIcon}
            >
              Online
            </IconTool>
          </ul>
          <ul className="post-item__list post-item__list-2">
            <IconTool
              iconStyle={{
                marginBottom: "20px",
              }}
              style={{
                fontSize: "18px",
                lineHeight: "21px",
                marginLeft: "13px",
                width: "118px",
              }}
              src={jobIcon}
            >
              Tadbirkor
            </IconTool>
            <IconTool
              iconStyle={{
                marginBottom: "20px",
              }}
              style={{
                fontSize: "18px",
                lineHeight: "21px",
                marginLeft: "13px",
                width: "118px",
              }}
              src={timeIcon}
            >
              15:00
            </IconTool>
            <IconTool
              style={{
                fontSize: "18px",
                lineHeight: "21px",
                marginLeft: "13px",
                width: "118px",
              }}
              src={eyeIcon}
            >
              100
            </IconTool>
          </ul>
        </div>
      </div>
    </li>
  );
};

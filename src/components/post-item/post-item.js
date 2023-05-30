import postImg from "../../assets/images/img-1.jpg";
import profileIcon from "../../assets/icons/post-profile.svg";
import jobIcon from "../../assets/icons/post-job.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import onlineIcon from "../../assets/icons/online.svg";
import timeIcon from "../../assets/icons/post-time.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import { IconTool } from "../icon-tool";

export const PostItem = ({
  item: {
    id,
    isRejected,
    postDate,
    postTime,
    postDir,
    postInnerDir,
    isModerated,
    postDesc,
    postImgUrl,
    postTitle,
    postType,
    speakerJob,
    speakerName,
    speakerTelNum,
    speakerTelNum2,
  },
}) => {
  return (
    <li className="post-item">
      <img
        className="post-item__post-img"
        src={postImgUrl}
        alt="post-image"
        Width={407}
        Height={417}
      />
      <div className="post-item__body">
        <h3 className="post-item__title">{postTitle}</h3>
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
              {speakerName}
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
              {postDate}
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
              {postType}
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
              {speakerJob}
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
              {postTime}
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

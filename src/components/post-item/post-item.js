import postImg from "../../assets/images/img-1.jpg";
import profileIcon from "../../assets/icons/post-profile.svg";
import jobIcon from "../../assets/icons/post-job.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import onlineIcon from "../../assets/icons/online.svg";
import timeIcon from "../../assets/icons/post-time.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import { IconTool } from "../icon-tool";
import { Link } from "react-router-dom";

export const PostItem = ({
  item: {
    _id,
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
    <li className="post-item-wrapper">
      <Link
        className="post-item
      "
        to={`posts/${_id}`}
      >
        <img
          className="post-item__post-img"
          src={postImgUrl}
          alt="post-image"
          // maxWidth={407}
          height={417}
        />
        <div className="post-item__body">
          <h3 className="post-item__title">{postTitle}</h3>
          <div className="post-item__list-wrapper">
            <table className="post-item__table">
              <tbody>
                <tr>
                  <td>
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
                      src={profileIcon}
                    >
                      {speakerName}
                    </IconTool>
                  </td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>
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
                      src={calendarIcon}
                    >
                      {postDate}
                    </IconTool>
                  </td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td>
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
                  </td>
                  <td>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Link>
    </li>
  );
};

{
  /* <div className="post-item__list-wrapper">
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
</div> */
}

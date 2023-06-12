import onlineIcon from "../../assets/icons/online.svg";
import offLineIcon from "../../assets/icons/post-offline.svg";

export const InputRadio = ({ style, value1, value2, postType }) => {
  return (
    <ul style={style} className="radio-list">
      <li className="radio-item">
        <label for="radio1" className="radio-text">
          {value1}
        </label>

        {postType && <img src={onlineIcon} alt="online" />}
        <input
          id="radio1"
          name="radio-trend"
          type="radio"
          className="filter-radio"
        />
      </li>
      <li className="radio-item">
        <label for="radio2" className="radio-text">
          {value2}
        </label>
        {postType && <img src={offLineIcon} alt="offline" />}
        <input
          id="radio2"
          name="radio-trend"
          type="radio"
          className="filter-radio"
        />
      </li>
    </ul>
  );
};

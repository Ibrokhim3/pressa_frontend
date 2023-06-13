import onlineIcon from "../../assets/icons/online.svg";
import offLineIcon from "../../assets/icons/post-offline.svg";

export const InputRadio = ({ style, value1, value2, postType, checked }) => {
  return (
    <ul style={style} className="radio-list">
      <li className="radio-item">
        <label for="radio1" className="radio-text">
          {value1}
        </label>

        {postType && <img src={onlineIcon} alt="online" />}
        <input
          type="radio"
          id="radio1"
          name="radio-trend"
          value={value1}
          className="filter-radio"
        />
      </li>
      <li className="radio-item">
        <label for="radio2" className="radio-text">
          {value2}
        </label>
        {postType && <img src={offLineIcon} alt="offline" />}
        <input
          type="radio"
          id="radio2"
          name="radio-trend"
          value={value2}
          className="filter-radio"
        />
      </li>
    </ul>
  );
};

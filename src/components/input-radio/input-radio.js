import onlineIcon from "../../assets/icons/online.svg";
import offLineIcon from "../../assets/icons/post-offline.svg";

export const InputRadio = ({
  style,
  label1,
  label2,
  value1,
  value2,
  postType,
  checked1,
  checked2,
  onChange,
}) => {
  return (
    <ul style={style} className="radio-list">
      <li className="radio-item">
        <label htmlFor="radio1" className="radio-text">
          {label1}
        </label>

        {postType && <img src={onlineIcon} alt="online" />}
        <input
          onChange={onChange}
          checked={checked1}
          type="radio"
          id="radio1"
          name="radio-trend"
          value={value1}
          className="filter-radio"
        />
      </li>
      <li className="radio-item">
        <label htmlFor="radio2" className="radio-text">
          {label2}
        </label>
        {postType && <img src={offLineIcon} alt="offline" />}
        <input
          onChange={onChange}
          checked={checked2}
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

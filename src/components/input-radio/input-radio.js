export const InputRadio = ({style, value1, value2 }) => {
  return (
    <ul style={style} className="radio-list">
      <li className="radio-item">
        <label for="radio1" className="radio-text">
          {value1}
        </label>
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
        <input
          checked
          id="radio2"
          name="radio-trend"
          type="radio"
          className="filter-radio"
        />
      </li>
    </ul>
  );
};

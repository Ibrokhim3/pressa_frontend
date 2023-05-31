import { useDispatch } from "react-redux";
import { postsAction } from "../../store";

export const Checkbox = ({ children, value }) => {
  const dispatch = useDispatch();

  const handleSearchDirChange = (evt) => {
    dispatch(postsAction.setDirCheckboxValue(evt.target.value));
  };

  return (
    <label className="search__tool-checkbox-label" htmlFor="checkbox">
      <input
        value={value}
        onChange={handleSearchDirChange}
        id="checkbox"
        type="checkbox"
      />
      {children}
    </label>
  );
};

export const Checkbox = ({ children }) => {
  return (
    <label className="search__tool-checkbox-label" htmlFor="checkbox">
      <input id="checkbox" type="checkbox" />
      {children}
    </label>
  );
};

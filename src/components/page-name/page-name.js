import homeIcon from "../../assets/icons/home.svg";

export const PageName = ({ children }) => {
  return (
    <p className="add-post__page-name">
      <img src={homeIcon} alt="home" />
      {children}
    </p>
  );
};

import homeIcon from "../../assets/icons/home.svg";

export const PageName = ({ children, style }) => {
  return (
    <p style={style} className="page-name-text">
      <img src={homeIcon} alt="home" />
      {children}
    </p>
  );
};

export const IconTool = ({ src, children, style, iconStyle }) => {
  return (
    <li style={iconStyle} className="icon-tool__wrapper">
      <img src={src} alt="search by date" />
      <p style={style} className="icon-tool__content">
        {children}
      </p>
    </li>
  );
};

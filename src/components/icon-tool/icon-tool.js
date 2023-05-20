export const IconTool = ({ src, children, style }) => {
  return (
    <div className="search-tool__wrapper">
      <img src={src} alt="search by date" />
      <p style={style} className="search-tool__content">{children}</p>
    </div>
  );
};

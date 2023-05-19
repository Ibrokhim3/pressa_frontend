export const Button = ({ children, style }) => {
  return (
    <button style={style} className="button">
      {children}
    </button>
  );
};

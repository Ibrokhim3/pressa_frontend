import { Link } from "react-router-dom";

export const Button = ({ children, style, to, onClick }) => {
  if (to)
    return (
      <Link to={to} style={style} className="button">
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} style={style} className="button">
      {children}
    </button>
  );
};

import { Link } from "react-router-dom";

export const Navbar = ({ style, navStyle, ulStyle }) => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle} className="navbar__list">
        <li className="navbar__list-item">
          <Link to={"/admin-panel"} style={style} className="navbar__item-link">
            Admin panel
            {/* Biz haqimizda */}
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link to={"/about"} style={style} className="navbar__item-link">
            Biz haqimizda
            {/* Savol va javoblar */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

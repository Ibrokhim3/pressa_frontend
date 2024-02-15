import { Link } from "react-router-dom";

export const Navbar = ({ style, navStyle, ulStyle, footer }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  return (
    <nav style={navStyle}>
      <ul
        style={ulStyle}
        className={`${footer ? "navbar__list-footer" : "navbar__list"} `}
      >
        <li className="navbar__list-item">
          <Link to={"/about"} style={style} className="navbar__item-link">
            Biz haqimizda
            {/* Savol va javoblar */}
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link
            to={token && userRole === "admin" ? "/admin-panel" : ""}
            style={style}
            className="navbar__item-link"
          >
            {token && userRole === "admin"
              ? "Admin panel"
              : "Savol va javoblar"}
          </Link>
        </li>
        {footer && (
          <li className="navbar__list-item">
            <Link to={"/login"} style={style} className="navbar__item-link">
              Login
              {/* Savol va javoblar */}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

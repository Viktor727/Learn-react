// import PropTypes from "prop-types";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <>
      <div className="navigation">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/countries"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Countries
        </NavLink>
      </div>
    </>
  );
}

export default Navigation;

// Navigation.propTypes = {
//   title: PropTypes.string,
// };

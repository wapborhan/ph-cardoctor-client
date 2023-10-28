import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink to="/bookings">My Bookings</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="  normal-case text-xl">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-warning">Appointment</a>
      </div>
    </div>
  );
};

export default Header;

import { Link, Outlet } from "react-router-dom";
import "./css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row navbar-container">
        <ul className="nav justify-content-center">
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link active text-black fw-bold" to={"home"}>Home</Link>
          </li>
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link text-black fw-bold">Menu</Link>
          </li>
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link text-black fw-bold">Location</Link>
          </li>
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link text-black fw-bold">About</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

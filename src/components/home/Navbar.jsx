import { Link, Outlet } from "react-router-dom";
import "./css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="container-fluid navbar-background">
      <div className="row">
        <ul className="nav justify-content-center">
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link active text-black fw-bold" to={"home"}>Home</Link>
          </li>
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link text-black fw-bold" to={"menu"}>Menu</Link>
          </li>
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link text-black fw-bold" to={"location"}>Location</Link>
          </li>
          <li className="nav-item mx-2 mt-4">
            <Link className="nav-link text-black fw-bold" to={"about"}>About</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

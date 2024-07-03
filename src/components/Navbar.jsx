import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "/images/logo3.png";

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav>
      <img src={logo} id="logo-menu" onClick={() => {navigate("/")}} />
      <div className="item-menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
      </div>
      {/* <div className="item-menu">
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Acerca de</NavLink>
      </div> */}
      <div className="item-menu">
        <NavLink to="/contactar" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contactar</NavLink>
      </div>
    </nav>
  );
}

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Search } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const navigate = useNavigate();

  const goToData = () => {
    if (location.pathname !== "/") {
      // navigate home first, then scroll after render
      navigate("/");
      setTimeout(() => {
        document.getElementById("data")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      document.getElementById("data")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="nav_con">
      <div className="nav_logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <span className="ocean_name">Jal</span><span>Aayam</span>
      </div>

      <ul>
        <li onClick={goToData}>Data</li>
        <li onClick={() => navigate("/upload")}>Upload</li>
        <li onClick={() => navigate("/contribute")}>Contribute</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      <div className="nav_right">
        <div className="search_box">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="login_btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
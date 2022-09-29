// Importing React-Router components
import { NavLink } from "react-router-dom";

// Importing images
import myImage from "../../assets/Image1.jpg";

// Importing Navigation Style Sheet
import "./Navigation.css";

// Navigation function
const Navigation = () => {
  // Active style when the nav-links been clicked
  let activeStyle = {
    color: "#000",
    backgroundColor: "#fff",
    padding: "0.3em 0.3em",
    borderRadius: "0.5em",
  };

  return (
    <nav className="navigation navbar bg-light">
      <div className="title">
        <h1>Mohammed S Mahmood</h1>
        <img src={myImage} alt="mypicture" />
      </div>

      <ul className="navbar-nav">
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

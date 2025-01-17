import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="header">
      <NavLink className="header-text" to="/">
        АККОРД
      </NavLink>

      <div className={`nav ${isActive ? "open" : ""}`}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/catalog"
        >
          Каталог
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/services"
        >
          Сервисы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/partners"
        >
          Партнёры
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/contacts"
        >
          Контакты
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/about"
        >
          О нас
        </NavLink>
      </div>

      <div
        className={`burger ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
      </div>
    </header>
  );
};

// document.querySelector(".burger").addEventListener("click", function () {
//   this.classList.toggle("active");
//   document.querySelector("nav").classList.toggle("open");
// });

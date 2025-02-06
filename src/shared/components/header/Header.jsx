import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
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
          onClick={closeMenu}
        >
          Каталог
        </NavLink>
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/services"
          onClick={closeMenu}
        >
          Сервисы
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/partners"
          onClick={closeMenu}
        >
          Партнёры
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/contacts"
          onClick={closeMenu}
        >
          Контакты
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-text active" : "nav-text"
          }
          to="/about"
          onClick={closeMenu}
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

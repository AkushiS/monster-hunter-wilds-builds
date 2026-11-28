import { useState } from "react";
import { NavLink, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav>
      <NavLink to="/" id="logo-nav" onClick={closeMenu}>
        <img
          src={`${import.meta.env.BASE_URL}Icon-Rathalos.webp`}
          alt="Icône Rathalos"
        />
      </NavLink>

      {/* Bouton hamburger pour mobile et tablette */}
      <button
        type="button"
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="navigation-links"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="navigation-links" className={menuOpen ? "menu-open" : ""}>
        {pathname !== "/" && (
          <li>
            <NavLink to="/" className="accueil-title" onClick={closeMenu}>
              Accueil
            </NavLink>
          </li>
        )}

        {pathname !== "/wilds" && (
          <li>
            <NavLink to="/wilds/" className="wilds-title" onClick={closeMenu}>
              Monster Hunter
              <br />
              Wilds
            </NavLink>
          </li>
        )}

        {pathname !== "/ascendance" && (
          <li>
            <NavLink
              to="/ascendance/"
              className="ascendance-title"
              onClick={closeMenu}
            >
              <span
                className="ascendance-line"
                data-text="Monster Hunter Wilds :"
              >
                Monster Hunter Wilds :
              </span>
              <br />
              <span className="ascendance-line" data-text="Ascendance">
                Ascendance
              </span>
            </NavLink>
          </li>
        )}

        {/*location.pathname !== "/ascendance" && (
          <li>
            <NavLink to="/" className="accueil-title">
              <span className="skins-title">Skins</span>
            </NavLink>
          </li>
        )*/}
      </ul>
    </nav>
  );
}

export default Header;

import { NavLink } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Navbar() {


  return (
    <div className="navigation-container" >
      
      <span className="navigation-overlay"></span>
      <nav className="navigation">
        <ul>
          <li className="nav-list ">
            <NavLink to="/">
              <span className="nav-icon">
                <FaHouseUser />
              </span>
              <span className="nav-text">Accueil</span>
              <div className="indicator"></div>
            </NavLink>
          </li>
          <li className="nav-list ">
            <NavLink to="/realisations">
              <span className="nav-icon">
                <FaCamera />
              </span>
              <span className="nav-text">Realisations</span>
              <div className="indicator"></div>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/fonctionnement">
              <span className="nav-icon">
                <FaRoute />
              </span>
              <span className="nav-text">Fonctionnement</span>
              <div className="indicator"></div>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/tarifs">
              <span className="nav-icon">
                <FaMoneyBillWave />
              </span>
              <span className="nav-text">Tarifs</span>
              <div className="indicator"></div>
            </NavLink>
          </li>

          <li className="nav-list">
            <NavLink to="/mentions">
              <span className="nav-icon">
                <FaBalanceScale />
              </span>
              <span className="nav-text">Mentions Légales</span>
              <div className="indicator"></div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}


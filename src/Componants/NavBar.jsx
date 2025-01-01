import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import "../Style/NavBarStyle.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-white">
        <div className="container">
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
              <li className="nav-item ">
                <Link className="active text-dark" to="/">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="active text-dark" to="/">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="active text-dark" to="/">
                  <i className="fa-regular fa-bell"></i>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 d-flex gap-4 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="#">
                  اتصل بنا
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="#">
                  استكشف
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/home">
                  الرئيسية
                </Link>
              </li>
            </ul>
          </div>
          <Link className="navbar-brand active logo text-dark" to="#">
            دليل المدينة <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

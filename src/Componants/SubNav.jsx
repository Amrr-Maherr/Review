import { Link } from "react-router-dom";
import "../Style/SubNavStyle.css"
import Logo from "../Assets/Logo.png"
function SubNav() {
    return (
      <>
        <nav class="navbar bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand text-end  w-100" href="/">
              <Link className="navbar-brand active logo text-dark" to="/">
                دليل المدينة <img src={Logo} alt="Logo" />
              </Link>
            </a>
          </div>
        </nav>
      </>
    );
}
export default SubNav
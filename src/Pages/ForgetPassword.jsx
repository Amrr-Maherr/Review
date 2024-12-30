import { Link } from "react-router-dom";
import Forget from "../Assets/Forgot password.png"
import SubNav from "../Componants/SubNav";
import "../Style/ForgetPasswordStyle.css"
function ForgetPassword() {
    return (
      <>
        <SubNav />
        <section>
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-xl-6 col-12">
                <div className="ForgetPassword-img">
                  <img src={Forget} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-12 text-end  d-flex align-items-end justify-content-between flex-column gap-5">
                <div className="link">
                  <Link to="/login" className="text-decoration-none login-btn">
                    الرجوع لتسجيل الدخول >
                  </Link>
                </div>
                <div className="ForgetPassword-title">
                  <h3>هل نسيت كلمه السر؟</h3>
                  <p>
                    أدخل بريدك الإلكتروني أو رقم هاتفك، وسنرسل لك رمز التأكيد
                  </p>
                </div>
                <div className="w-100 position-relative">
                  <input
                    type="email"
                    className="form-control text-end ForgetPassword-input pe-5"
                    id="inputEmail4"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                  <i
                    className="fas fa-envelope position-absolute top-50 end-0 translate-middle-y me-3"
                  ></i>
                </div>
                <div className="w-100">
                  <Link
                    to="/reset-password"
                    className=" btn w-100 reset-password-button"
                  >
                    التالي
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default ForgetPassword
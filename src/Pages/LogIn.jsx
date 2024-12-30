import { Link } from "react-router-dom";
import login from "../Assets/login.png";
import SubNav from "../Componants/SubNav";
import "../Style/loginStyle.css";

function LogIn() {
  const HandelForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SubNav />
      <section>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            {/* قسم الصورة */}
            <div className="col-xl-6 col-md-6 col-12 mb-4 mb-md-0">
              <div className="login-img">
                <img src={login} alt="login" className="img-fluid" />
              </div>
            </div>
            {/* قسم النموذج */}
            <div className="col-xl-6 col-md-6 col-12 d-flex align-items-center justify-content-center flex-column">
              <div className="login-form text-end w-100">
                <div className="from-title mb-4">
                  <h3>تسجيل دخول</h3>
                  <p>تسجيل الدخول للوصول إلى حسابك</p>
                </div>
                <form onSubmit={HandelForm}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control text-end"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control text-end"
                      id="exampleInputPassword1"
                      placeholder="أدخل كلمة المرور الخاصة بك"
                    />
                  </div>
                  <div className="mb-3 form-check d-flex align-items-center justify-content-between">
                    <div>
                      <Link
                        className="text-danger forget-password text-decoration-none"
                        to="/forget-password"
                      >
                        هل نسيت كلمه السر؟
                      </Link>
                    </div>
                    <div>
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        تذكرنى
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                    </div>
                  </div>
                  <div className="login-btn w-100">
                    <button type="submit" className="button d-block w-100">
                      تسجيل الدخول
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogIn;

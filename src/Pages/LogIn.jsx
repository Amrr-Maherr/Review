import { Link } from "react-router-dom";
import login from "../Assets/login.png";
import SubNav from "../Componants/SubNav";
import "../Style/loginStyle.css";
import Swal from "sweetalert2";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const EmailInput = useRef();
  const PasswordInput = useRef();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const Email = EmailInput.current.value;
    const Password = PasswordInput.current.value;
    if (Email === "" || Password === "") {
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "يرجى ملء جميع الحقول!",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنا",
      });
    } else {
      const FormData = {
        email: Email,
        password: Password,
      };

      axios
        .post("https://dalil.mlmcosmo.com/api/login", FormData)
        .then((response) => {
          const token = response.data.token;
          if (token) {
            localStorage.setItem("authToken", token);
            Swal.fire({
              title: "مرحبًا بعودتك",
              text: "لقد قمت بتسجيل الدخول بنجاح في تطبيق دليل المدينة",
              icon: "success",
              background: "#F9F9F9",
              confirmButtonColor: "#EDB82C",
              confirmButtonText: "تسجيل الدخول",
            }).then(() => {
              navigate("/home");
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "عذرًا...",
              text: "فشل في عملية تسجيل الدخول",
              background: "#F9F9F9",
              confirmButtonColor: "red",
              confirmButtonText: "حسنا",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "عذرًا...",
            text: "حدث خطأ في الاتصال بالخادم!",
            background: "#F9F9F9",
            confirmButtonColor: "red",
            confirmButtonText: "حسنا",
          });
        });
    }
  };

  return (
    <>
      <SubNav />
      <section>
        <div className="container">
          <div className="row align-items-center">
            {/* قسم الصورة */}
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <div className="login-img">
                <img src={login} alt="login" className="img-fluid" />
              </div>
            </div>
            {/* قسم النموذج */}
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center flex-column">
              <div className="text-end w-100">
                <div className="from-title mb-4">
                  <h3>تسجيل دخول</h3>
                  <p>تسجيل الدخول للوصول إلى حسابك</p>
                </div>
                <form
                  onSubmit={handelLogin}
                  className="login-form d-flex align-items-center justify-content-center flex-column"
                >
                  <div className="mb-3 position-relative w-100">
                    <input
                      type="email"
                      className="form-control text-end email-input w-100"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="أدخل بريدك الإلكتروني"
                      ref={EmailInput}
                    />
                    <i className="fas fa-envelope email-icon"></i>
                  </div>
                  <div className="mb-3 position-relative w-100">
                    <input
                      type="password"
                      className="form-control text-end password-input w-100"
                      id="exampleInputPassword1"
                      placeholder="أدخل كلمة المرور الخاصة بك"
                      ref={PasswordInput}
                    />
                    <i className="fas fa-lock password-icon"></i>
                  </div>
                  <div className="mb-3 form-check d-flex justify-content-between align-items-center w-100">
                    <div className="">
                      <Link
                        className="forget-password text-decoration-none me-3"
                        to="/forget-password"
                      >
                        هل نسيت كلمه السر؟
                      </Link>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label ms-2"
                        htmlFor="exampleCheck1"
                      >
                        تذكرنى
                      </label>
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

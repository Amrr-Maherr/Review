import { Link, useNavigate } from "react-router-dom";
import Forget from "../Assets/Forgot password.png";
import SubNav from "../Componants/SubNav";
import "../Style/ForgetPasswordStyle.css";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";
import axios from "axios";

function ForgetPassword() {
  const navigate = useNavigate();
  const EmailInput = useRef();

  // التعامل مع عملية إعادة تعيين كلمة المرور
  const handelResetPassword = () => {
    const Email = EmailInput.current.value.trim();

    if (Email === "") {
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "فشل في عملية تسجيل الدخول. الرجاء إدخال البريد الإلكتروني.",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنا",
      });
    } else {
      const FormData = {
        identifier: Email,
      };
      localStorage.setItem("email",JSON.stringify(FormData))
      axios
        .post("https://dalil.mlmcosmo.com/api/forgot-password", FormData)
        .then((response) => {
          const token = response.data.token;
          // يمكن استخدام التوكن هنا حسب الحاجة
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "حدث خطأ",
            text: "لم يتم إرسال الكود، يرجى المحاولة مرة أخرى.",
            background: "#F9F9F9",
            confirmButtonColor: "red",
            confirmButtonText: "حسنا",
          });
        });

      Swal.fire({
        title: "تم إرسال الكود بنجاح",
        text: "تم إرسال رمز التأكيد إلى بريدك الإلكتروني. يرجى التحقق من بريدك.",
        icon: "success",
        background: "#F9F9F9",
        confirmButtonColor: "#EDB82C",
        confirmButtonText: "حسنا",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/verify-code");
        }
      });
    }
  };

  // استخدام useEffect لإعادة تعيين البريد الإلكتروني عند تحميل الصفحة
  useEffect(() => {
    EmailInput.current.value = "";
  }, []);

  return (
    <>
      <SubNav />
      <section>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-xl-6 col-12">
              <div className="ForgetPassword-img">
                <img src={Forget} alt="Forget password" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end d-flex align-items-end justify-content-between flex-column gap-5">
              <div className="ForgetPassword-link">
                <Link
                  to="/"
                  className="text-decoration-none login-btn text-dark"
                >
                  الرجوع لتسجيل الدخول >
                </Link>
              </div>
              <div className="ForgetPassword-title">
                <h3>هل نسيت كلمه السر؟</h3>
                <p>أدخل بريدك الإلكتروني أو رقم هاتفك، وسنرسل لك رمز التأكيد</p>
              </div>
              <form
                className="w-100 position-relative ForgetPassword-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  className="form-control text-end ForgetPassword-input pe-5"
                  id="inputEmail4"
                  placeholder="أدخل بريدك الإلكتروني"
                  ref={EmailInput}
                />
                <i className="fas fa-envelope position-absolute top-50 end-0 translate-middle-y me-3"></i>
              </form>
              <div className="w-100">
                <button
                  className="w-100 d-block text-center reset-password-button text-decoration-none"
                  onClick={handelResetPassword}
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;

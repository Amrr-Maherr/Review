import { Link, useNavigate } from "react-router-dom";
import reset from "../Assets/newPassword.png";
import SubNav from "../Componants/SubNav";
import Swal from "sweetalert2";
import "../Style/ResetPasswordStyle.css";
import { useEffect, useRef } from "react";
import axios from "axios";

function ResetPassword() {
  const FirstInput = useRef();
  const SecondInput = useRef();
  const navigate = useNavigate()
  let UserEmail = JSON.parse(localStorage.getItem("email"));
  let UserCode = JSON.parse(localStorage.getItem("code"));

  const handelResetPassword = () => {
    const passOne = FirstInput.current.value.trim();
    const passTwo = SecondInput.current.value.trim();

    if (passOne === "" || passTwo === "" || passOne !== passTwo) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "كلمات المرور غير متطابقة أو تحتوي على قيم فارغة.",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنًا",
      });
    } else {
      if (!UserEmail || !UserEmail.identifier || !UserCode) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "لم يتم العثور على البيانات المطلوبة.",
          background: "#F9F9F9",
          confirmButtonColor: "red",
          confirmButtonText: "حسنًا",
        });
        return;
      }

      let NewPassword = passTwo;
      let userData = {
        identifier: UserEmail.identifier, // تأكد من أن الـ identifier موجود
        code: UserCode, // تأكد من أن الـ code موجود
        password: NewPassword, // تأكد من إرسال الـ password
      };

      axios
        .post("https://dalil.mlmcosmo.com/api/reset-password", userData)
        .then((response) => {
          console.log("Response:", response.data); // تحقق من الاستجابة
          Swal.fire({
            icon: "success",
            title: "تم بنجاح",
            text: "تم تأكيد كلمة المرور بنجاح.",
            background: "#F9F9F9",
            confirmButtonColor: "#EDB82C",
            confirmButtonText: "موافق",
          });
          FirstInput.current.value = ""
          SecondInput.current.value = "";
          navigate('/home')
        })
        .catch((error) => {
          console.log("Error:", error.response.data); // اطبع رسالة الخطأ
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: "حدث خطأ أثناء تغيير كلمة المرور.",
            background: "#F9F9F9",
            confirmButtonColor: "red",
            confirmButtonText: "حسنًا",
          });
        });
        FirstInput.current.value = "";
        SecondInput.current.value = "";
    }
  };

  useEffect(() => {
    localStorage.removeItem("email")
    localStorage.removeItem("code")
  },[]);

  return (
    <>
      <SubNav />
      <section>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-xl-6 col-12">
              <div className="reset-password-img">
                <img src={reset} alt="Reset Password" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end d-flex align-items-center justify-content-center flex-column gap-4">
              <div className="reset-password-link w-100">
                <Link to="/" className="text-decoration-none">
                  الرجوع لتسجيل الدخول >
                </Link>
              </div>
              <div className="reset-password-title w-100">
                <h3>ادخل كلمة سر جديدة</h3>
                <p>أدخل الرمز الذي أرسلناه إلى رقمك 7698234***</p>
              </div>
              <div className="reset-password-form w-100">
                <div className="row mb-3">
                  <input
                    type="password"
                    className="form-control text-end w-100"
                    placeholder="كلمة المرور الجديدة"
                    ref={FirstInput}
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="password"
                    className="form-control text-end w-100"
                    placeholder="تأكيد كلمة المرور"
                    ref={SecondInput}
                  />
                </div>
                <div className="reset-password-button w-100 my-4">
                  <button
                    className="d-block w-100"
                    onClick={handelResetPassword}
                  >
                    إنشاء كلمة مرور جديدة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;

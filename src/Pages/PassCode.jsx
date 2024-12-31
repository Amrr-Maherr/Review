import SubNav from "../Componants/SubNav";
import Swal from "sweetalert2";
import reset from "../Assets/reset.png";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/PassCodeStyle.css"

function PassCode() {
  const inputNumberOne = useRef();
  const inputNumberTwo = useRef();
  const inputNumberThree = useRef();
  const inputNumberFour = useRef();
  const navigate = useNavigate();
  const [totalNumbers, setTotalNumbers] = useState("");

  const handelSendNumber = () => {
    const numberOne = inputNumberOne.current.value.trim();
    const numberTwo = inputNumberTwo.current.value.trim();
    const numberThree = inputNumberThree.current.value.trim();
    const numberFour = inputNumberFour.current.value.trim();

    if (
      numberOne === "" ||
      numberTwo === "" ||
      numberThree === "" ||
      numberFour === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "يجب عليك إدخال كود التحقق المرسل إلى بريدك الإلكتروني.",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنا",
      });
    } else {
      const enteredCode = `${numberOne}${numberTwo}${numberThree}${numberFour}`;
      setTotalNumbers(enteredCode); // تحديث الحالة بالقيم المدخلة
      localStorage.setItem("code", enteredCode); // حفظ الكود في الـ localStorage
      Swal.fire({
        title: "تم إرسال الكود بنجاح",
        text: "لقد تم إرسال رمز التحقق إلى بريدك الإلكتروني. سيتم تحويلك إلى صفحة إعادة تعيين كلمة المرور.",
        icon: "success",
        background: "#F9F9F9",
        confirmButtonColor: "#EDB82C",
        confirmButtonText: "موافق",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/reset-password"); // تحويل المستخدم إلى صفحة إعادة تعيين كلمة المرور
        }
      });
    }
  };
  const handelResendCode = () => {
    let Email = JSON.parse(localStorage.getItem('email'))
    axios
      .post("https://dalil.mlmcosmo.com/api/forgot-password", Email)
      .then((response) => {
        let token = response.data.token;
        // رسالة النجاح بعد إرسال الكود
        Swal.fire({
          title: "تم إرسال كود التحقق بنجاح",
          text: "تم إرسال رمز التحقق إلى بريدك الإلكتروني. الرجاء التحقق من بريدك الإلكتروني لإتمام العملية.",
          icon: "success",
          background: "#F9F9F9",
          confirmButtonColor: "#EDB82C",
          confirmButtonText: "موافق",
        });
      })
      .catch((error) => {
        console.log(error);
        // يمكن إضافة رسالة خطأ هنا في حال فشل الطلب
        Swal.fire({
          title: "حدث خطأ",
          text: "عذرًا، حدث خطأ أثناء إرسال كود التحقق. حاول مرة أخرى.",
          icon: "error",
          background: "#F9F9F9",
          confirmButtonColor: "red",
          confirmButtonText: "حسنا",
        });
      });
  }
  return (
    <>
      <SubNav />
      <section className="d-flex min-vh-100 align-items-center justify-content-center">
        <div className="container">
          <div className="row w-100">
            <div className="col-xl-6 col-12 text-center">
              <div className="PassCode-password-img mx-auto">
                <img src={reset} alt="PassCode" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end d-flex align-items-center justify-content-center flex-column gap-4">
              <div className="PassCode-password-link w-100">
                <a href="/" className="text-decoration-none text-dark">
                  الرجوع لتسجيل الدخول >
                </a>
              </div>
              <div className="PassCode-password-title w-100">
                <h3>ادخل رمز التحقق</h3>
                <p>دخل الرمز الذي أرسلناه إلى رقمك 7698234***</p>
              </div>
              <div className="PassCode-password-form d-flex align-items-center justify-content-center gap-3 w-100">
                <input
                  type="text"
                  className="form-control text-center"
                  ref={inputNumberOne}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  ref={inputNumberTwo}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  ref={inputNumberThree}
                />
                <input
                  type="text"
                  className="form-control text-center"
                  ref={inputNumberFour}
                />
              </div>
              <div
                className="PassCode-password-button w-100 text-center"
                onClick={handelSendNumber}
              >
                <button className="d-block w-100">التالي</button>
              </div>
              <div className="PassCode-password-SubLink w-100 text-center">
                <span>لم تتلق الرمز ؟</span>
                <a
                  href="#"
                  onClick={() => {
                    handelResendCode();
                  }}
                >
                  إعادة الإرسال
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PassCode;

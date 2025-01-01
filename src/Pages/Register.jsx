import RegisterImg from "../Assets/Register.png";
import { useRef, useState } from "react";
import "../Style/RegisterStyle.css";
import Swal from "sweetalert2";
import SubNav from "../Componants/SubNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [show, setShow] = useState(true);  //
  const navigate = useNavigate(); // هنا يجب استدعاء الدالة
  const showPassWord = () => {
    setShow(!show);
    console.log("test");
  };
  const FNameInput = useRef();
  const SNameInput = useRef();
  const EmailInput = useRef();
  const NumberInput = useRef();
  const PasswordInput = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    const firstName = FNameInput.current.value.trim();
    const secondName = SNameInput.current.value.trim();
    const email = EmailInput.current.value.trim();
    const phoneNumber = NumberInput.current.value.trim();
    const password = PasswordInput.current.value.trim();
    if (
      firstName === "" ||
      secondName === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "يرجى ملء جميع الحقول!",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنا",
      });
    } else {
      const formData = {
        name: `${firstName} ${secondName}`,
        email: email,
        phone: phoneNumber,
        password: password,
      };
      axios
        .post("https://dalil.mlmcosmo.com/api/register", formData)
        .then((response) => {
          const token = response.data.token; // 
          if (token) {
            localStorage.setItem("authToken", token);
            Swal.fire({
              title: "تمت العملية بنجاح",
              text: "لقد تم تسجيل حسابك بنجاح",
              icon: "success",
              background: "#F9F9F9",
              confirmButtonColor: "#EDB82C",
              confirmButtonText: "تسجيل الدخول",
              
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/"); // التنقل هنا بعد التسجيل
              }
            });

            // مسح البيانات بعد التسجيل
            FNameInput.current.value = "";
            SNameInput.current.value = "";
            EmailInput.current.value = "";
            NumberInput.current.value = "";
            PasswordInput.current.value = "";
          }
        })
        .catch((error) => {
          if (error) {
            Swal.fire({
              icon: "error",
              title: "فشل التسجيل",
            });
          }
        });
    }
  };

  return (
    <>
      <SubNav />
      <section>
        <div className="container py-2">
          <div className="row d-flex align-item-center justify-content-between">
            <div className="col-xl-6 col-12">
              <div className="register-img">
                <img src={RegisterImg} alt="Registration" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end">
              <div className="register-title">
                <h3>تسجيل جديد</h3>
                <p>دعنا نساعدك جميعًا حتى تتمكن من الوصول إلى حسابك الشخصي.</p>
              </div>
              <form className="row g-4 register-form" onSubmit={handleRegister}>
                {/* حقل الاسم الثاني */}
                <div className="col-md-6 input-container">
                  <input
                    type="text"
                    className="form-control text-end"
                    placeholder="أدخل اسم العائله"
                    ref={SNameInput}
                  />
                  <i className="fa-regular fa-user input-icon"></i>
                </div>
                {/* حقل الاسم الأول */}
                <div className="col-md-6 input-container">
                  <input
                    type="text"
                    className="form-control text-end"
                    placeholder="أدخل الاسم الاول"
                    ref={FNameInput}
                  />
                  <i className="fa-regular fa-user input-icon"></i>
                </div>
                {/* حقل الايميل */}
                <div className="col-12 input-container">
                  <input
                    type="email"
                    className="form-control text-end"
                    placeholder="أدخل بريدك الإلكتروني"
                    ref={EmailInput}
                  />
                  <i className="fa-regular fa-envelope input-icon"></i>
                </div>
                {/* حقل رقم الهاتف */}
                <div className="col-12 input-container">
                  <input
                    type="number"
                    className="form-control text-end"
                    placeholder="أدخل رقم الهاتف الخاص بك"
                    ref={NumberInput}
                  />
                  <i className="fa-solid fa-phone-flip input-icon"></i>
                </div>
                {/* حقل كلمة السر */}
                {show ? (
                  <>
                    <div className="col-12 input-container password-container">
                      <input
                        type="password"
                        className="form-control text-end"
                        placeholder="أدخل كلمة المرور الخاصة بك"
                        ref={PasswordInput}
                      />
                      <i className="fa-solid fa-lock input-icon"></i>
                      <i
                        className="fa-regular fa-eye password-toggle-icon"
                        onClick={showPassWord}
                      ></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-12 input-container password-container">
                      <input
                        type="text"
                        className="form-control text-end"
                        placeholder="أدخل كلمة المرور الخاصة بك"
                        ref={PasswordInput}
                      />
                      <i className="fa-solid fa-lock input-icon"></i>
                      <i
                        className="fa-regular fa-eye-slash password-toggle-icon"
                        onClick={showPassWord}
                      ></i>
                    </div>
                  </>
                )}
                <div className="col-12">
                  <div className="register-btn">
                    <button type="submit" className="d-block w-100">
                      تسجيل جديد
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check d-flex align-items-center justify-content-end gap-4">
                    <input
                      className="form-check-input order-2"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label
                      className="form-check-label order-1 mx-2"
                      htmlFor="gridCheck"
                    >
                      وافق على <span>شروط الخدمة</span> وسياسة الخصوصية{" "}
                      <span>الخاصه بك</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;

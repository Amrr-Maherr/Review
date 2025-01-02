// Import necessary libraries and components
import { Link } from "react-router-dom"; // To navigate between pages
import login from "../Assets/login.png"; // Login image
import SubNav from "../Componants/SubNav"; // Navigation component
import "../Style/loginStyle.css"; // Custom styling for the login page
import Swal from "sweetalert2"; // SweetAlert2 for displaying alerts
import { useRef } from "react"; // useRef to manage input field references
import axios from "axios"; // Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // To navigate programmatically

function LogIn() {
  // Refs to capture user inputs for email and password
  const EmailInput = useRef();
  const PasswordInput = useRef();
  const navigate = useNavigate(); // To navigate to home page after successful login

  // Function to handle login process
  const handelLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get values from input fields
    const Email = EmailInput.current.value;
    const Password = PasswordInput.current.value;

    // Check if both fields are filled
    if (Email === "" || Password === "") {
      // Display error alert if fields are empty
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "يرجى ملء جميع الحقول!",
        background: "#F9F9F9",
        confirmButtonColor: "red",
        confirmButtonText: "حسنا",
      });
    } else {
      // Create form data object
      const FormData = {
        email: Email,
        password: Password,
      };

      // Make POST request to the login API
      axios
        .post("https://dalil.mlmcosmo.com/api/login", FormData)
        .then((response) => {
          const token = response.data.token;

          if (token) {
            // Save token to local storage if login is successful
            localStorage.setItem("authToken", token);

            // Display success alert and navigate to home page
            Swal.fire({
              title: "مرحبًا بعودتك",
              text: "لقد قمت بتسجيل الدخول بنجاح في تطبيق دليل المدينة",
              icon: "success",
              background: "#F9F9F9",
              confirmButtonColor: "#EDB82C",
              confirmButtonText: "تسجيل الدخول",
            }).then(() => {
              navigate("/home"); // Redirect to home page after successful login
            });
          } else {
            // Display error alert if login fails
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
          // Display error alert if server error occurs
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
      {/* Sub navigation component */}
      <SubNav />

      {/* Login section */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            {/* Image section */}
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <div className="login-img">
                <img src={login} alt="login" className="img-fluid" />
              </div>
            </div>

            {/* Form section */}
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center flex-column">
              <div className="text-end w-100">
                {/* Form title */}
                <div className="from-title mb-4">
                  <h3>تسجيل دخول</h3>
                  <p>تسجيل الدخول للوصول إلى حسابك</p>
                </div>

                {/* Login form */}
                <form
                  onSubmit={handelLogin}
                  className="login-form d-flex align-items-center justify-content-center flex-column"
                >
                  {/* Email input */}
                  <div className="mb-3 position-relative w-100">
                    <input
                      type="email"
                      className="form-control text-end email-input w-100"
                      id="exampleInputEmail1"
                      placeholder="أدخل بريدك الإلكتروني"
                      ref={EmailInput}
                    />
                    <i className="fas fa-envelope email-icon"></i>
                  </div>

                  {/* Password input */}
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

                  {/* Remember me and forgot password links */}
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

                  {/* Login button */}
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

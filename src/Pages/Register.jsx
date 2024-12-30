// استيراد صورة التسجيل من المجلد المحلي
import RegisterImg from "../Assets/Register.png";

// استيراد useRef علشان نقدر نتحكم في المدخلات بشكل مباشر
import { useRef } from "react";

// استيراد ملف الـ CSS علشان ننسق الصفحة
import "../Style/RegisterStyle.css";

// استيراد مكتبة SweetAlert2 لعرض الرسائل المنبثقة
import Swal from "sweetalert2";

// استيراد مكون الـ SubNav علشان نعرض شريط التنقل
import SubNav from "../Componants/SubNav";

// استيراد مكتبة axios علشان نعمل طلبات HTTP
import axios from "axios";

function Register() {
  // هنا بنعرف مراجع المدخلات علشان نقدر نستخدمها في الحصول على القيم المدخلة
  const FNameInput = useRef(); // مرجع الاسم الأول
  const SNameInput = useRef(); // مرجع الاسم الثاني
  const EmailInput = useRef(); // مرجع البريد الإلكتروني
  const NumberInput = useRef(); // مرجع رقم الهاتف
  const PasswordInput = useRef(); // مرجع كلمة السر

  // الدالة دي هتشتغل لما المستخدم يبعت الفورم
  const handleRegister = (e) => {
    e.preventDefault(); // هنا بنمنع الصفحة من التحديث التلقائي لما المستخدم يبعت الفورم

    // بنجيب القيم المدخلة من المدخلات ونشيل المسافات الفاضية
    const firstName = FNameInput.current.value.trim(); // قيمة الاسم الأول
    const secondName = SNameInput.current.value.trim(); // قيمة الاسم الثاني
    const email = EmailInput.current.value.trim(); // قيمة البريد الإلكتروني
    const phoneNumber = NumberInput.current.value.trim(); // قيمة رقم الهاتف
    const password = PasswordInput.current.value.trim(); // قيمة كلمة السر

    // هنا بنشوف إذا كانت في أي خانة فاضية
    if (
      firstName === "" ||
      secondName === "" ||
      email === "" ||
      phoneNumber === "" ||
      password === ""
    ) {
      // لو في خانات فاضية، بنعرض رسالة خطأ
      Swal.fire({
        icon: "error",
        title: "عذرًا...",
        text: "يرجى ملء جميع الحقول!",
        background: "#F9F9F9", // الخلفية بلون فاتح
        confirmButtonColor: "red", // لون الزرار هيبقى أحمر
        confirmButtonText: "حسنا",
      });
    } else {
      // لو مفيش خانات فاضية، بنحضر بيانات التسجيل
      const formData = {
        name: `${firstName} ${secondName}`,
        email: email,
        phone: phoneNumber,
        password: password,
      };

      // بنبعت البيانات دي للسيرفر باستخدام axios
      axios
        .post("https://dalil.mlmcosmo.com/api/register", formData)
        .then((response) => {
          const token = response.data.token; // لو في توكن رجع من السيرفر بنحفظه
          if (token) {
            // لو فيه توكن، بنخزنه في localStorage علشان نستخدمه في المستقبل
            localStorage.setItem("authToken", token);
            // بنعرض رسالة نجاح
            Swal.fire({
              title: "تمت العملية بنجاح",
              text: "لقد تم تسجيل حسابك بنجاح",
              icon: "success",
              background: "#F9F9F9",
              confirmButtonColor: "#EDB82C", // لون الزرار ده هيكون دهبي
              confirmButtonText: "تسجيل الدخول", // نص الزرار هيبقى "تسجيل الدخول"
            });
            // بعد التسجيل الناجح، بنمحي القيم المدخلة
            FNameInput.current.value = "";
            SNameInput.current.value = "";
            EmailInput.current.value = "";
            NumberInput.current.value = "";
            PasswordInput.current.value = "";
          }
        })
        .catch((error) => {
          if (error) {
            // لو حصل أي خطأ أثناء التسجيل، بنعرض رسالة خطأ
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
      {/* هنا بنعرض شريط التنقل العلوي */}
      <SubNav />
      <section>
        <div className="container">
          <div className="row d-flex align-item-center justify-content-between">
            <div className="col-xl-6 col-12">
              {/* هنا بنعرض صورة التسجيل */}
              <div className="register-img">
                <img src={RegisterImg} alt="Registration" />
              </div>
            </div>
            <div className="col-xl-6 col-12 text-end">
              {/* هنا بنعرض عنوان التسجيل والنص اللي تحت */}
              <div className="register-title">
                <h3>تسجيل جديد</h3>
                <p>دعنا نساعدك جميعًا حتى تتمكن من الوصول إلى حسابك الشخصي.</p>
              </div>
              {/* هنا الفورم اللي بيحتوي على المدخلات */}
              <form className="row g-4" onSubmit={handleRegister}>
                {/* حقل الاسم الثاني */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control text-end"
                    placeholder="أدخل اسم العائله"
                    ref={SNameInput} // ربط الحقل بمراجعته
                  />
                </div>
                {/* حقل الاسم الأول */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control text-end"
                    placeholder="أدخل الاسم الاول"
                    ref={FNameInput} // ربط الحقل بمراجعته
                  />
                </div>
                {/* حقل الايميل */}
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control text-end"
                    placeholder="أدخل بريدك الإلكتروني"
                    ref={EmailInput} // ربط الحقل بمراجعته
                  />
                </div>
                {/* حقل رقم الهاتف */}
                <div className="col-12">
                  <input
                    type="number"
                    className="form-control text-end"
                    placeholder="أدخل رقم الهاتف الخاص بك"
                    ref={NumberInput} // ربط الحقل بمراجعته
                  />
                </div>
                {/* حقل كلمة السر */}
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control text-end"
                    placeholder="أدخل كلمة المرور الخاصة بك"
                    ref={PasswordInput} // ربط الحقل بمراجعته
                  />
                </div>
                {/* الزرار اللي بيبعث البيانات */}
                <div className="col-12">
                  <div className="register-btn">
                    <button type="submit" className="d-block w-100">
                      تسجيل جديد
                    </button>
                  </div>
                </div>
                {/* خانة الموافقة على الشروط */}
                <div className="col-12">
                  <div className="form-check d-flex align-items-center justify-content-end gap-4">
                    <input
                      className="form-check-input order-2"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label
                      className="form-check-label order-1"
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

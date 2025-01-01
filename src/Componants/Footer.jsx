import { Link } from "react-router-dom";
import "../Style/FooterStyle.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container py-4">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-xl-3 col-md-6 col-12 text-center mb-4">
              <h4>اخر اخبارنا</h4>
              <div className="form gap-2 d-flex align-items-center justify-content-center">
                <button className="btn">اشتراك</button>
                <input
                  type="text"
                  className="form-control mt-2 text-center"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 text-center mb-4">
              <h3>معلومات</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="text-decoration-none ">
                    الاماكن
                  </a>
                </li>
                <li>
                  <a href="" className="text-decoration-none ">
                    الدعم
                  </a>
                </li>
                <li>
                  <a href="" className="text-decoration-none ">
                    البنود
                  </a>
                </li>
                <li>
                  <a href="" className="text-decoration-none ">
                    الخصوصيه
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 col-12 text-center mb-4">
              <h3>القائمه</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home" className="text-decoration-none ">
                    الرئيسيه
                  </Link>
                </li>
                <Link to="/profile" className="text-decoration-none profile">
                  الصفحه الشخصيه
                </Link>
                <li>المفضله</li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 col-12 text-center mb-4">
              <h3>دليل المدينه</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="text-decoration-none ">
                    "هذا نص وهمي يُستخدم لأغراض التصميم
                  </a>
                </li>
                <li>
                  <a href="" className="text-decoration-none ">
                    والعرض. الغرض منه هو ملء المساحات
                  </a>
                </li>
                <li>
                  <a href="" className="text-decoration-none ">
                    النصية لإظهار الشكل النهائي للتصميم قبل إضافة المحتوى الفعلي
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

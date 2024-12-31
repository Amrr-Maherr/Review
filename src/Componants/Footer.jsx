import "../Style/FooterStyle.css"
function Footer() {
    return (
      <>
        <footer>
          <div className="container py-4">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-xl-3 col-12 text-center">
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
              <div className="col-xl-3 col-12 text-center">
                <h3>معلومات</h3>
                <ul className="list-unstyled">
                  <li>الاماكن</li>
                  <li>الدعم</li>
                  <li>البنود</li>
                  <li>الخصوصيه</li>
                </ul>
              </div>
              <div className="col-xl-3 col-12 text-center">
                <h3>القائمه</h3>
                <ul className="list-unstyled">
                  <li>الرئيسيه</li>
                  <li>الصفحه الشخصيه</li>
                  <li>المفضله</li>
                </ul>
              </div>
              <div className="col-xl-3 col-12 text-center">
                <h3>دليل المدينه</h3>
                <ul className="list-unstyled">
                  <li>"هذا نص وهمي يُستخدم لأغراض التصميم</li>
                  <li>والعرض. الغرض منه هو ملء المساحات</li>
                  <li>
                    النصية لإظهار الشكل النهائي للتصميم قبل إضافة المحتوى الفعلي
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
export default Footer
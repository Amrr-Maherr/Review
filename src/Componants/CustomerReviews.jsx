import Review from "../Assets/review.png"
import av1 from "../Assets/Mask group.png"
import av2 from "../Assets/Mask group2.png"
import av3 from "../Assets/Mask group3.png"
import "../Style/CustomerReviewsStyle.css"
function CustomerReviews() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-xl-4 col-12">
                <div className="review-img text-center">
                  <img src={Review} alt="" />
                </div>
              </div>
              <div className="col-xl-8 col-12">
                <div className="Customer-Reviews">
                  <div className="title text-center mb-4">
                    <h3>اراء العماء عن مطعم الراتب الشامى</h3>
                  </div>
                  <div className="text text-end mb-4">
                    <p>
                      "هذا نص وهمي يُستخدم لأغراض التصميم والعرض. الغرض منه هو
                      ملء المساحات النصية لإظهار الشكل النهائي للتصميم قبل إضافة
                      المحتوى الفعلي يمكن تعديل هذا النص حسب الحاجة ليعكس الشكل
                      العام للمشروع يُفضل استخدام نصوص مشابهة لتوفير تجربة عرض
                      واقعية وأكثر انسجامًا مع احتياجات التصميم."
                    </p>
                  </div>
                  <div className="review d-flex align-items-center justify-content-end">
                    <div className="avatar-review text-end">
                      <p>اراء العملاء</p>
                      <span>4.9 (18.6k Reviews)</span>
                    </div>
                    <div className="avatar-images">
                      <img src={av3} alt="" className="one" />
                      <img src={av1} alt="" className="two" />
                      <img src={av2} alt="" className="three" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default CustomerReviews;
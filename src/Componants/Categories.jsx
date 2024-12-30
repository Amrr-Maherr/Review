import "../Style/CategoriesStyle.css"
function Categories() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-12 my-3">
                <div class="card Cafes-Card text-bg-dark">
                  <div class="card-img-overlay  d-flex align-items-center justify-content-end flex-column">
                    <h5 class="Cafes-title">الكافيهات</h5>
                    <p class="Cafes-text text-center">
                      البحث عن والأماكن و الوجهات الأكثر شعبية <br />
                      لدينا
                    </p>
                    <p class="card-button">
                      <button className="Cafes-button">
                        عرض جميع الكافيهات
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-12 my-3">
                <div class="card Restaurants-Card text-bg-dark">
                  <div class="card-img-overlay  d-flex align-items-center justify-content-end flex-column">
                    <h5 class="Restaurants-title">المطاعم</h5>
                    <p class="Restaurants-text text-center">
                      البحث عن والأماكن و الوجهات الأكثر شعبية <br />
                      لدينا
                    </p>
                    <p class="card-button">
                      <button className="Restaurants-button">
                        عرض جميع المطاعم
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default Categories
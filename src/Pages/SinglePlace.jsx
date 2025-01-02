import { useState, useEffect } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer"
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style/SingleStyle.css";
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function SinglePlace() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [error, setError] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false); // State to control InfoWindow visibility
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`https://dalil.mlmcosmo.com/api/place/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPlace(response.data); // تخزين البيانات في الحالة
      })
      .catch((error) => {
        setError("فشل في جلب بيانات المكان. حاول مرة أخرى لاحقًا."); // تخزين رسالة الخطأ
        console.error(error);
      });
  }, [id]);

  // دالة لتحويل الوقت من النظام 24 ساعة إلى 12 ساعة
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":");
    const suffix = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12; // تحويل إلى 12 ساعة
    return `${hour12}:${minute} ${suffix}`;
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        {error && <p className="text-danger">{error}</p>}
        {place ? (
          <div className="row text-center">
            {/* العمود الأول يحتوي على صورة واحدة */}
            {place.images[0] && place.images[0].image !== place.cover_image && (
              <div className="col-md-4 mb-3">
                <div className="main-img h-100 rounded">
                  <img
                    src={place.images[0].image}
                    alt="Image 1"
                    className="h-100 rounded"
                  />
                </div>
              </div>
            )}

            {/* العمود الثاني يحتوي على صورتين تحت بعض */}
            <div className="col-md-4">
              {place.images[1] &&
                place.images[1].image !== place.cover_image && (
                  <div className="mb-3">
                    <div className="sub-img">
                      <img
                        src={place.images[1].image}
                        alt="Image 2"
                        className="h-100 rounded "
                      />
                    </div>
                  </div>
                )}
              {place.images[2] &&
                place.images[2].image !== place.cover_image && (
                  <div className="mb-3">
                    <div className="sub-img">
                      <img
                        src={place.images[2].image}
                        alt="Image 3"
                        className="h-100 rounded "
                      />
                    </div>
                  </div>
                )}
            </div>

            {/* العمود الثالث يحتوي على صورتين تحت بعض */}
            <div className="col-md-4">
              {place.images[3] &&
                place.images[3].image !== place.cover_image && (
                  <div className="mb-3">
                    <div className="sub-img">
                      <img
                        src={place.images[3].image}
                        alt="Image 4"
                        className="h-100 rounded "
                      />
                    </div>
                  </div>
                )}
              {place.images[4] &&
                place.images[4].image !== place.cover_image && (
                  <div className="mb-3">
                    <div className="sub-img">
                      <img
                        src={place.images[4].image}
                        alt="Image 5"
                        className="h-100 rounded "
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
        ) : (
          !error && <p>جاري تحميل بيانات المكان...</p>
        )}

        {/* معلومات المكان */}
        {place && (
          <div className="place-info mt-4 text-end">
            <div className="name">
              <h3>{place.name}</h3>
            </div>
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-6 text-start">
                <div className="reviews">
                  <i className="fas fa-star"></i>
                  <strong>التقييمات:</strong> {place.reviews}
                  <i className="fas fa-comment-dots"></i>
                  <strong>عدد التقييمات:</strong> {place.reviews_count}
                </div>
              </div>
              <div className="col-6">
                <div className="working-hours my-4">
                  <i className="fas fa-clock"></i>
                  <strong>يفتح الساعة:</strong>{" "}
                  {convertTo12HourFormat(place.open_at)}
                  <br />
                  <i className="fas fa-clock"></i>
                  <strong>يغلق الساعة:</strong>{" "}
                  {convertTo12HourFormat(place.close_at)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* الخريطة */}
        {place && (
          <div className="container">
            <div className="row">
              <div className="col-12 text-end my-5">
                <h3>الموقع/ الخريطه</h3>
              </div>
            </div>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                center={{ lat: place.latitude, lng: place.longitude }}
                zoom={13}
                mapContainerStyle={{
                  height: "450px",
                  width: "100%",
                  borderRadius: "16px",
                }}
              >
                <Marker
                  position={{ lat: place.latitude, lng: place.longitude }}
                  onClick={() => setShowInfoWindow(!showInfoWindow)}
                />
                {showInfoWindow && (
                  <InfoWindow
                    position={{ lat: place.latitude, lng: place.longitude }}
                  >
                    <div>{place.name}</div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>
        )}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 text-end">
              <h3>التقييمات</h3>
            </div>
          </div>
              </div>
              <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <Footer/>
    </>
  );
}

export default SinglePlace;

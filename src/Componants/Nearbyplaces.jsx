import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/Nearbyplaces.css";
import NearbyplacesCard from "../Componants/NearbyplacesCard";

function NearbyPlaces() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({
    latitude: 31.034244338510604, // الموقع ثابت (المنصورة)
    longitude: 31.3576615360131, // الموقع ثابت (المنصورة)
  });

  useEffect(() => {
    const { latitude, longitude } = location;

    axios
      .post(
        "https://dalil.mlmcosmo.com/api/store-location",
        { latitude, longitude },
        {
          headers: {
            Authorization: `Bearer 22|qrnLablP5Cga3w97BDQpcMTN9t9WEB0T173BBaMqd515d827`,
          },
        }
      )
      .then(() => {
        axios
          .get(
            `https://dalil.mlmcosmo.com/api/nearby-places?latitude=${latitude}&longitude=${longitude}`,
            {
              headers: {
                Authorization: `Bearer 21|xEO9VIYc3kfKgLvylbE2gfZ0E3CFXcpKZsyGKaxS9cefc502`,
              },
            }
          )
          .then((placesResponse) => {
            // طباعة البيانات في الكونسول للتحقق
            setPlaces(placesResponse.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching places:", error);
            setError("حدث خطأ أثناء جلب الأماكن.");
            setLoading(false);
          });
      })
      .catch(() => {
        setError("حدث خطأ أثناء إرسال الموقع.");
        setLoading(false);
      });
  }, [location]); // Will use the fixed location

  return (
    <section>
      <div className="container my-3">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-xl-6 col-12 text-start my-4">
            <button>شاهد أماكن أكثر</button>
          </div>
          <div className="col-xl-6 col-12 text-end my-4">
            <h3>استكشف الأماكن القريبة منك</h3>
            <div className="hr my-3 text-end"></div>
            <p>البحث عن الأماكن القريبة والأماكن الأكثر شعبية لدينا</p>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <div>جاري التحميل...</div>
          ) : error ? (
            <div>{error}</div>
          ) : places.length === 0 ? (
            <div>لا توجد أماكن قريبة للعرض.</div>
          ) : (
            places.map((place, index) => (
              <div key={index} className="col-xl-4 col-12 my-4">
                <NearbyplacesCard place={place} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default NearbyPlaces;

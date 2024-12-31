import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick"; // استيراد مكتبة السلايدر
import BestPlacesCard from "../Componants/BestPlacesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BestPlaces() {
  const [places, setPlaces] = useState([]); // تغيير initial state إلى مصفوفة

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    axios
      .get("https://dalil.mlmcosmo.com/api/top-rated-places", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPlaces(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching places:", error));
  }, []);

  const settings = {
    dots: true, // نقاط التنقل
    infinite: true, // التكرار اللانهائي
    speed: 500, // سرعة الانتقال
    slidesToShow: 3, // عدد الكروت المعروضة في الشاشة
    slidesToScroll: 1, // عدد الكروت التي يتم تمريرها في كل انتقال
    responsive: [
      {
        breakpoint: 1024, // للشاشات الأصغر
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container">
        <Slider {...settings}>
          {Array.isArray(places) &&
            places.map((place) => (
              <div key={place.id}>
                <BestPlacesCard place={place} />
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}

export default BestPlaces;

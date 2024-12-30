import React from "react";
import "../Style/NearbyplacesCardStyle.css";

function NearbyplacesCard({ place }) {
  return (
    <div className="card mx-auto mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        {/* النصوص */}
        <div className="col-md-8 col-12 order-2 order-md-1">
          <div className="card-body text-center text-md-end">
            <h5 className="card-title text-truncate">{place.name}</h5>
            <p className="card-text text-wrap">{place.map_disc}</p>
          </div>
        </div>
        {/* الصورة */}
        <div className="col-md-4 col-12 order-1 order-md-2 d-flex justify-content-center my-3">
          <img
            src={
              place.images && place.images.length > 0
                ? place.images[0].image
                : "path_to_image" // ضع هنا مسار الصورة الافتراضية
            }
            className="img-fluid rounded-start"
            alt="Place Image"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NearbyplacesCard;

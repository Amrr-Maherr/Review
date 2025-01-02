import React from "react";
import "../Style/NearbyplacesCardStyle.css";
import { Link } from "react-router-dom";

function NearbyplacesCard({ place }) {
  return (
    <Link to={`single-place/${place.id}`} className="text-decoration-none">
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
              src={place.cover_image}
              className="img-fluid rounded-start"
              alt="Place Image"
              style={{ maxHeight: "150px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NearbyplacesCard;

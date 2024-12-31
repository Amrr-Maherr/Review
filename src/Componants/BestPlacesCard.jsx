import React from "react";
import "../Style/BestPlacesCardStyle.css";

const BestPlacesCard = ({ place }) => {
  return (
    <div className="card card-place mx-auto">
      <img
        src={place.cover_image}
        className="card-img-top"
        alt={place.name || "Place image"}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="card-body card-place-body text-end  w-100">
        <h5 className="card-title place-title">{place.name}</h5>
        <div className="d-flex align-items-center justify-content-end gap-2">
          <p>4.7 (5367)</p>
          <p className="card-text">
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-muted"></i>
          </p>
        </div>
        <p className="card-text place-description">
          {place.map_disc.slice(0,15)}
          <i class="fa-solid fa-location-dot mx-1 text-danger"></i>
        </p>
        <div className="d-flex align-items-center justify-content-around">
          <p className="card-text">Close: {place.close_at}</p>
          <span>|</span>
          <p className="card-text">Status: {place.status}</p>
        </div>
      </div>
    </div>
  );
};

export default BestPlacesCard;

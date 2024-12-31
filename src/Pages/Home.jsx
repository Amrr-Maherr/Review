import { Link } from "react-router-dom";
import NavBar from "../Componants/NavBar";
import NearbyPlaces from "../Componants/Nearbyplaces";
import "../Style/HomeStyle.css";
import Categories from "../Componants/Categories";
import BestPlaces from "../Componants/BestPlaces.jsx";
import { useState } from "react";
import CustomerReviews from "../Componants/CustomerReviews.jsx";
import Footer from "../Componants/Footer.jsx";

function Home() {
  const token = localStorage.getItem("authToken");

  return (
    <>
      <NavBar />
      <section>
        <div className="container-fluid Hero vh-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center d-flex align-items-center justify-content-center flex-column gap-5">
            <div className="hero-text text-white">
              <h1>
                استكشف العالم من حولك بسهولة <br />
                وابتكار
              </h1>
            </div>
            {token ? (
              ""
            ) : (
              <div className="hero-buttons">
                <Link
                  to="/"
                  className="Register btn text-white text-decoration-none"
                >
                  تسجيل
                </Link>
                <Link
                  to="/register"
                  className="log btn text-white text-decoration-none"
                >
                  تسجيل دخول
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="container">
          <NearbyPlaces />
        </div>

        <div className="container my-5">
          <Categories />
        </div>

        <div className="container my-5">
          <BestPlaces />
        </div>

        <div className="container my-5">
          <CustomerReviews />
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Home;

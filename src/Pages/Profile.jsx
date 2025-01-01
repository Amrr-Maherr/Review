import NavBar from "../Componants/NavBar";
import Profilecover from "../Assets/profile.png";
import photo from "../Assets/photo.png";
import "../Style/ProfileStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../Componants/ProfileCard";
import Footer from "../Componants/Footer";

function Profile() {
  const [info, setInfo] = useState({});
  const token = localStorage.getItem("authToken");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dalil.mlmcosmo.com/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Response data:", response.data);
        setInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("حدث خطأ أثناء جلب البيانات.");
        setLoading(false);
      });
  }, [token]);

  return (
    <>
      <NavBar />
      <section className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-12 my-5">
              <div className="profile-cover">
                <img src={Profilecover} alt="Cover" />
                <div className="profile-photo">
                  <img src={photo} alt="Profile" />
                </div>
              </div>
            </div>
            <div className="col-12 text-end my-5">
              <div className="personal-info-parent">
                <div className="personal-info-title my-4">
                  <h3>الصفحه الشخصيه</h3>
                </div>
                <div className="personal-info bg-white">
                  {loading ? (
                    <div className="spinner-container">
                      <div className="spinner"></div>
                    </div>
                  ) : (
                    <ProfileCard item={info || {}} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;

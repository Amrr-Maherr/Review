import { useState } from "react";
import "../Style/ProfileCardStyle.css";
import axios from "axios";
import Swal from "sweetalert2";
function ProfileCard({ item }) {
  const [Edit, setEdit] = useState(false);
  const [name, setName] = useState(item.name || "");
  const [phone, setPhone] = useState(item.phone || "");
  const [email, setEmail] = useState(item.email || "");
  const [image, setImage] = useState(item.image || "");

  const editInfo = () => {
    setEdit(!Edit); // التبديل بين وضع التحرير وعدم التحرير
  };

  const handleSave = () => {
  const token = localStorage.getItem("authToken");
  // هنا يمكنك إضافة الوظائف المطلوبة لحفظ التعديلات
  console.log("تم حفظ التعديلات: ", { name, phone, email, image });
  setEdit(false);

  const UserInfo = {
    name: name,
    phone: phone,
    email: email,
    image: image,
  };
  axios
    .post("https://dalil.mlmcosmo.com/api/update-profile", UserInfo, {
      headers: {
        Authorization: `Bearer ${token}`, // الهيدر بشكل صحيح
      },
    })
    .then((response) => {
      if (response.data) {
       Swal.fire({
         title: "تمت العملية بنجاح",
         text: "لقد تم حفظ التعديلات بنجاح",
         icon: "success",
         background: "#F9F9F9",
         confirmButtonColor: "#EDB82C",
       });
      } else {
        Swal.fire({
          icon: "error",
          title: "عذرًا...",
          text: "فشل في عملية حفظ التعديلات",
          background: "#F9F9F9",
          confirmButtonColor: "red",
          confirmButtonText: "حسنا",
        });
      }
    })
    .catch((error) => {
      console.error("خطأ في الاتصال بالخادم: ", error);
      alert("حدث خطأ أثناء حفظ التعديلات.");
    });
};


  return (
    <div className="bg-white w-100 shadow-lg rounded p-3">
      <div className="row">
        <div className="col-12 mb-3">
          <div className="name d-flex align-items-center justify-content-between">
            <button onClick={editInfo}>
              {Edit ? "إلغاء" : "تعديل"} <i className="fa fa-edit ms-2"></i>
            </button>
            <div className="d-flex align-items-center flex-column">
              <h2>الاسم الكامل</h2>
              <div className="d-flex align-items-center justify-content-between">
                {Edit ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  <p>{name || "اسم غير متوفر"}</p>
                )}
                <i className="fa fa-user ms-2" style={{ fontSize: "20px" }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="phone d-flex align-items-center justify-content-between">
            <button onClick={editInfo}>
              {Edit ? "إلغاء" : "تعديل"} <i className="fa fa-edit ms-2"></i>
            </button>
            <div className="d-flex align-items-center flex-column">
              <h2 className="text-end w-100">رقم الهاتف</h2>
              <div className="d-flex align-items-center justify-content-between">
                {Edit ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  <p>{phone || "رقم الهاتف غير متوفر"}</p>
                )}
                <i
                  className="fa fa-phone ms-2"
                  style={{ fontSize: "20px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="email d-flex align-items-center justify-content-between">
            <button onClick={editInfo}>
              {Edit ? "إلغاء" : "تعديل"} <i className="fa fa-edit ms-2"></i>
            </button>
            <div className="d-flex align-items-center flex-column">
              <h2 className="text-end w-100">الايميل</h2>
              <div className="d-flex align-items-center justify-content-between">
                {Edit ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  <p>{email || "البريد الإلكتروني غير متوفر"}</p>
                )}
                <i
                  className="fa fa-envelope ms-2"
                  style={{ fontSize: "20px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>

        {/* عرض صورة المستخدم إذا كانت موجودة */}
        {image ? (
          <div className="col-12 mb-3">
            <img
              src={image}
              alt="User"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </div>
        ) : (
          <div className="col-12 mb-3">
            <p>لا توجد صورة</p>
          </div>
        )}

        {/* زر حفظ التعديلات */}
        {Edit && (
          <div className="col-12 mt-3 text-center">
            <button className="btn btn-primary" onClick={handleSave}>
              حفظ التعديلات
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;

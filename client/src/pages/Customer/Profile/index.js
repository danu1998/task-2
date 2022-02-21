import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HeaderCustomer from "../../../components/moleculs/HeaderCustomer";
import Margin from "../../../components/atoms/Margin";
// import { DataProfile } from "./DataProfile";
import { imgBarcode, logoImg } from "../../../assets/images";
import { UserContext } from "../../../context/userContext";
// import { DataCart } from "../Cart/DataCart";
import { API } from "../../../config/api";
import UpdateProfile from "../../../components/moleculs/Modal/UpdateProfile";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  let navigate = useNavigate();
  const [state] = useContext(UserContext);
  const [profile, setProfile] = useState({});

  const handleUpdate = (id) => {
    navigate("/updateprofile/" + profile.id);
  };

  const getProfile = async () => {
    try {
      const response = await API.get("/profiles");
      setProfile(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <HeaderCustomer />
      <Container>
        <Margin />

        <div className="row">
          <div className="col-md-6">
            <h2 className="fw-bold text-danger">My Profile</h2>
            <div className="row mt-5">
              <div className="col-md-4">
                <div>
                  <img src="" alt="img-profile"></img>
                </div>
                <div className="d-grid mt-3">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleUpdate(state.user.id);
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="col-md-8">
                <div>
                  <h4 style={{ color: "#613D2B" }}>Full Name</h4>
                  <p>{state.user.fullName}</p>
                </div>
                <div>
                  <h4 className="mt-3" style={{ color: "#613D2B" }}>
                    Email
                  </h4>
                  <p>{state.user.email}</p>
                </div>
                <div>
                  <h4 className="mt-3" style={{ color: "#613D2B" }}>
                    Phone
                  </h4>
                  <p>{profile.phone}</p>
                </div>
                <div>
                  <h4 className="mt-3" style={{ color: "#613D2B" }}>
                    Gender
                  </h4>
                  <p>{profile.gender}</p>
                </div>
                <div>
                  <h4 className="mt-3" style={{ color: "#613D2B" }}>
                    Address
                  </h4>
                  <p>{profile.address}</p>
                </div>
              </div>
            </div>
            );
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold" style={{ color: "#613D2B" }}>
              My Transaction
            </h2>
            <div className="alert-danger p-4 rounded mt-5">
              <div className="row">
                <div className="col-md-8">
                  <div className="row justify-content-start align-items-center">
                    <div className="col-md-4 mt-3">
                      <div>
                        <img
                          src={profile?.image}
                          alt="img-product"
                          className="img-fluid"
                        ></img>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h5 className="fw-bold text-danger">Name</h5>
                      <div className="d-flex flex-row align-items-center">
                        <p
                          className="fw-bold text-danger"
                          style={{ fontSize: "14px" }}
                        >
                          Saturday
                        </p>
                        <p className="text-danger" style={{ fontSize: "12px" }}>
                          ,5 March 2020
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <p
                          className="fw-bold text-danger"
                          style={{ fontSize: "12px" }}
                        >
                          Toping :
                        </p>
                        <p className="text-danger" style={{ fontSize: "12px" }}>
                          Toping Name
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <p className="text-danger" style={{ fontSize: "12px" }}>
                          Price :
                        </p>
                        <p className="text-danger" style={{ fontSize: "12px" }}>
                          Rp.27000
                        </p>
                      </div>
                    </div>
                  </div>
                  );
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <img src={logoImg} alt="logo-1"></img>
                    </div>
                    <div className="mt-3">
                      <img src={imgBarcode} alt="img-barcode"></img>
                    </div>
                    <div>
                      <p
                        className="px-5 rounded py-1 bg-light mt-3 fw-bold"
                        style={{ color: "#00D1FF", fontSize: "12px" }}
                      >
                        On the wayt
                      </p>
                    </div>
                    <div>
                      <p className="fw-bold" style={{ color: "#974A4A" }}>
                        Sub Total : Rp 69.000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;

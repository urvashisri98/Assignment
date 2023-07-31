import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const goDashboardPage = () => {
    navigate("/dashboard");
  };
  const goHomePage = () => {
    navigate("/homepage");
  };
  const onDetails = () => {
    navigate("/customerDetails");
  };
  const onService=()=>{
    navigate("/services");
  }
  const showWayTo =
    location.pathname === "/homepage" ? "dashboard" : "homepage";
  return (
    <div className="header-container">
      <div className="header-name">
        <label>Pet Veterinary</label>
      </div>
      <div className="dashboard-plus-icon">
        <div
          className="header-button"
          onClick={showWayTo === "dashboard" ? goDashboardPage : goHomePage}
        >
          <label>Way to {showWayTo}</label>
        </div>
        {(location.pathname === "/dashboard" || location.pathname === "/customerDetails"|| location.pathname === "/services") && (
          <>
            <div className="header-button" onClick={() => onDetails()}>
              <label>Details with pet</label>
            </div>
            <div className="header-button" onClick={() => onService()}>
              <label>Services</label>
            </div>
          </>
        )}
        <div className="logout-icon" onClick={() => onLogout()}>
          <label>logout</label>
        </div>
      </div>
    </div>
  );
};

export default Header;

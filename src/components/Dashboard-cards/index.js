import React from "react";
import Icon from "@mui/material/Icon"; 
import { dashboardData, dataArray } from "../../data/Data";
import "./style.css";
import DashboardTable from "../Dashboard-table";
const DashboardCard = () => {
  return (
    <div className="dashboard-card-container">
        <div className="dashboard-inner-container">

      <div className="dashboardcard-inner-container">
        {dashboardData.map((item) => {
          return (
            <div className="dashboardcards">
              <div className="dashboard-icon">
                <Icon sx={{color:"chocolate"}}>{item.icon}</Icon>
              </div>
              <div className="dashboard-name-counting">
                <div className="dashboard-name">
                  <label>{item.section}</label>
                </div>
                <div className="dashboard-counting">
                  <label>{item.value}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <DashboardTable dataArray={dataArray}/>
        </div>
    </div>
  );
};

export default DashboardCard;

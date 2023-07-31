import React from "react";
import { serviceProvider } from "../../data/Data";
import "./style.css";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-inner-container">
        {serviceProvider.map((item) => {
          return (
            <div key={item.id} className="service-cards-item">
              <img src={item.image} alt="" className="image-service" />
              <div className="price-review">
                <label className="services-name">{item.name}</label>
                <label className="review">{item.review} review</label>
                <label>Rs.{item.price}</label>
                <button type="submit" className="quick-shop">Quick Shop</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;

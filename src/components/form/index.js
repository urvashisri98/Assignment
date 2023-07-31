import React, { useState } from "react";
import "./style.css";
const Form = () => {
  const [dataObject, setDataObject] = useState([]);
  const [formdata, setFormData] = useState({
    customerName: "",
    petName: "",
    category: "",
    email: "",
    mobileNo: "",
  });

  const onSubmit = () => {
    console.log("formdata", formdata);
    setDataObject([...dataObject, formdata]);
  };

  return (
    <div className="dashboard-form">
      <div className="form-button">
        <div className="form">
          <div className="form1">
            <div className="customer-name">
              <label className="customer-name-label">Customer Name</label>
              <input
                type="text"
                required
                value={formdata.customerName}
                name="name"
                placeholder="Customer Name"
                className="customer-input-box"
                onChange={(e)=>setFormData({ ...formdata, customerName: e.target.value })}
              />
            </div>
            <div className="email">
              <label className="email-label">Email Id</label>
              <input
                type="email"
                name="name"
                required
                value={formdata.email}
                placeholder="Email id"
                className="email-input-box"
                onChange={(e)=>setFormData({ ...formdata, email: e.target.value })}
              />
            </div>
            <div className="mobile">
              <label className="mobile-label">Mobile Number</label>
              <input
                type="tel"
                name="number"
                required
                maxLength={10}
                value={formdata.mobileNo}
                placeholder="Mobile Number"
                className="mobile-input-box"
                onChange={(e)=>setFormData({ ...formdata, mobileNo: e.target.value })}
              />
            </div>
          </div>
          <div className="form2">
            <div className="pet">
              <label className="pet-label">Pet Name</label>
              <input
                type="text"
                name="name"
                required
                value={formdata.petName}
                placeholder="Pet Name"
                className="pet-input-box"
                onChange={(e)=>setFormData({ ...formdata, petName: e.target.value })}
              />
            </div>
            <div className="category">
              <label className="category-label">Category</label>
              <input
                type="email"
                name="name"
                required
                value={formdata.category}
                placeholder="Category"
                className="category-input-box"
                onChange={(e)=>setFormData({ ...formdata, category: e.target.value })}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="form-submit"
          onClick={() => onSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;

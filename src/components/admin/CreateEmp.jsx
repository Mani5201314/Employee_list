import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CreateEmp.css";

const CreateEmp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    img: "",
    email: "",
    Name: "",
    phone: "",
    designation: "",
    gender: "",
    Course: [], // Initialize Course as an empty array
    CreateData: "", // Add date state
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prevData => {
        if (checked) {
          return { ...prevData, [name]: [...prevData[name], value] };
        } else {
          return {
            ...prevData,
            [name]: prevData[name].filter(Course => Course !== value),
          };
        }
      });
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/Emp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      alert("Employee created successfully!");
      navigate("/adminPortal/EmpList");
    } catch (error) {
      console.error("Error creating employee:", error);
      alert("Failed to create employee. Please try again.");
    }
  };

  const handleBack = () => {
    navigate("/adminPortal/EmpList");
  };

  return (
    <div id="create-emp">
      <h1>Create Employee</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address."
          />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d{10}" // Example for a 10-digit phone number
            title="Please enter a 10-digit phone number"
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Designation:</label>
          <select
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Designation
            </option>
            <option value="Manager">Manager</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Tester">Tester</option>
          </select>
        </div>
        <div className="form-group">
          <label>Courses:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="MCA"
                checked={formData.Course.includes("MCA")}
                onChange={handleChange}
                name="Course"
              />
              MCA
            </label>
            <label>
              <input
                type="checkbox"
                value="BCA"
                checked={formData.Course.includes("BCA")}
                onChange={handleChange}
                name="Course"
              />
              BCA
            </label>
            <label>
              <input
                type="checkbox"
                value="BSC"
                checked={formData.Course.includes("BSC")}
                onChange={handleChange}
                name="Course"
              />
              BSC
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Date:</label> {/* Added label for the date input */}
          <input
            type="date"
            name="CreateData"
            value={formData.CreateData}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" id="submit">
          <input type="submit" value="Submit" />
          <button type="button" onClick={handleBack}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmp;

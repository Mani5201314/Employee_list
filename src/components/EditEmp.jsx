// src/components/EditEmployee.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/EditEmp.css";

const Editemp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    designation: "",
    gender: "",
    Course: [],
    CreateData: "",
    img: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:4000/Emp/${id}`);
        if (!response.ok) throw new Error("Failed to fetch employee");
        const data = await response.json();
        setEmployee(data);
        setFormData({
          ...data,
          Course: data.Course || [], // Ensure Course is an array
        });
      } catch (error) {
        console.error("Failed to fetch employee:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prevData => ({
        ...prevData,
        Course: checked
          ? [...prevData.Course, value]
          : prevData.Course.filter(course => course !== value),
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBack = e => {
    e.preventDefault();
    navigate("/adminPortal/EmpList"); // Navigate to the employee list
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/Emp/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to update employee");
      navigate("/adminPortal/EmpList"); // Redirect to the list page
    } catch (error) {
      console.error("Failed to update employee:", error);
    }
  };

  if (!employee) return <p>Loading...</p>;

  return (
    <div className="EditEmployee">
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d{10}" // Minimum of 10 digits
            title="Phone number must be at least 10 digits and contain no letters."
            placeholder="Enter phone number (at least 10 digits)"
            required
          />
        </div>

        <div>
          <label htmlFor="designation">Designation:</label>
          <select
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          >
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
            <option value="Tester">Tester</option>
          </select>
        </div>
        <div>
          <label>Gender:</label>
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
        <div>
          <label>Course:</label>
          <label>
            <input
              type="checkbox"
              name="Course"
              value="MCA"
              checked={formData.Course.includes("MCA")}
              onChange={handleChange}
            />
            MCA
          </label>
          <label>
            <input
              type="checkbox"
              name="Course"
              value="BCA"
              checked={formData.Course.includes("BCA")}
              onChange={handleChange}
            />
            BCA
          </label>
          <label>
            <input
              type="checkbox"
              name="Course"
              value="BSC"
              checked={formData.Course.includes("BSC")}
              onChange={handleChange}
            />
            BSC
          </label>
        </div>
        <div>
          <label htmlFor="img">Image URL:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Employee</button>
        <button type="button" onClick={handleBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Editemp;

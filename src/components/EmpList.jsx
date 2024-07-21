import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/EmpList.css";

const EmpList = () => {
  const [emp, setEmp] = useState([]);
  const location = useLocation();
  const path = location.pathname.startsWith("/adminPortal");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/Emp");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setEmp(data);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };

    fetchData();
  }, []);

  const editBook = id => {
    const route =`/adminPortal/EditEmp/${id}`;
    navigate(route);
  };

  const deleteFix = async id => {
    try {
      await fetch(`http://localhost:4000/Emp/${id}`, {
        method: "DELETE",
      });
      setEmp(emp.filter(e => e.id !== id)); // Update state to remove deleted item
    } catch (error) {
      console.error("Failed to delete employee:", error);
    }
  };

  return (
    <div className="Emp">
      <h1>Employee List</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emp.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>

              <td>
                <img
                  className="employee-image"
                  src={data.img}
                  alt={data.Name}
                />
              </td>
              <td>{data.Name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.designation}</td>
              <td>{data.gender}</td>
              <td>
                {Array.isArray(data.Course)
                  ? data.Course.join(", ")
                  : data.Course}
              </td>
              <td>{data.CreateData}</td>
              <td>
                <button
                  onClick={() => editBook(data.id)}
                  className="action-button"
                >
                  Edit
                </button>
                {path && (
                  <button
                    onClick={() => deleteFix(data.id)}
                    className="action-button"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpList;

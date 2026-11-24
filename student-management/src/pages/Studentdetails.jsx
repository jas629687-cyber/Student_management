import React from "react";
import { useParams, Link } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  const students = [
    { id: 1, name: "Jasmine", department: "CSE AIML", year: "3rd Year" },
    { id: 2, name: "Harini", department: "CSE", year: "3rd Year" },
    { id: 3, name: "Priya", department: "IT", year: "2nd Year" },
    { id: 4, name: "Anitha", department: "ECE", year: "2nd Year" }
  ];

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return (
      <div>
        <h1>Student Not Found</h1>
        <p>No student exists with ID {id}.</p>
        <Link to="/students" className="view-btn">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="details-card">
      <h1>Student Details</h1>

      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Year:</strong> {student.year}</p>

      <Link to="/students" className="view-btn">
        Back to Students
      </Link>
    </div>
  );
}

export default StudentDetails;
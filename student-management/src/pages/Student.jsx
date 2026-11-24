import React from "react";
import { Link } from "react-router-dom";

function Student() {
  const students = [
    { id: 1, name: "Jasmine", department: "CSE AIML", year: "3rd Year" },
    { id: 2, name: "Harini", department: "CSE", year: "3rd Year" },
    { id: 3, name: "Priya", department: "IT", year: "2nd Year" },
    { id: 4, name: "Anitha", department: "ECE", year: "2nd Year" }
  ];

  return (
    <div>
      <h1>Students List</h1>
      <p>All registered students are listed below.</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.year}</td>
              <td>
                <Link to={`/students/${student.id}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
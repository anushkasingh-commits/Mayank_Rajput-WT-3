


import StudentCard from './components/StudentCard'
import students from './data/StudentData.jsx'
import './App.css'
import { useState } from "react";

function App() {
  const [showPassedOnly, setShowPassedOnly] = useState(false);

  const displayedStudents = showPassedOnly? students.filter((student) => student.marks >= 40): students;

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <div className="summary">
        <h3>Total Students: {students.length}</h3>
      </div>

      <div className="buttons">
        <button onClick={() => setShowPassedOnly(false)}>All Students</button>

        <button onClick={() => setShowPassedOnly(true)}>Passed Students</button>
      </div>

      <div className="student-list">
        {displayedStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;





import students from "../data/StudentData.jsx"

function StudentCard({ student }) {
  const isPassed = student.marks >= 40;

  return (
    <div className="student-card">
      <h2>{student.name}</h2>

      <p>Roll Number:{student.rollNo}</p>

      <p>Branch: {student.branch}
      </p>

      <p>Marks: {student.marks}
      </p>

      <p>Attendance: {student.attendance}%
      </p>

      {isPassed ? (
        <p className="pass">Pass</p>
      ) : (
        <p className="fail">Fail</p>
      )}
    </div>
  );
}

export default StudentCard;
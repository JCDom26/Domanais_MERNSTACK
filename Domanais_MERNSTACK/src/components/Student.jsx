import { Link } from "react-router-dom";

const Student = ({ student }) => {
    return (
        <div>
            <h3>{student.name}</h3>
            <p>Student Number: {student.studentNumber}</p>
            <p>Course: {student.course}</p>
            <Link to={`/students/${student.id}`}>
                View Full Details
            </Link>
        </div>
    );
};

export default Student;
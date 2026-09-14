import { useParams, Link } from "react-router-dom";
import students from "../data/students.json";

const StudentDetails = () => {
    const { id } = useParams();

    const student = students.find(
        (student) => student.id === parseInt(id)
    );

    if (!student) {
        return (
            <div>
                <h1>Student Not Found</h1>
                <Link to="/students">Back to Students</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Student Details</h1>

            <p>Name: {student.name}</p>
            <p>Student Number: {student.studentNumber}</p>
            <p>Course: {student.course}</p>
            <p>Year Level: {student.yearLevel}</p>

            <Link to="/students">
                Back to Students
            </Link>
        </div>
    );
};

export default StudentDetails;
import students from "../data/students.json";
import Student from "../components/Student";

export default function Students() {
    return (
        <div>
            <h1>All Students</h1>
            {students.map((student) => (
                <Student
                    key={student.id}
                    student={student}
                />
            ))}
        </div>
    );
}
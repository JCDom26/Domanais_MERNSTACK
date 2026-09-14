import { Link } from "react-router-dom";


export default function Navbar(){
    return (
        <nav>
            <h2>Student Portal</h2>
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/add-student">Add Student</Link>
        </nav>
    );        
};
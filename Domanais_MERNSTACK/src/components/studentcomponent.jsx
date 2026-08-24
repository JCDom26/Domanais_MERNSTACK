function StudentComponent({name,age,section,studentnum,course}){
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Section: {section}</p>
            <p>Student Number: {studentnum}</p>
            <p>Course: {course}</p> 
        </div>
    )
}
export default StudentComponent;
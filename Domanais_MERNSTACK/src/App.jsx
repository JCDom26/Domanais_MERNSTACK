import StudentComponent from "./components/studentcomponent.jsx";
import SubjectComponent from "./components/subjectcomponent.jsx";

function App(){
  return(
    <div>
      <StudentComponent name="Jesreel Domanais" age={19} section="3-1" studentnum={202400437} course="BSIT" />
      <SubjectComponent subname="Web Development" subcode="IT-201" subdesc="This subject focuses on the development of web applications, including front-end and back-end technologies." />
      <hr></hr>
      <StudentComponent name="Kevin Rei Hellyeah" age={20} section="3-1" studentnum={202403343} course="BSIT" />
      <SubjectComponent subname="Database Management" subcode="IT-202" subdesc="This subject covers the principles and practices of database management systems, including data modeling, SQL, and database design." />
      <hr></hr>
      <StudentComponent name="Thervin Ulanpuso Bandil" age={20} section="3-1" studentnum={202404874} course="BSIT" />
      <SubjectComponent subname="Software Engineering" subcode="IT-203" subdesc="This subject introduces the principles and practices of software engineering, including software design, implementation, and testing." />
    </div>
  )
} 
export default App;
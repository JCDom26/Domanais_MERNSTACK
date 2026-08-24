import StudentComponent from "./components/studentcomponent.jsx";

function App(){
  return(
    <div>
      <StudentComponent name="Jesreel Domanais" age={19} section="3-1" studentnum={202400437} course="BSIT" />
      <hr></hr>
      <StudentComponent name="Kevin Rei Hellyeah" age={20} section="3-1" studentnum={202403343} course="BSIT" />
      <hr></hr>
      <StudentComponent name="Thervin Ulanpuso Bandil" age={20} section="3-1" studentnum={202404874} course="BSIT" />
    </div>
  )
} 
export default App;
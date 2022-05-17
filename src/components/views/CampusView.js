/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import "../css/Campus.css";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div className="campus">
      <h1 className="campusName">{campus.name} 
        <span>
          <Link to={`/editcampus/${campus.id}`}>
            <button className="editButton"> Edit </button>
          </Link>
        </span>
      </h1>
      <p className="text"><span className="label">Address: </span>{campus.address}</p>
      <img className="campusImage" src = {campus.imageUrl}  alt="campus_image" width="500" height="300"></img>
    
      <div className="descriptionContainer">
        <p className="text">{campus.description}</p>
      </div>
      
      <h1>Enrolled Students</h1>
      <p className="numberStudents">Number of Students: <span className="numberStudentsNumber">{campus.students.length}</span></p>
      {campus.students.length === 0 ?
        <p className="text"> No enrolled students </p>
        :
      campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link style={{textDecoration: 'none'}} to={`/student/${student.id}`}>
              <div className="studentLink" >{name}</div>
            </Link>             
          </div>
        );
      })}
      <br/>
    </div>
  );
};

export default CampusView;
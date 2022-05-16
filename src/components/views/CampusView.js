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
    <div>
      <h1>{campus.name}</h1>
      <div className="campusContainer">
      <img src = {campus.imageUrl}  alt="campus_image" width="500" height="300"></img>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      </div>
      {campus.students.length === 0 ?
        <p> No enrolled students </p>
        :
      campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>             
          </div>
        );
      })}
      <Link to={`/editcampus/${campus.id}`}>
        <button> Edit Campus </button>
      </Link>
    </div>
  );
};

export default CampusView;
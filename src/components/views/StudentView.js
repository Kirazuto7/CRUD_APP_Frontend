/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
import "../css/Student.css";
//import { editStudent } from "../../store/actions/actionCreators";

const StudentView = (props) => {
  const { student, deleteStudent } = props;
  if(student === null)
  {
    return (
      <div>
        <p>There are no students.</p>
      </div>
      );
  }

  return (
    <div className="student">
      <div>
          <Link to={`/editstudent/${student.id}`}>
            <button className="editButton">Edit</button>
          </Link>
      </div>
      <br/><br/><br/>
      <h1 style={{color: "#63229A", marginTop: "2%"}}>{student.firstname + " " + student.lastname}</h1>

      <span className="studentImageWrap">
        <img className="studentImage" src={student.imageURL} alt="profilePicture" width="500" height="300"></img>
      </span>
      <br/><br/>
      {student.campus !== null ? 
      
        <Link style={{textDecoration: 'none'}} to={`/campus/${student.campus.id}`}>
            <div className="label">Campus: <span className="campusLink">{student.campus.name}</span></div>
        </Link>
        : 
        <h3>NO CAMPUS</h3> 
      }

      <h3 className="text"><span className="label">Email:</span> {student.email}</h3>
      
      <h3 className="text"><span className="label">GPA:</span> {student.gpa}</h3>

      <button className="deleteButton" onClick={() => deleteStudent(student.id)}>Delete</button>
      
      <hr/>
    </div>
  );
};

export default StudentView;
/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";
import "../css/AllStudents.css";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div className="allStudents">
      <h1 style={{color: "#63229A", marginLeft: '12%'}}>All Students
        <span>
          <Link to={`/newstudent`}>
            <button className="addButton">Add New Student</button>
          </Link>
        </span>

      </h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
              <button className="deleteButton" onClick={() => deleteStudent(student.id)}>Delete</button>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;
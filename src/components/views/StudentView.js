/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
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
/*
details of students
1. student first and last name DONE
2. student campus (and link to campus) DONE
3. student email DONE
4. student profile pic DONE
5. student gpa DONE
*/ 
  return (
    <div>
      
      <h1>{student.firstname + " " + student.lastname}</h1>

      {student.campus !== null ? 
      
        <Link to={`/campus/${student.campus.id}`}>
            <h2>{student.campus.name}</h2>
        </Link>
        : 
        <h3>NO CAMPUS</h3> 
      }

      <h3>email: {student.email}</h3>
      
      <img src={student.imageUrl} alt="profilePicture"/>
      
      <h3>gpa: {student.gpa}</h3>

      <button onClick={() => deleteStudent(student.id)}>Delete</button>
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit</button>
      </Link>
      <hr/>
    </div>
  );
};

export default StudentView;
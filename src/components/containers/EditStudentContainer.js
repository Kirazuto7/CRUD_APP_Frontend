import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { editStudentThunk } from "../../store/thunks";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { EditStudentView } from "../views";
import { Redirect } from 'react-router-dom';

class EditStudentContainer extends Component {
  // Get student data from back-end database
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      campusId: '',
      imageUrl: '',
      gpa: '',
      student: this.props.student,
      allcampus: this.props.allCampuses,
      studentId: this.props.match.params.id 
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.
    
    if(!(this.state.allcampus.map(({id}) => id)).includes(parseInt(this.state.campusId))){
      alert("CampusId is not valid, please enter a valid campusId.")
      this.setState({
        redirect: false
      })
    }
    else{
      const student = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          campusId: this.state.campusId,
          email: this.state.email,
          imageUrl: this.state.imageUrl,
          gpa: this.state.gpa,
          id: this.state.studentId
      };
      
      await this.props.editStudent(student);

      // Update state, and trigger redirect to show the new student
      this.setState({
        firstname: '', 
        lastname: '', 
        campusId: '', 
        email: '',
        imageUrl: '',
        gpa: '',
        redirect: true
      });
    }
  }

  /*
    edits
    1. student first and last name DONE
    2. student campus (and link to campus) DONE
    3. student email DONE
    4. student profile pic DONE
    5. student gpa DONE
  */ 
  // Render Student view by passing student data as props to the corresponding View component
  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.props.match.params.id}`}/>)
    }
    return (
      <div>
        <Header />
        <EditStudentView student={this.props.student} 
        handleChange = {this.handleChange} 
        handleSubmit={this.handleSubmit}
        allCampuses={this.props.allCampuses}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
  };
};

// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};


// Export store-connected container by default
// StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(EditStudentContainer);










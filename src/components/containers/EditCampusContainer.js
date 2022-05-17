import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, fetchStudentThunk } from "../../store/thunks";
import { fetchAllCampusesThunk, fetchCampusThunk } from "../../store/thunks";
import { editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";
import { Redirect } from 'react-router-dom';

class EditCampusContainer extends Component {
    // Get campus data from database
    componentDidMount() {
      //getting campus ID from url
      this.props.fetchCampus(this.props.match.params.id);
      this.props.fetchAllStudents();
      console.log("checking -->"); //testing purposes
      console.log(this.props.campus.students); //testing purposes
    }
  
    constructor(props){
      super(props);
      let campus = this.props.campus
      this.state = {
        campus: campus,
        name: campus.name,
        address: campus.address,
        imageUrl: campus.imageUrl,
        description: campus.description,
        campusId: campus.id, //id of campus we are editing
        redirect: false
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
    
        // let addedStudent = this.props.fetchStudent(this.state.studentId);
        // this.state.studentsArray.push(addedStudent);
        let campus = this.state.campus
        campus.name = this.state.name
        campus.address = this.state.address
        campus.imageUrl = this.state.imageUrl
        campus.description = this.state.description
        
        await this.props.editCampus(campus);
  
        // Update state, and trigger redirect to show the edited campus.
        this.setState({
          name: '',
          address: '',
          imageUrl: '',
          description: '',
          redirect: true
        });
      
    }
  
    // Render Campus view by passing campus data as props to the corresponding View component
    render() {
      if(this.state.redirect) {
        return (<Redirect to={`/campus/${this.props.match.params.id}`}/>)
      }
      return (
        <div>
          <Header />
          <EditCampusView campus={this.props.campus}
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          allStudents={this.props.allStudents}
          />
        </div>
      );
    }
  }
  
  const mapState = (state) => {
    return {
      campus: state.campus,
      allStudents: state.allStudents
    };
  };
  
  // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
  // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
  const mapDispatch = (dispatch) => {
    return {
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
      fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
    };
  };
  
  
  // Export store-connected container by default
  // EditCampusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
  // (and re-read the values when the Store State updates).
  export default connect(mapState, mapDispatch)(EditCampusContainer);
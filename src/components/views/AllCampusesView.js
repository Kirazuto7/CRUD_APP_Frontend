/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/AllCampuses.css";

const AllCampusesView = (props) => {
  const {allCampuses ,deleteCampus} = props;
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
    <div>
        <p className="text">There are no campuses.</p>
        <p className="text">Please add a new campus</p>
        <Link to={`newcampus`}>
          <button>Add New Campus</button>
        </Link>
    </div>
    );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div className="allCampuses">
      <h1 className="pageTitle">All Campuses 
        <span>
          <Link to={`/newcampus`}>
            <button className="addButton">Add New Campus</button>
          </Link>
        </span>
      </h1>
      
      {allCampuses.map((campus) => (
          <div className="campusBox" key={campus.id}>
            <Link to={`/campus/${campus.id}`}>
              <h2>{campus.name}</h2>
            </Link>
            <div className="campusContainer">
              <div className="imageContainer">
                <img className="campusImage" src={campus.imageUrl} alt="campus_image" width="500" height="500"/>
              </div>
              <div className="informationContainer">
                <h3>Campus Id: {campus.id}</h3>
                <p className="text"> <p className="label">Address: </p> {campus.address} </p>
                <p className="text"> <p className="label">Description: </p>{campus.description} </p>
              </div>
            </div>
            <button className="deleteButton" onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
            <br/><br/>
          </div>
      ))}
      <br/>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {allCampuses ,deleteCampus} = props;
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
    <div>
        <p className="Text Styling">There are no campuses.</p>
        <p className="Text Styling">Please add a new campus</p>
        <Link to={`newcampus`}>
          <button>Add New Campus</button>
        </Link>
    </div>
    );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>Campus Id: {campus.id}</h4>
          <img className="Campus Image" src={campus.imageUrl} alt="campus_image" width="500" height="300"/>
          <p> <span className="Address Label">Address: </span> {campus.address}</p>
          <p> <span className="Description Label">Description: </span>{campus.description} </p>
          <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
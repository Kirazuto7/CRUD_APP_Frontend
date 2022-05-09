import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk, fetchAllCampusesThunk } from '../../store/thunks';

class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            campusId: null,
            name: "",
            imageUrl: null,
            address: "",
            description: "",
            redirect: false,
            redirectId: null
        };
    }

    componentDidMount(){
        this.props.fetchAllCampuses()
    }

    componentWillUnmount(){
        this.setState({redirect: false, redirectId: null})
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault(); // Prevent browser reload/refresh after submit

        let campus = {
            campusId: this.props.allCampuses.length + 1, // auto increment the id by adding 1 to the current number of campuses for the new campus
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            address: this.state.address,
            description: this.state.description
        };

        // Add new campus to backend
        let newCampus = await this.props.addCampus(campus);

        // Update the state and show the new campus in the redirect
        this.setState({
            campusId: null,
            name: "",
            imageUrl: null,
            address: "",
            description: "",
            redirect: true,
            redirectId: newCampus.id
        });
    }

    render(){
        if(this.state.redirect){
            return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }

        return(
            <div>
                <Header/>
                <NewCampusView>
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                </NewCampusView>
            </div>
        );    
    }
}

// Get a list of all the campuses when the store state changes
const mapState = (state) => {
    return{
        allCampuses: state.allCampuses,
    };
};

// Dispatch actions to redux store
const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    });
};

export default connect(mapState, mapDispatch)(NewCampusContainer);
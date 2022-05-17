import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

// Create styling for the input form.
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#B19CD9',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#63229A',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditCampusView = (props) => {
  const {handleChange, handleSubmit, campus } = props;
  const classes = useStyles();

  // Render Edited Campus view with an input form
  return (
    <div style={{position: 'relative', top: '58px', width: '100vw'}}>
      <h1 style={{color: '#63229A'}}>{campus.name}</h1>

      <div className={classes.root}>
        <div className={classes.formContainer} id="formBox">
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '25px', color: 'white'}}>
              Edit Campus
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
            <input defaultValue={campus.name} type="text" name="name" onChange ={(e) => handleChange(e)} required/>
            
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
            <input defaultValue={campus.address} type="text" name="address" onChange={(e) => handleChange(e)} required/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Image Url: </label>
            <input defaultValue={campus.imageUrl} type="text" name="imageUrl" onChange={(e) => handleChange(e)} required/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input defaultValue={campus.description} type="text" name="description" onChange={(e) => handleChange(e)} required/>
            <br/>
            <br/>

            <Link to={`/newstudent`}>
              <button style={{backgroundColor:'#63229A', color: 'white'}}>Add New Student</button>
            </Link>

            {/* <p> Need to add a add an exisiting student?</p>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Enter Student ID: </label>
            <input type="text" name="studentId" onChange={(e) => handleChange(e)}/> */}
            <Link to={`/students`}>
              <button style={{backgroundColor:'#63229A', color: 'white', marginLeft: '5px'}}>Add Existing Student</button>
            </Link>

            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default EditCampusView;
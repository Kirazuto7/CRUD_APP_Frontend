import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const EditStudentView = (props) => {
  const {handleChange, handleSubmit, student } = props;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div style={{position: 'relative', top: '58px', width: '100vw'}}>
      <h1 style={{color: '#63229A'}}>{student.firstname + " " + student.lastname}</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '25px', color: 'white'}}>
              Edit Student
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input defaultValue={student.firstname} type="text" name="firstname" onChange ={(e) => handleChange(e)} required/>
            
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input defaultValue={student.lastname} type="text" name="lastname" onChange={(e) => handleChange(e)} required/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
            <input defaultValue={student.campusId} type="number" name="campusId" onChange={(e) => handleChange(e)} required/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Image Url: </label>
            <input defaultValue={student.imageURL} type="text" name="imageURL" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input defaultValue={student.email} type="email" name="email" onChange={(e) => handleChange(e)} required/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input defaultValue={student.gpa} type="number" step="any" min={0.0} max={4.0} name="gpa" onChange={(e) => handleChange(e)} required/>
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

export default EditStudentView;
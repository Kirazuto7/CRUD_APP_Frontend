import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
    formContainer:{
        width: '500px',
        backgroundColor: '#B19CD9',
        borderRadius: '5px',
        margin: 'auto'
    },
    title:{
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none',
    },
    customizeAppBar:{
        backgroundColor: '#11135e',
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

const NewCampusView = (props) => {
    const {handleChange, handleSubmit} = props;
    const classes = useStyles();

    return(
        <div style={{position: 'relative', top: '58px', width: '100vw'}}>
            <h1 style={{color: '#63229A'}}>New Campus</h1>
            <div className = {classes.root}>
                <div className = {classes.formContainer} id ="formBox">

                    <div className = {classes.formTitle}>
                        <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '25px', color: 'white' }}>
                            Add a Campus
                        </Typography>
                    </div>
                    <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
                        <label style={{color: '#11153e', fontWeight: 'bold'}}>Name: </label>
                        <input type="text" name="name" onChange={(e) => handleChange(e)} />
                        <br/>
                        <br/>

                        <label style={{color: '#11153e', fontWeight: 'bold'}}>Address: </label>    
                        <input type="text" name="address" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{color: '#11153e', fontWeight: 'bold'}}>Description: </label>
                        <input type="text" name="description" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                        <br />
                        <br />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewCampusView;
import React from 'react'
import './login-form.css'
import { Link, useNavigate } from 'react-router-dom'
import { Stack, Paper, Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const LogInForm = (props) => {

    const navigate = useNavigate()

    const [logInData, setLogInData] = React.useState({
        workEmail: '',
        password: ''
    })
    const [showPassword, setShowPassword] = React.useState(false)

    const handleChange = (e) => {
        setLogInData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleLogIn = (e) => {
        navigate('/dashboard')
    }

    const handleVisibilityClick = (e) => setShowPassword(prev => !prev)

    return (
            <Paper className='login-form' align='center' sx={{ marginTop: props.margin,width:'40%', minWidth: "300px" , maxWidth: "700px"}} elevation={20} >
                <Stack sx={{ padding: "5px" }} direction='column' spacing={2}>
                    <Typography sx={{ transform: "scale(1,.95)", fontWeight: '700' }} variant='h5'>Log in</Typography>
                    <TextField
                        onChange={handleChange} 
                        value={logInData.workEmail} 
                        name='workEmail' variant='outlined' 
                        color='primary' 
                        placeholder="Email">
                    </TextField>
                    <TextField 
                        type={showPassword? "text" : "password"} 
                        onChange={handleChange} 
                        value={logInData.password} 
                        name='password' 
                        variant='outlined' 
                        color='primary' 
                        placeholder="Password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton onClick={handleVisibilityClick}>
                                        {showPassword? <VisibilityOffIcon/>: <VisibilityIcon/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}>
                    </TextField>
                    <Button onClick={handleLogIn} sx={{ padding: '14px'}} variant='contained' color="primary">Log in</Button>
                    <Typography sx={{ fontWeight: '700' }}><Link to='/sign-up'>Sign Up</Link></Typography>
                    <Typography sx={{ fontWeight: '500', fontSize:'10px'}} variant='caption'>
                        Thanks you for supporting QuickQuote. By being a user you're making the creator's dream come true. Please reach out if you need help or have any questions.
                    </Typography>
                </Stack>
            </Paper>
    )
}

export default LogInForm;
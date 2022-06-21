import React from 'react'
import { Stack, Paper, Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import './sign-in-form.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const SignUpForm = () => {

    const [signUpData, setSignUpData] = React.useState({
        workEmail: '',
        password: ''
    })
    const [showPassword, setShowPassword] = React.useState(false)

    const handleChange = (e) => {
  
        setSignUpData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleVisibilityClick = (e) => setShowPassword(prev => !prev)

    return (
            <Paper sx={{ width:'40%', minWidth: "300px" , maxWidth: "700px"}} elevation={20} className="sign-in-form" >
                <Stack sx={{ padding: "5px" }} direction='column' spacing={2}>
        
                    <Typography sx={{ transform: "scale(1,.95)", fontWeight: '700' }} variant='h5'>Try It For Free!</Typography>
                    <TextField
                        onChange={handleChange} 
                        value={signUpData.workEmail} 
                        name='workEmail' variant='outlined' 
                        color='primary' 
                        placeholder="Work email">
                    </TextField>
                    <TextField 
                        type={showPassword? "text" : "password"} 
                        onChange={handleChange} 
                        value={signUpData.password} 
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
                    <Button sx={{ padding: '14px'}} variant='contained' color="primary">Start Saving Time</Button>
                    <Typography sx={{ fontWeight: '700' }} paragraph={true}>Get full access now!</Typography>
                    <Typography sx={{ fontWeight: '500', fontSize:'10px'}} variant='caption'>
                        By clicking “Start Saving Time” you agree to receive information from Quoted about our services, plus news and offers. You can unsubscribe at any time.
                    </Typography>
                </Stack>
            </Paper>
    )
}

export default SignUpForm;
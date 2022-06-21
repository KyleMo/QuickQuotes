import React from 'react'
import LogInForm from '../../Components/LogInForm/LogInForm.js'
import Navbar from '../../Components/Navbar/Navbar.js'
import { Stack } from '@mui/material'


const LogInPage = () => {
    return (
            <Stack sx={{ height:'100vh'}} justifyContent='flexstart' alignItems='center'> 
                <Navbar />
                <LogInForm margin='40px'/>
            </Stack>
    )
}

export default LogInPage
import React from 'react'
import {AppBar, Stack, IconButton, Button } from '@mui/material'
import ConfirmationPrompt from '../ConfirmationPrompt/ConfirmationPrompt.js'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom'

const DashboardNavbar = ({ toggleSideBar, setFormData }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const [showConfirmPromptBool, setShowConfirmPromptBool] = React.useState(false)
    
    const handleConfirmed = (createNewQuoteBool) => {
        if (createNewQuoteBool){
            setFormData({
                projectName: '',
                projectValue: '',
                projectCustomer: '',
                projectStatus: ''
            })
            setShowConfirmPromptBool(false)
        }
        else {
            setShowConfirmPromptBool(false)
        }
    }

    const handleClick = () => {
        if (location.pathname === '/create-quote'){
            setShowConfirmPromptBool(true)
        } else {
            navigate('/create-quote')
        }

    }

    return (
        <AppBar sx={{ position: 'relative', height: '60px' }}>
            {showConfirmPromptBool ? <ConfirmationPrompt handleConfirmed={handleConfirmed} confirmAction='create a new quote'/> : ''}
            <Stack sx={{ height: '100%'}} direction='row' justifyContent='space-between' alignItems='center'>                
                <IconButton sx={{ marginLeft: '10px'}} onClick={toggleSideBar}>
                    <Stack direction='row' alignItems='center'>
                        <MenuIcon sx={{  }}></MenuIcon>
                    </Stack>
                </IconButton>
                <Button onClick={handleClick} sx={{ marginRight:'10px', height: '70%'}} variant='contained' color='secondary'>Create New Quote</Button>
            </Stack>
        </AppBar>
    )
}

export default DashboardNavbar
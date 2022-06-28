import React from 'react'
import './confirmationPrompt.css'
import { Typography, Button } from '@mui/material'

const ConfirmationPrompt = ({ handleConfirmed, confirmAction }) => {

    const handleClick = (e) => {
        handleConfirmed(e.target.value)
    }

    return(
        <div className='confirmation-prompt'>
            <Typography sx={{ padding: '10px' }} variant='h6' >Are you sure you want to {confirmAction}?</Typography>
            <div className='confirmation-buttons'>
                <Button variant='contained' onClick={handleClick} value={'1'}>Yes</Button>
                <Button variant='contained' onClick={handleClick} value={''}>Cancel</Button>
            </div>
        </div>
    )
}

export default ConfirmationPrompt;
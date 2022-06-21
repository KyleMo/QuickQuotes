
import React, { useContext } from 'react'
import { Stack, AppBar, Box, Typography} from '@mui/material';
import LogInIconText from '../LogInIconText/LogInIconText.js'
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom'
import AppContext from '../../ContextProvider.js'
import './navbar.css'


const Navbar = () => {

    const theme = useTheme()
    const location = useLocation()
    const { userProfile } = useContext(AppContext)
    console.log(userProfile)

    return (
        <AppBar className='navbar' sx={{ maxWidth: "1500px", marginBottom: "20px"}} position='sticky' color='primary'>
            <Stack sx={{ padding: "7px"}} id='navbar-stack' direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography id='logoContainer' variant='h1' fontSize='55px' fontWeight='700'>
                        <Box display='inline'>⚡️</Box>
                        <Box id='logoText' display='inline' sx={{ color: theme.palette.text.main }}>QuickQuote</Box>
                    </Typography>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <Link to='/'>
                            <Typography sx={{padding: '20px', fontWeight: '700', fontSize: '16px', '&:hover': {color: theme.palette.text.secondary, backgroundColor: 'transparent'} }} variant='secondary'>HOME</Typography>
                        </Link>

                        {location.pathname === '/login'?
                        (<Link className='dontDisplay' to='/login'>
                            <LogInIconText />
                        </Link>):
                        (<Link to='/login'>
                            <LogInIconText />
                        </Link>)
                        }
                    </Stack>
            </Stack>
        </AppBar>
    )
}

export default Navbar
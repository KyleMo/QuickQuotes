import {AppBar, Stack, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const DashboardNavbar = ({ toggleSideBar }) => {
    return (
        <AppBar sx={{ position: 'relative', height: '60px' }}>
            <Stack sx={{ height: '100%'}} direction='row' justifyContent='space-between' alignItems='center'>                
                <IconButton onClick={toggleSideBar}>
                    <Stack direction='row' alignItems='center'>
                        <MenuIcon sx={{ marginLeft: '10px' }}></MenuIcon>
                    </Stack>
                </IconButton>
                <Button sx={{ marginRight:'10px', height: '70%'}} variant='contained' color='secondary'>Create New Quote</Button>
            </Stack>
        </AppBar>
    )
}

export default DashboardNavbar
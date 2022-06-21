import { Drawer, Box, ListItem, ListItemButton, ListItemText, List, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import './menuDrawer.css'

const MenuDrawer = ({ appState, toggleSideBar}) => {


    const logout = () => {
        console.log("Logout")
    }

    const drawerMenu = () => (
        <Box
        sx={{ position: 'relative', height:'100%', width: 250 }}
        role="presentation"
        onClick={() => toggleSideBar()}
        >
            <List>
                {['Dashboard', 'Quotes', 'Metrics', 'Drafts'].map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <Link to={`/${text.toLowerCase()}`}>{text}</Link>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Profile', 'Settings'].map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <Link to={`/${text.toLowerCase()}`}>{text}</Link>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <List sx={{width: '100%', position: 'absolute', bottom: 10, padding: 0}}>
                <ListItem sx={{ display: 'flex', padding: 0, justifyContent:'center'}}>
                    <Button onClick={logout} sx={{ width: '95%'}} color='error' variant='contained'>Log out</Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Drawer
            className='menu-drawer' 
            anchor='left'
            open={appState.sideBar}
            onClose={() => toggleSideBar()}
        >
            {drawerMenu('left')}
        </Drawer>
    )
}

export default MenuDrawer
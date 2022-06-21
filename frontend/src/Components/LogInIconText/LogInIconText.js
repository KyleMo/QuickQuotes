import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';

const LogInIconText = () => {

    const theme = useTheme()

    return (
        <>
            <Button sx={{padding: '3px', fontWeight: '700', fontSize: '16px', '&:hover': {color: theme.palette.text.secondary, backgroundColor: 'transparent'} }} variant='secondary'>Log in<LoginIcon></LoginIcon></Button>
        </>

    )
}

export default LogInIconText
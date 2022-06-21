import './homepage.css'
import { Box, Stack, Typography } from '@mui/material';
import SignUpForm from '../../Components/SignUpForm/SignUpForm.js'
import Navbar from '../../Components/Navbar/Navbar.js'
import { useTheme } from '@mui/material/styles';


const Homepage = () => {

    const theme = useTheme()

    return (
        <div className="homepage">
            <Stack direction='column' spacing={3} alignItems='center' textAlign='center'> 
                <Navbar />
                <Stack direction='column' spacing={0} alignItems='center' textAlign='center'>
                    <Typography sx={{ margin: '0', maxWidth: '500px', fontWeight: '600', }} variant="h5">You get the <Box display='inline' color={theme.palette.secondary.main}>job done.</Box></Typography>
                    <Typography sx={{ margin: '0', maxWidth: '400px', fontWeight: '600', }} variant="h3">We ensure you <Box display='inline' color={theme.palette.primary.main}>get paid.</Box></Typography>
                </Stack>
                <SignUpForm />
            </Stack>
        </div>
    )
}

export default Homepage;
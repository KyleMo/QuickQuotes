import { useContext } from 'react'
import AppContext from '../../ContextProvider.js'
import { Paper } from '@mui/material'
import MenuDrawer from '../../Components/MenuDrawer/MenuDrawer.js'
import DashboardNavbar from '../../Components/DashboardNavbar/DashboardNavbar.js'

const MetricsPage = () => {

    const {appState, toggleSideBar} = useContext(AppContext)

    return(
        <Paper sx={{ height: '100vh' }} key={'left'}>
            <DashboardNavbar toggleSideBar={ toggleSideBar }/>
            <MenuDrawer appState={appState} toggleSideBar={toggleSideBar}/>
            <h1>Metrics fro!</h1>
        </Paper>
    )
}

export default MetricsPage
import { useContext } from 'react'
import AppContext from '../../ContextProvider.js'
import { Paper } from '@mui/material';
import MenuDrawer from '../../Components/MenuDrawer/MenuDrawer.js'
import DashboardNavbar from '../../Components/DashboardNavbar/DashboardNavbar.js'

const DashboardPage = () => {

    // use <Rechats />

    // pending quoted revenue - accepted quote revenue this month
    // previous few jobs and metrics associated with them
    // graph showing profit margin across time
    // sent quotes (can be filtered by sent and accepted)
    // sent invoices (outstanding and paid toggle)
    const {appState, toggleSideBar} = useContext(AppContext)

    return (
        <Paper sx={{ height: '100vh' }}>
            <DashboardNavbar toggleSideBar={toggleSideBar} />
            <MenuDrawer toggleSideBar={toggleSideBar} appState={appState}/>
            <h1>Dashboard!</h1>

        </Paper>
    )
}

export default DashboardPage
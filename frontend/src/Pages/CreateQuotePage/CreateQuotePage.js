import { Paper } from '@mui/material';
import React, { useContext } from 'react'
import AppContext from '../../ContextProvider.js'
import DashboardNavbar from '../../Components/DashboardNavbar/DashboardNavbar.js'
import MenuDrawer from '../../Components/MenuDrawer/MenuDrawer.js'
import './createQuotePage.css'



const CreateQuotePage = () => {
    
    //---------------
    //state variables

    const {appState, toggleSideBar} = useContext(AppContext)
    const [formData, setFormData] = React.useState({
        projectName: '',
        projectValue: '',
        projectCustomer: '',
        projectStatus: ''
    })

    //--------------
    //event handlers

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    //----------
    //Component render

    return (
        <Paper sx={{ minHeight: '100vh' }}>
            <DashboardNavbar setFormData={setFormData} toggleSideBar={toggleSideBar} formData={formData}/>
            <MenuDrawer toggleSideBar={toggleSideBar} appState={appState}/>
            <form>
                <h1>New Quote</h1>
                <input type='text' value={formData.projectName} name='projectName' onChange={handleChange} placeholder='Project name' />
                <input type='text' value={formData.projectCustomer} name='projectCustomer' onChange={handleChange} placeholder='Client Name' />
                <input type='text' value={formData.projectValue} name='projectValue' onChange={handleChange} placeholder='$ Value' />
                <select value={formData.projectStatus} name='projectStatus' onChange={handleChange}>
                    <option>Draft</option>
                    <option>Sent</option>
                    <option>Accepted</option>
                    <option>Denied</option>
                </select>
                <button onSubmit={handleSubmit} type='submit'>Submit</button>
            </form>
        </Paper>
    )
}

export default CreateQuotePage
import React, {useState, createContext} from 'react'

const AppContext = createContext()

export const AppProvider = (props) => {

    const [appState, setAppState] = useState({
        userProfile: false,
        userData: {},
        sideBar: false
    })

    const setUserProfile = () => {
        setAppState(prev => ({
            ...prev,
            userProfile: !prev.userProfile
        }))
    }

    const setUserData = (userDataObject) => {
        setAppState(prev => ({
            ...prev,
            userData: userDataObject
        }))
    }

    const toggleSideBar = () => {
        setAppState(prev => ({
            ...prev,
            sideBar: !prev.sideBar
        }))
    }

    return (
        <AppContext.Provider value={{appState, setUserProfile, setUserData, toggleSideBar}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
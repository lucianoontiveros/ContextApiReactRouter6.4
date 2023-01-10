import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"

const LayoutPrivate = () => { 
    return(
        <>
            <Outlet />
        </>
    )
}

export default LayoutPrivate
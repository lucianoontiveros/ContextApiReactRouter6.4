
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"

const LayoutRoot = () => { 
    return(
        <>
            <NavBar/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default LayoutRoot
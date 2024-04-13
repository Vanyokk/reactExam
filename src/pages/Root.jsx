import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const Root = () => {

    useEffect(() => {

        document.title = "SAFQ"

    }, [])

    return (
        <>
        
        

            <Header />

            <Outlet />

        
        
        </>
    )
}

export default Root
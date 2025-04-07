import { Footer } from "../Layout/Footer";
import Header from "../Layout/Header";
import { Outlet } from "react-router-dom"

export function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
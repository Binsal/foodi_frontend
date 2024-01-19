import React from "react";
import { Outlet } from "react-router-dom";

const Main = ()=>{
    return(
        <>
            <nav>Navbar</nav>
            <Outlet/>
            <footer>Footer</footer>
        </>
    )
}

export default Main;
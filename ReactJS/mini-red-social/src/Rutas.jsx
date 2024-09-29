import {Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login"


const Rutas = () => {
    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />

            </Routes>

        
        </BrowserRouter>


    )
}

export default Rutas;
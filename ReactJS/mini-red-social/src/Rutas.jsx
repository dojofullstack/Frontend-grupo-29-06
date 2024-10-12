import {Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"


const Rutas = () => {
    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registro" element={<Register/>} />

            </Routes>

        
        </BrowserRouter>


    )
}

export default Rutas;
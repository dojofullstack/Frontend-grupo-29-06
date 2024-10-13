import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const API_REGISTER = "https://api.dojofullstack.com/api/auth/users/";


const FormRegistro = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState();

    const navigate = useNavigate();


    const registerUser = () => {
        
        setLoading(true);

        const data = {
            "username": username,
            "email": email,
            "password": password
        }

        axios.post(API_REGISTER, data).then((response) => {
            console.log(response.data);
            setLoading(false);

            toast.success('🦄 Usuario regsitrado exitosamente, ya puedes iniciar sesion!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            
            setTimeout(() => navigate("/login"), 3000);
        

        }).catch((error) => {
            setLoading(false);
            console.log(error);

            toast.error('Error al registrar usuario', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });

        })

    }

  return (
    <div className="container flex justify-center my-10">

        <div className="flex gap-3 flex-col items-center justify-center">

                <h1 className="text-2xl font-bold">Registrar Usuario</h1>


            <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
            >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value) }  />
        </label>
        <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
            >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username"  value={username}  onChange={(e) => setUsername(e.target.value) } />
        </label>
        <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
            >
            <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
            />
            </svg>
            <input type="password" className="grow" placeholder="Contrasena"  value={password}  onChange={(e) => setPassword(e.target.value) }/>
        </label>


        <button className="btn btn-accent w-full text-lg" onClick={registerUser} >
            
            {loading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Registrate"
            )}

        </button>

        </div>

   
    </div>
  );
};

const Register = () => {
  return (
    <>
      <Header />

      <FormRegistro/>


      <Footer />
    </>
  );
};

export default Register;
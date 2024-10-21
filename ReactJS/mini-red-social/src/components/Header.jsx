import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../useStore";
import { useNavigate } from "react-router-dom";



const API_POST = "https://api.dojofullstack.com/api-demo/v1/publication/";



const Header = () => {

  const navigate = useNavigate();

  const themeNew = useStore((state) => state.themeNew);
  const changeThemeNew = useStore((state) => state.changeThemeNew);

  const post = useStore((state) => state.post);
  const updatePost = useStore((state) => state.updatePost);

  const isLogin = useStore((state) => state.isLogin);
  const user = useStore((state) => state.user);
  const getProfileInfo = useStore((state) => state.getProfileInfo);
  const closeLogin = useStore((state) => state.closeLogin);



  console.log(isLogin);
  console.log(user);
  // console.log(changeThemeNew);
  
  

  const [buscador, setBuscador] =  useState("");


  const buscarPost = () => {
    axios.get(`${API_POST}?search=${buscador}`).then((res) => {
      console.log(res.data.results);
      // ejcutar callaback

      updatePost(res.data.results);

    })
  }


  useEffect(() => {
    getProfileInfo();
  }, [])



  useEffect(() => {

    if (!isLogin){
      navigate("/login")
    }

  }, [isLogin])




  return (
    <>
      <header  >
        <div className="navbar bg-base-100" style={ {backgroundColor: themeNew } }>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>

          <button className="btn btn-secondary" onClick={() => changeThemeNew("tomato")  }>
            Cambiar ColorTheme
          </button>



          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                value={buscador}
                onChange={(e) => setBuscador(e.target.value)}
                type="text"
                placeholder="Buscar publicacion"
                className="input input-bordered w-24 md:w-auto"
                onKeyDown={(e) => {
                  if (e.code === "Enter"){
                    buscarPost();
                    console.log("buscador...", buscador);
                  }
                } }
              />
            </div>

            
            {isLogin && user &&
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Perfil
                    <span className="badge">{user.username}</span>
                  </a>
                </li>
                <li>
                  <a>Configurar</a>
                </li>
                <li onClick={closeLogin}>
                  <a>Cerrar Sesion</a>
                </li>
              </ul>
            </div>
              } 


          </div>
        </div>
      </header>
    </>
  );
};



export default Header;
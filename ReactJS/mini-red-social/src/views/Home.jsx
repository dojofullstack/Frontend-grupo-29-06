import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Post from "../components/Post";
import { AiFillMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { ThemeContext } from "../Context";

const Menu = () => {
  return (
    <>
      <div className="">
        <ul className="menu bg-base-200 rounded-box w-[300px]">
          <li>
            <a>
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a>
              {" "}
              <MdNotifications /> Notificaciones
            </a>
          </li>
          <li>
            <a>
              <AiFillMessage />
              Mensajes
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};



const Home = () => {

  const {theme, changeTheme} = useContext(ThemeContext);

  const [color, setColor] = useState("");

  // console.log(theme);
  

  return (
    <>
      <Header />

      <input className="input" type="text" placeholder="Color del tema"  value={color} onChange={(e) => setColor(e.target.value)} />
      <button className="btn btn-primary" onClick={() => changeTheme(color)  }>
        Cambiar Tema
      </button>

      <div className="container flex gap-10 w-full" style={ {backgroundColor: theme } } >
        <Menu />

        <Post />
      </div>

      <Footer />
    </>
  );
};

export default Home;

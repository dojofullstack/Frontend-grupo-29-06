import Footer from "../components/Footer";
import Header from "../components/Header";
import Post from "../components/Post";
import { AiFillMessage } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

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
  return (
    <>
      <Header />

      <div className="container flex gap-10 w-full">
        <Menu />

        <Post />
      </div>

      <Footer />
    </>
  );
};

export default Home;

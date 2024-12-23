import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useStore from "../useStore";
import InfiniteScroll from "react-infinite-scroll-component";

const API_POST = "https://api.dojofullstack.com";

const CreatePost = ({ getListPost }) => {
  const [publicacion, setPublicacion] = useState("");

  const [loadingPost, setLoadingPost] = useState(false);

  const createPublication = () => {
    setLoadingPost(true);

    console.log("creando publicacion...");

    const data = {
      title: publicacion,
      content: publicacion,
      author: 1,
    };

    axios
      .post(`${API_POST}/api-demo/v1/publication/`, data)
      .then((response) => {
        console.log(response.data);
        setLoadingPost(false);
        setPublicacion("");
        getListPost();
      })
      .catch((error) => {
        console.log(error);
        setLoadingPost(false);
        setPublicacion("");
      });

    // consumir API CRUD
    // ver nuevos post
  };

  return (
    <>
      <div className="md:w-[80%] w-full">
        <div className="flex gap-3">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <textarea
            className="textarea textarea-accent w-full text-lg"
            placeholder="Crea tu primera publicacion"
            value={publicacion}
            onChange={(e) => setPublicacion(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-end mt-3">
          <button
            className="btn btn-primary text-md"
            onClick={createPublication}
            disabled={loadingPost}
          >
            {loadingPost ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Crear Publicacion"
            )}
          </button>
        </div>
      </div>
    </>
  );
};


const ListPost = ({nexPage, getListPost, loadingPost, setLoadingPost, setNexPage }) => {

  const post = useStore((state) => state.post);


  const [publicacionEdit, setPublicacionEdit] = useState("");
  const [publicacionIdEdit, setPublicacionIdEdit] = useState(null);

  // const [hasMore, sethasMore] = useState(true);


  const addPost = useStore((state) => state.addPost);

  

  

  console.log("post", post);
  

  const updatePostApi = (idPost) => {
    console.log("actualizado publicacion...");
    setLoadingPost(true);

    const data = {
      title: publicacionEdit,
      content: publicacionEdit,
      author: 1,
    };

    axios
      .put(`${API_POST}/api-demo/v1/publication/${idPost}`, data)
      .then((response) => {
        console.log(response.data);

        setPublicacionIdEdit(null);
        setPublicacionEdit("");
        getListPost();
        setLoadingPost(false);
      })
      .catch((error) => {
        console.log(error);
        setPublicacionIdEdit(null);
        setPublicacionEdit("");
        setLoadingPost(false);
      });
  };


  const removePost = (idPost) => {

    console.log("elimiando publicacion...");
    setLoadingPost(true);

    axios
      .delete(`${API_POST}/api-demo/v1/publication/${idPost}`)
      .then((response) => {
        console.log(response.data);
        getListPost();
        setLoadingPost(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingPost(false);
      });

  }




  const fetchMoreData = () => {
    setLoadingPost(true);
    console.log("nexPage", nexPage);
    
    axios.get(nexPage).then((response) => {
      console.log("mas data",response.data.results);
      addPost(response.data.results);
      setNexPage(response.data.next);
      setLoadingPost(false);
    });
  };



  return (


    <InfiniteScroll
    dataLength={post?.length || 0} // Número de elementos que actualmente tienes
    next={fetchMoreData} // Función que desencadena la carga de más datos
    hasMore={Boolean(nexPage)} // Indica si hay más datos para cargar
    loader={<span className="loading loading-ball loading-lg"></span>} // Indicador de carga
    endMessage={<></>}
  >
  
    <div className={`${loadingPost ? "skeleton": ""}`}>
      {post?.map((item, index) => (
        <div
          className={"card bg-info text-dark w-full my-2 flex-row items-center p-3 " + `${loadingPost ? "skeleton": ""}`}
          key={index}
        >
          <div className="avatar online block">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <div className="card-body">
            {publicacionIdEdit === item.id ? (
              <textarea
                className="textarea textarea-accent w-full text-lg"
                value={publicacionEdit}
                onChange={(e) => setPublicacionEdit(e.target.value)}
              ></textarea>
            ) : (
              <p className="text-lg py-3 font-bold"> {item.content}</p>
            )}

            <div className="card-actions justify-between">
              <span className="text-sm">
                {" "}
                {moment(item.created).format("MMMM Do YYYY, h:mm:ss a")}{" "}
              </span>

              <div>
                {publicacionIdEdit === item.id ? (
                  <button
                    className="btn btn-sm"
                    onClick={() => {
                      console.log("callback api update");
                      updatePostApi(item.id);
                    }}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    className="btn btn-sm"
                    onClick={() => {
                      setPublicacionIdEdit(item.id);
                      setPublicacionEdit(item.content);
                    }}
                  >
                    Editar
                  </button>
                )}

                <button className="btn btn-sm mx-3" onClick={() => removePost(item.id)} >
                  <FaTrashAlt className="text-error" />
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>


  </InfiniteScroll>

 
  );
};


const Post = () => {

  // const [post, setPost] = useState([]);

  const [loadingPost, setLoadingPost] = useState(false);

  const post = useStore((state) => state.post);
  const updatePost = useStore((state) => state.updatePost);

  const [nexPage, setNexPage] = useState(null);


  const getListPost = () => {
    setLoadingPost(true);
    axios.get(`${API_POST}/api-demo/v1/publication/?page_size=5`).then((response) => {
      // console.log(response.data.results);
      // setPost(response.data.results);
      updatePost(response.data.results);
      setNexPage(response.data.next);
      setLoadingPost(false);
    });
  };

  useEffect(getListPost, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <CreatePost getListPost={getListPost} loadingPost={loadingPost}  />

        <ListPost setNexPage={setNexPage}  nexPage={nexPage} post={post} loadingPost={loadingPost}  setLoadingPost={setLoadingPost}  getListPost={getListPost} />
      </div>
    </>
  );
};

export default Post;

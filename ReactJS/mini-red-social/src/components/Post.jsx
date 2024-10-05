import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";

const API_POST = "https://api.dojofullstack.com";

const CreatePost = ({getListPost}) => {
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

const ListPost = ({ post, getListPost }) => {

  const [publicacionEdit, setPublicacionEdit] = useState("");

  const [publicacionIdEdit, setPublicacionIdEdit] = useState(null);

  

  const updatePostApi = (idPost) => {

    console.log("actualizado publicacion...");

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
        // setLoadingPost(false);
      })
      .catch((error) => {
        console.log(error);
        setPublicacionIdEdit(null);
        setPublicacionEdit("");
        // setLoadingPost(false);
      });


  }



  return (
    <>
      {post?.map((item, index) => (
        <div className="card bg-info text-dark w-full my-2 flex-row items-center p-3" key={index} >
          
          <div className="avatar online block">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <div className="card-body">

            
      {
          publicacionIdEdit ===  item.id ? 
            <textarea
            className="textarea textarea-accent w-full text-lg"
            value={publicacionEdit}
            onChange={(e) => setPublicacionEdit(e.target.value)}>
            </textarea> :
          <p className="text-lg py-3 font-bold"> {item.content}</p>
        }

            <div className="card-actions justify-between">
              <span className="text-sm"> {moment(item.created).format('MMMM Do YYYY, h:mm:ss a')}  </span>

     {
        publicacionIdEdit ===  item.id ?
               <button className="btn btn-sm" onClick={()  => {
                    console.log("callback api update");
                    updatePostApi(item.id);
                    
              } }>
                Guardar
              </button> :
          <button className="btn btn-sm" onClick={()  => {
            setPublicacionIdEdit(item.id);
            setPublicacionEdit(item.content);
            } }>
            Editar
          </button>
}



              

            </div>
          </div>
        </div>
      ))}
    </>
  );
};




const Post = () => {
  const [post, setPost] = useState([]);

  const getListPost = () => {
    axios.get(`${API_POST}/api-demo/v1/publication/`).then((response) => {
      console.log(response.data);
      setPost(response.data.reverse());
    });
  };

  useEffect(getListPost, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <CreatePost  getListPost={getListPost}/>

        <ListPost post={post} getListPost={getListPost}  />
      </div>
    </>
  );
};

export default Post;

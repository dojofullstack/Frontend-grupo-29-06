import { useState } from "react";

const CreatePost = () => {

    const [publicacion,  setPublicacion] = useState("");



    const createPublication = () => {

        console.log("creando publicacion...");

        console.log(publicacion);


        // consumir API CRUD
        // ver nuevos post

    }



  return (
    <>
      <div className="md:w-[70%] w-full">
        <div className="flex gap-3">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <textarea
            className="textarea textarea-accent w-full"
            placeholder="Crea tu primera publicacion"
            value={publicacion}
            onChange={(e) => setPublicacion(e.target.value) }
          ></textarea>
        </div>

        <div className="flex justify-end mt-3">
          <button className="btn btn-primary text-md" onClick={createPublication}>Crear Publicacion</button>
        </div>
      </div>
    </>
  );
};

const ListPost = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <CreatePost />

        <ListPost />
      </div>
    </>
  );
};

export default Post;

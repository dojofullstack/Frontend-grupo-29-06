import { create } from "zustand";


const changeThemeNew = (set, color) => {

    set( (state) => ({themeNew: color}) );

}


const updatePost = (set, data) => {

    set( (state) => ({post: data}) );

}



const useStore = create( (set, get) => (
    {
        themeNew: "dark",
        changeThemeNew: (color) => changeThemeNew(set, color),
        user: null,
        isLogin: false,
        post: null,
        updatePost: (data) => updatePost(set, data)
    }
) )


export default useStore;
import axios from "axios";
import { create } from "zustand";


const changeThemeNew = (set, color) => {

    set( (state) => ({themeNew: color}) );

}


const updatePost = (set, data) => {
    set( (state) => ({post: data}) );
}



const getRefreshToken = () => {

    const API = "https://api.dojofullstack.com/api/auth/jwt/refresh/";
    const refresh = localStorage.getItem("refresh");

    if (refresh){
        axios.post(API, { "refresh":  refresh}).then((res) => {
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
        }).catch((error) => {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
        })
    }

}


const closeLogin = (set) => {
    set({
        user: null,
        isLogin: false,
    })

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
}


// get profile info

const getProfileInfo = (set) => {

    const API_USER_ME = "https://api.dojofullstack.com/api/auth/users/me/";
    // axios.defaults.headers.common.Authorization = "Bearer {token}";
    const tokenStr = localStorage.getItem("access");
    
    if (tokenStr){
        axios.get(API_USER_ME, { headers: {"Authorization" : `Bearer ${tokenStr}`} } ).then((response => {
            console.log("info", response.data);
            set({user: response.data, isLogin: true });
        })).catch(error => {
            
            if (error.status === 401){
                console.log("renovar token");
                getRefreshToken();
            };
            
        })
    }
 
}




const updateStateLogin = (set, isLogin) => {
    set({isLogin: isLogin})
}


const addPost = (set, data) => {
    console.log("adgregando", data);
    // const previewPost = get().post;
    // console.log(previewPost);
    
    set((state) => ({ post: [...state.post, ...data] }))
}



const useStore = create( (set, get) => (
    {
        themeNew: "dark",
        changeThemeNew: (color) => changeThemeNew(set, color),
        user: null,
        isLogin: false,
        post: null,
        updatePost: (data) => updatePost(set, data),
        getProfileInfo: () => getProfileInfo(set),
        updateStateLogin: (isLogin) => updateStateLogin(set, isLogin),
        closeLogin: () => closeLogin(set),
        addPost: (data) => addPost(set, data)
    }
) )


export default useStore;
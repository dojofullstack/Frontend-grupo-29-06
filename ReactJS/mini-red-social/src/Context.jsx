import { createContext, useState } from "react";



export const ThemeContext = createContext();


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = (color) => {
        setTheme( (theme) => color);
    }

    
    return (
        <>
            <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme }} >

                {children}

            </ThemeContext.Provider>

        </>
    )
}



export default ThemeProvider;
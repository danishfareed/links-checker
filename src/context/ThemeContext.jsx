import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('');
    const colorTheme = theme === 'fantasy' ? 'synthwave' :  'fantasy';
    
    
    useEffect(() => {
        const themeName = localStorage.getItem('theme');
        if (themeName) {
            setTheme(themeName);
        }else{
            setTheme('fantasy');
        }
    }, [])

    
    const setAppTheme = () =>{
        setTheme(colorTheme);
    }
    return(
        <ThemeContext.Provider value={{
            setAppTheme,
            theme,
            colorTheme
        }}> {children}</ThemeContext.Provider> 
    )
}


export default ThemeContext;
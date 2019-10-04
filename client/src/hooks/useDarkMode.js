
import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage.js';


export const useDarkMode =  () => {
    //key and then initial value - value is false until toggled
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  
    useEffect(() => {
        //checking to see if value from local storage is true or false
        if(darkMode === true) {
            document.body.classList.add('dark-mode')
        }
        else {
           document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

  
    return [darkMode, setDarkMode];
  } 
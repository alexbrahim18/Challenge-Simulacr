import React from "react";
import { createContext } from "react";

export const Context = createContext();


const Provider =(props)=>{
    
    function mayus(str){
        return str.charAt(0).toUpperCase()+ str.slice(1);
     }

    
    
    return(
            <Context.Provider value={{mayus}}>
                {props.children}
            </Context.Provider>
        )
}

export default Provider ;
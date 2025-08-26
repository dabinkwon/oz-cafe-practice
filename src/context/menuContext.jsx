import { createContext, useContext } from "react";
import data from "../assets/data";

const MenuContext = createContext()

export const MenuProvider = ({children})=>{
    return(
        <MenuContext.Provider value={{menu:data.menu}}>
            {children}
        </MenuContext.Provider>
    )
}
export const useMenu = ()=>{
    const context = useContext(MenuContext);
    if(!context){
        throw new Error("useMenu훅은 MenuProvider 안에서만 사용할 수 있습니다!")
    }
    return context
}
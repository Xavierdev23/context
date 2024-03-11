import { ReactNode, createContext, useState } from "react";

type GlobalContextType = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const initialContext: GlobalContextType = {
    isOpen: false,
    setIsOpen: () => {}
}


type GlobalStorageProps = {
    children: ReactNode,
}

export const GlobalContext = createContext<GlobalContextType>(initialContext);

export const GlobalStorage = ({ children }: GlobalStorageProps)=> {
        const [isOpen, setIsOpen] = useState(false);
    return(
        <GlobalContext.Provider value={{isOpen, setIsOpen}}>
                {children}
        </GlobalContext.Provider>
    )
}
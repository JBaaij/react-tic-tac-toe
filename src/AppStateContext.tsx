import {createContext, FC, ReactComponentElement, ReactElement, useState} from "react";

const AppStateContext = createContext({
    selectedChoice: 1 | 2,
    setSelectedChoice: (choice: 1 | 2) => {},
    userName: '',
})

const AppStateProvider = ({children}: {children: ReactComponentElement<any>}) => {
    const [selectedChoice, setSelectedChoice] = useState(1);
    const [userName, setUserName] = useState('');

    return (
        <AppStateContext.Provider value={{selectedChoice, setSelectedChoice, userName}}>
            {children}
        </AppStateContext.Provider>
    )
}

export {AppStateContext, AppStateProvider}

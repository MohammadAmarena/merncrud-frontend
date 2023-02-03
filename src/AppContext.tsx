import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { IBook } from './interfaces.js'

interface IAppContext {
    books: IBook[];
}

interface IAppProvider {
    children: React.ReactNode;
}

const backendUrl = import.meta.env.VITE_BACKEND_URL

export const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const [books, setBooks] = useState<IBook[]>([])

    useEffect(() => {
        (async () => {
            setBooks((await axios.get(`${backendUrl}/books`)).data)
        })()
    },[])

    return (
        <AppContext.Provider value={{ books }}>
            {children}
        </AppContext.Provider>
    )
}
import { useContext } from "react"
import { AppContext } from '../AppContext.js'

export const Books = () => {
    const { books } = useContext(AppContext)
    return (
        <>
            <h1>Books Page</h1>
            <div className="books">{books.length}</div>
        </>
    )
}
import { useContext } from "react"
import { AppContext } from '../AppContext.js'
import { IBook } from '../interfaces.js'

export const Books = () => {
    const { books } = useContext(AppContext)
    return (
        <>
            <div className="books">
                {books.map((book: IBook) => {
                    return (
                        <div className="book">
                            <img src={book.imageUrl} alt="" />
                            <div className="bookBody">
                                <h3 className="title">{book.title}</h3>
                                <p className="description">{book.description}</p>
                                <div className="lang">{book.language.charAt(0).toUpperCase() + book.language.slice(1)}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
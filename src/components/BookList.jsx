import { useState } from "react";
import Book from "./Book";



export default function BookList (){
    const [books, setBooks]= useState([])
    const getBooks = function () {
        fetch("http://localhost:3001/books").then(response => response.json()).then(jsonData =>  setBooks(jsonData))
        return books
    }

return (
    <>
    <button className="bg-slate-500 shadow-md shadow-current flex justify-self-center text-center mt-4 px-20 py-5 hover:shadow-inner hover:shadow-current transition-shadow" onClick={getBooks}>Обновить</button>
    <div className="mt-6 flex flex-row align-middle justify-center text-center flex-wrap">
    {books.map(book => <div className="shadow-lg shadow-current border-2 border-slate-800 w-15 h-60 self-center px-6 py-3 m-3" key={book.id}>{Book(book.title, book.author, book.status)}</div>)}
    </div>
    </>
)
}
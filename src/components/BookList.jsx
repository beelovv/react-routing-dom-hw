import { useEffect, useState } from "react";
import Book from "./Book";



export default function BookList (){
    const [books, setBooks]= useState([])
    const [filterHeadder, setFilterHeadder] = useState("Все книги")
    const [loading, setLoading] = useState(false)
    const getBooks = function (type) {
        setLoading(true)
        setTimeout(()=>{fetch(`http://localhost:3001/${type}`).then(response => response.json()).then(jsonData =>  setBooks(jsonData));
        if (type == "allBooks"){setFilterHeadder("Все книги")}
        else if (type == "presentBooks"){setFilterHeadder("Книги в процессе чтения")}
        else if (type == "futureBooks"){setFilterHeadder("В планах на будущее")}
        else if (type == "pastBooks"){setFilterHeadder("Прочитанные книги")}
        setLoading(false)
        return books}, 1000)
    }
useEffect(()=>{getBooks("allBooks")},[]) 
return (
    loading? <p className="flex justify-self-center mt-10 font-mono text-2xl border-4 border-slate-500 px-4 py-1 bg-yellow-500 text-slate-800 shadow-inner shadow-current">Загрузка...</p> :
    <>
    <div className="flex flex-row justify-center align-middle flex-wrap">
    <button className="w-72 mx-4 align-middle font-serif text-xl bg-slate-500 shadow-md shadow-current  justify-self-center text-center mt-4 px-20 py-5 hover:shadow-inner hover:shadow-current" onClick={()=>getBooks("allBooks")}>Все книги</button>
    <button className="w-72 mx-4 align-middle font-serif text-xl bg-slate-500 shadow-md shadow-current  justify-self-center text-center mt-4 px-20 py-5 hover:shadow-inner hover:shadow-current" onClick={()=>getBooks("pastBooks")}>Прочитано</button>
    <button className="w-72 mx-4 align-middle font-serif text-xl bg-slate-500 shadow-md shadow-current  justify-self-center text-center mt-4 px-20 py-5 hover:shadow-inner hover:shadow-current" onClick={()=>getBooks("presentBooks")}>Читаю</button>
    <button className="w-72 mx-4 align-middle font-serif text-xl bg-slate-500 shadow-md shadow-current  justify-self-center text-center mt-4 px-20 py-5 hover:shadow-inner hover:shadow-current" onClick={()=>getBooks("futureBooks")}>Буду Читать</button>
    </div>
    <p1 className="flex justify-self-center mt-10 font-mono text-2xl border-4 border-slate-500 px-4 py-1 bg-yellow-500 text-slate-800 shadow-inner shadow-current" >{filterHeadder}</p1>
    <div className="mt-6 flex flex-row align-middle justify-center text-center flex-wrap">
    {books.map(book => <div className="shadow-lg shadow-current border-2 border-slate-800 w-60 h-64 max-w-60 max-h-64 self-center px-6 py-3 m-3" key={book.id}>{Book(book.title, book.author, book.status)}</div>)}
    </div>
    </>
)
}
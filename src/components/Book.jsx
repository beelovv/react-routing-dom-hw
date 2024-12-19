export default function Book (name, author, status){
    
    return(
    <>
    <h1 className="">Название:</h1>
    <h2 className="shadow-inner shadow-current px-2 mt-3 font-medium h-12 max-h-12 ">{name}</h2>
    <h1 className="mt-3">Автор:</h1>
    <h2 className="shadow-inner shadow-current px-2 mt-3 font-medium">{author}</h2>
    <h1 className="mt-3">Статус:</h1>
    <h2 className=" shadow-inner shadow-current mt-3">{status}</h2>
    </>
    )
}
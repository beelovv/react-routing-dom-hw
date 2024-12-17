export default function Book (name, author, status){
    
    return(
    <>
    <h1 className="">Название:</h1>
    <h2 className="shadow-inner shadow-current px-2 mt-3 font-medium">{name}</h2>
    <h1 className="mt-3">Автор:</h1>
    <h2 className="shadow-inner shadow-current px-2 mt-3 font-medium">{author}</h2>
    <h1 className="mt-3">Статус:</h1>
    <select name="status font-medium" className="shadow-inner shadow-current mt-3">
        <option value="default">{status}</option>
        <option value="value1">Читаю</option>
        <option value="value2">Буду читать</option>
        <option value="value3">Прочитано</option>
    </select>
    </>
    )
}
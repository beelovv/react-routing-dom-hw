export default function CreateBook (){
    return (
        <>
        <h1 className="my-5  text-center align-middle font-semibold text-2xl">Добавить книгу</h1>
        <form className="text-center align-middle justify-center items-center flex flex-col mt-10 border-8 w-min p-10 border-slate-800 place-self-center" action="submit">
        <label for="bookName"> Название книги </label>
        <input id="bookName" className="border-2 border-slate-800 text-center" type="text" name="Book Name" />
        
        <label for="autor"> Автор </label>
        <input id="autor" className="border-2 border-slate-800 text-center" type="text" name="Author" />
        
        <label> 
        <fieldset className="border-2 border-slate-800">
    <legend className="px-2">Статус:</legend>
    <div className="flex flex-col">
    <label className="px-2" for="Choice1">Читаю</label>
    <input className="mb-2" type="radio" id="Choice1" name="Status" value="inProgress" />
      
    <label className="border-t-2 border-slate-800 pt-2 px-2" for="Choice2">Буду читать</label>
    <input className="mb-2" type="radio" id="Choice2" name="Status" value="inFuture" />
     
    <label className="border-t-2 border-slate-800 pt-2 px-2" for="Choice3">Прочитано</label>
    <input className="mb-2" type="radio" id="Choice3" name="Status" value="done" />
    
    </div>
  </fieldset>
        </label>
        <label> 
        <input  className="border-2 border-slate-800 px-2 py-0.5 mt-5 shadow shadow-current hover:shadow-lg" type="submit" name="Добавить книгу"/>
        </label>
        </form>
        </>
    )
}
export default function CreateBook (){
    return (
        <>
        <form action="submit">
        <label> 
        <input type="text" name="Book Name" />
        </label>
        <label> 
        <input type="text" name="Author" />
        </label>
        <label> 
        <input id="bookStatus" type="text" name="Status" list="status"  />
        <details id="bookStatus">
            <option value="Прочитано"></option>
            <option value="Читаю сейчас"></option>
            <option value="Буду читать"></option>
        </details>
        </label>
        <label> 
        <input type="submit" name="Добавить книгу"/>
        </label>
        </form>
        </>
    )
}
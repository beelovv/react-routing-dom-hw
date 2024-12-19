import { useState } from "react"
import axios from 'axios';


export default function CreateBook (){

    const [formData, setFormData] = useState({
        id: Math.random()*(10000-4)+4,
        title: '',
        author: '',
        status: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/allBooks', formData);
            if(formData.status == "Читаю") {await axios.post('http://localhost:3001/presentBooks', formData)} 
            else if (formData.status == "Буду читать") {await axios.post('http://localhost:3001/futureBooks', formData)} 
            else if (formData.status == "Прочитано") {await axios.post('http://localhost:3001/pastBooks', formData)}
            console.log('Form data submitted successfully:', response.data);
            alert ("Книга успешно добавлена!")
          } catch (error) {
            console.error('Error submitting form data:', error);
            alert("Упс... что-то пошло не так...")
          }
        };
      
    
    return (
        <>
        <h1 className="my-5  text-center align-middle font-semibold text-2xl">Добавить книгу</h1>
        <form className="text-center align-middle justify-center items-center flex flex-col mt-10 border-8 w-min p-10 border-slate-800 place-self-center" onSubmit={handleSubmit}>

        <label for="bookName"> Название книги </label>
        <input id="bookName" className="border-2 border-slate-800 text-center" type="text" name="title" value={formData.title} onChange={handleChange}/>
        
        <label for="author"> Автор </label>
        <input id="author" className="border-2 border-slate-800 text-center" type="text" name="author" value={formData.author} onChange={handleChange}/>
        
        <label for="status"> Статус </label>
        <select id="status" name="status"  onChange={handleChange} value={formData.status} className="border-2 border-slate-800">    
    <option className="mb-2" type="radio" id="Choice1"  name="status">Читаю</option>
    <option className="mb-2" type="radio" id="Choice2"  name="status">Буду читать</option>
    <option className="mb-2" type="radio" id="Choice3"  name="status">Прочитано</option>
  </select>
        <label> 
        <input  className="border-2 border-slate-800 px-2 py-0.5 mt-5 shadow shadow-current hover:shadow-lg" type="submit" name="Добавить книгу"/>
        </label>
        </form>
        </>
    )
};
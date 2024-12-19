import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <header className='bg-slate-800 text-white justify-around flex py-6'>
            <NavLink to="/" className={({isActive})=> isActive? "font-mono shadow shadow-yellow-500 hover:shadow-lg border-2 border-yellow-500  py-2 px-8": "font-mono shadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8"}>Главная</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive? "font-mono shadow shadow-yellow-500 hover:shadow-lg border-2 border-yellow-500  py-2 px-8": " font-monoshadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8"}>О Сайте</NavLink>
            <NavLink to="/bookList" className={({isActive})=> isActive? "font-mono shadow shadow-yellow-500 hover:shadow-lg border-2 border-yellow-500  py-2 px-8": "font-mono shadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8"}>Список Книг</NavLink>
            <NavLink to="/addBook" className={({isActive})=> isActive? "font-mono shadow shadow-yellow-500 hover:shadow-lg border-2 border-yellow-500  py-2 px-8": "font-mono shadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8"}>Добавить книгу</NavLink>
        </header>
        <Outlet />
        </>
    )
}

export {Layout}
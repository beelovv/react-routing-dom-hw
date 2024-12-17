import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <>
        <header className='bg-slate-800 text-white justify-around flex py-6'>
            <Link className='shadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8' to="/">Main</Link>
            <Link className='shadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8' to="/about">About</Link>
            <Link className='shadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8' to="/bookList">Book List</Link>
            <Link className='shadow shadow-white hover:shadow-lg border-2 border-white  py-2 px-8' to="/addBook">Add Book</Link>
        </header>
        <Outlet />
        </>
    )
}

export {Layout}
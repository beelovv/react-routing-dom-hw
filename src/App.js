import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import {Routes, Route, Link} from 'react-router-dom';
import { Layout } from "./components/Layout";
import "./index.css"
function App() {
  return(
    <>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="bookList" element={<BookList />} />
        <Route path="addBook" element={<CreateBook />} />
        <Route path="*" element={<Main />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;

import Nav from './componnets/Nav/Nav';
import { Routes, Route } from 'react-router-dom'
import Blog from './componnets/Blog/Blog';
import Home from './componnets/Home';
import AllBook from './componnets/AllBook/AllBook';
import { Provider } from 'react-redux';
import store from './mainredux/store';
import AddBlog from "./componnets/AddBlog/AddBlog";


function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='books' element={<AllBook></AllBook>}></Route>
          <Route path='Blog' element={<Blog></Blog>}></Route>
          <Route path='AddBlog' element={<AddBlog></AddBlog>} ></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;



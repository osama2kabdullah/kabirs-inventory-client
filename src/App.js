import './App.css';
import Header from './pages/header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Footer from './pages/Footer';
import ProductDetail from './pages/Home/InstockProducts/ProductDetail';
import Login from './pages/login/Login';
import Register from './pages/login/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manageproducts/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

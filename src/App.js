import './App.css';
import Header from './pages/header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Footer from './pages/Footer';
import ProductDetail from './pages/Home/InstockProducts/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='//manageproducts/:productId' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

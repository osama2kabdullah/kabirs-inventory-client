import './App.css';
import Header from './pages/header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Productes from './Productes';
import AddProduct from "./AddProduct"; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productes" element={<Productes />} />
          <Route path='/add-product' element={<AddProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

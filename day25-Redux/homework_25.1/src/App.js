import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LayoutComp from './Components/layout';
import Profile from './Components/profile';
import Card from './Components/card';
import Product from './Components/product';

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<LayoutComp />}>
        <Route index element={<Profile />} />
        <Route path = "card" element={<Card />} />
        <Route path = "product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;

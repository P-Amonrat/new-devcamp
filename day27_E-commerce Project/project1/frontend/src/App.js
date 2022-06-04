import './App.css';
import LayoutComp from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import UserContextProvider from './components/userContext';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';

function App() {

  return (
    <div>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<LayoutComp/>}>
          <Route index element={<ProductList/>}/>
          <Route path="/" element={<EditProduct />} />
        </Route>
      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;

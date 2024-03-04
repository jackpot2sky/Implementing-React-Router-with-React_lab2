import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import CustomerCare from './Components/CustomerCare/CustomerCare';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path= '/' element={<Services/>}/>
      <Route path= '/products' element={<Products/>}/>
      <Route path= '/customers' element={<CustomerCare/>}/>
    </Routes>
  );
}

export default App;

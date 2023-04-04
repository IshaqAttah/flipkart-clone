import './App.css';
import './Style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Footer from './components/Footer';
// import MegaNav from './components/MegaNav';
import FurnitureShop from './components/pages/FurnitureShop';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import ApiCallsProvider from './components/context/ApiCallsContext';
import Admin from './components/pages/Admin'; 
import OrderSuccess from './components/pages/OrderSuccess';

function App() {
  return (

    <ApiCallsProvider>
        <BrowserRouter>
        <div className="App">

          {/* <Navigation /> */}
          {/* <MegaNav/> */}


          <Routes>

            <Route element={<Home />} path='/' />
            <Route element={<FurnitureShop />} path='/furniture' />
            <Route element={<Product />} path='/product/:id' />
            <Route element={<Cart />} path='/cart' />
            <Route element={<Login />} path='/login' />
            <Route element={<Admin />} path='/admin' /> 
            <Route element={<OrderSuccess />} path='/success' /> 

          </Routes>
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </ApiCallsProvider>
    
  )
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from './context/CartContex';
import UINavbar from './component/UI/Navbar';
import Footer from './component/UI/Footer';
import Home from './component/modules/home/Home';
import Cart from './component/modules/Cart/Cart';
import Login from './component/modules/login/Login';
import Register from './component/modules/Register/Register';
import PayComponent from './component/modules/Payment/Pay';
import Sucess from './component/modules/Sucess/Sucess';
function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <UINavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/pay' element={<PayComponent />} />
            <Route path='/Sucess' element={<Sucess />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;

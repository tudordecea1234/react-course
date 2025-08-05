import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/HomePage.jsx'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import './App.css'
import { OrdersPage } from './pages/orders/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCartItems(response.data);
    };
    getCartItems();

  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cartItems={cartItems} />} />
      <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />
      <Route path="orders" element={<OrdersPage cartItems={cartItems} />} />
      <Route path="tracking" element={<TrackingPage cartItems={cartItems} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

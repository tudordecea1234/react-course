import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage.jsx'
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import './App.css'
import { OrdersPage } from './pages/OrdersPage.jsx';
import { TrackingPage } from './pages/TrackingPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCartItems(response.data);
      })
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cartItems={cartItems}/>} />
      <Route path="checkout" element={<CheckoutPage cartItems={cartItems}/>} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

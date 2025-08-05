import axios from 'axios'
import { useEffect, useState } from 'react';
import './HomePage.css'
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './ProductsGrid.jsx';

export function HomePage({ cartItems }) {
    // fetch('http://localhost:3000/api/products')
    //     .then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         console.log(data);
    //     })
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data);
            })
    }, []);

    return (
        <>
            <Header cart={cartItems}/>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    )
}
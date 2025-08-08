import axios from 'axios'
import { use, useEffect, useState } from 'react';
import './HomePage.css'
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './ProductsGrid.jsx';
import { useSearchParams } from 'react-router';

export function HomePage({ cartItems, loadCart }) {
    // fetch('http://localhost:3000/api/products')
    //     .then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         console.log(data);
    //     })
    const [products, setProducts] = useState([]);
    const [searchParams]=useSearchParams();
    const search= searchParams.get('search');

    useEffect(() => {
        const getHomeData = async () => {
            const urlPath = search ? `/api/products?search=${search}` : '/api/products';
            const response = await axios.get(urlPath)
            setProducts(response.data);
        }
        getHomeData();
    }, [search]);

    return (
        <>
            <Header cart={cartItems} />
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    )
}
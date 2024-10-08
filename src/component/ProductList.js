import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import { ClipLoader } from 'react-spinners';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchProducts(page);
    }, [page]);


    const fetchProducts = useCallback(async (page) => {
        setLoading(true);
        const limit = 10;
        const skip = (page - 1) * limit;

        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await response.json();
            const newProducts = data.products;
            console.log('nextProducts10:::', newProducts);
            if (page === 1) {
                setProducts(newProducts);
            } else {
                setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            }

        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setTimeout(() => setLoading(false), 10000);
        }
    }, []);



    const handleScroll = () => {
        if (loading) return;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight >= scrollHeight - 100) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    return (
        <div className="product-list">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <h1 style={{color:'black'}}>Data not found</h1>
            )}

            {loading && (
                <div className="spinner-container">
                    <ClipLoader size={50} color={"blue"} loading={loading} />
                </div>
            )}
        </div>
    );
};

export default ProductList;

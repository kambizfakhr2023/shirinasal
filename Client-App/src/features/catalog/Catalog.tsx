import { Product } from "../../app/models/Product";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";


export default function Catalog() {
    //const [products, setProducts] = useState(
    //    [{ name: 'Product1', price: 20000 },
    //    { name: 'Product2', price: 45200 },
    //        { name: 'Product3', price: 85000 },])
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/api/Products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
   
    return (
        <>
            <ProductsList products={products} />
        </>
    );
}
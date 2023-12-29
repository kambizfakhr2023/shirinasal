import { Grid } from "@mui/material"
import { Product } from "../../app/models/Product"
import ProductCard from "./ProductCard"

interface Props{
    products: Product[]
}
export default function ProductsList({products }:Props) {
    return (
        <Grid container spacing={4} justifyContent="space-evenly">
            {products.map((product) => (
                <Grid key={product.id} item xs={3}>
                    <ProductCard  product={product} />
                </Grid>
            ))}
        </Grid>
    )
}
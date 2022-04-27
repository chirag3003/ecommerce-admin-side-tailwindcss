import { useContext, useState, useEffect } from "react";
import ProductCard from "@/ProductCard";
import Auth from "@helpers/Auth";

export default function ListProducts() {
    const [products, setProducts] = useState([]);

    const auth = useContext(Auth);

    useEffect(() => {
        auth.Axios.get("/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

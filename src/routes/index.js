import Home from "@/Home"
import ListProducts from "@/Products/ListProducts";

import {HOME, LIST_PRODUCTS, PRODUCT_PAGE} from "./path"
import ProductPage from "@/Products/ProductPage";


export default [
    {
        route: HOME,
        component: Home
    },
    {
        route:LIST_PRODUCTS,
        component:ListProducts
    },
    {
        route: PRODUCT_PAGE,
        component: ProductPage,
    }
]
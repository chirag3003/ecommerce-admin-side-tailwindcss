import Home from "@/Home";
import ListProducts from "@/Products/ListProducts";
import ProductPage from "@/Products/ProductPage";
import StockList from "@/Products/StockList";

import {
    CREATE_PRODUCT, GALLERY,
    HOME,
    LIST_PRODUCTS, ORDERS,
    PRODUCT_PAGE,
    STOCK_LIST,
} from "./path";
import Gallery from "@/Gallery";
import Orders from "@/Orders";

export default [
    {
        route: HOME,
        component: Home,
    },
    {
        route: LIST_PRODUCTS,
        component: ListProducts,
    },
    {
        route: PRODUCT_PAGE,
        component: ProductPage,
    },
    {
        route: CREATE_PRODUCT,
        component: ProductPage,
        props: {
            create: true,
        },
    },
    {
        route: STOCK_LIST,
        component: StockList,
    },
    {
        route: GALLERY,
        component: Gallery
    },
    {
        route:ORDERS,
        component:Orders
    }
];

import Home from "@/Home";
import ListProducts from "@/Products/ListProducts";
import ProductPage from "@/Products/ProductPage";
import StockList from "@/Products/StockList";

import {
    CREATE_PRODUCT,
    HOME,
    LIST_PRODUCTS,
    PRODUCT_PAGE,
    STOCK_LIST,
} from "./path";

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
];

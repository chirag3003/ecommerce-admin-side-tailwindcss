import React from "react";
import { HomeIcon,PhotographIcon } from "@heroicons/react/outline";
import {CREATE_PRODUCT, GALLERY, HOME, LIST_PRODUCTS, STOCK_LIST} from "@routes/path";
import { Box, List, PlusCircle } from "react-feather";

export default [
    { name: "Dashboard", href: HOME, icon: HomeIcon, current: true },
    {
        name: "Products",
        icon: Box,
        current: false,
        list: [
            {
                name: "List Products",
                href: LIST_PRODUCTS,
                icon: Box,
                current: false,
            },
            {
                name: "Add Product",
                href: CREATE_PRODUCT,
                icon: PlusCircle,
                current: false,
            },
            {
                name: "Stock List",
                href: STOCK_LIST,
                icon: List,
            },
        ],
    },
    {name:"Gallery", href:GALLERY,icon:PhotographIcon }
];

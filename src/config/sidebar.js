import React from "react"
import {
    HomeIcon,
} from '@heroicons/react/outline'
import {HOME, LIST_PRODUCTS} from '@routes/path'
import { Box } from "react-feather"

export default [
    { name: 'Dashboard', href: HOME, icon: HomeIcon, current: true },
    {
        name: 'Products', icon: Box, current: false, list: [
            { name: 'List Products', href: LIST_PRODUCTS, icon: Box, current: false },
        ]
    }
]
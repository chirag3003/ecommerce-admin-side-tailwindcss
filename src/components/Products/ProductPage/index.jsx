import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { LIST_PRODUCTS } from "@routes/path";
import ImageGallery from "@/Products/ProductPage/ImageGallery";
import Reviews from "@/Products/ProductPage/Reviews";
import { PlusIcon } from "@heroicons/react/outline";
import { Minus } from "react-feather";
import Axios from "@helpers/Axios";
const productData = {
    title: "Basic Tee 6-Pack",
    price: "192",
    images: [
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
            alt: "Model wearing plain black basic tee.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
            alt: "Model wearing plain gray basic tee.",
        },
        {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
            alt: "Model wearing plain white basic tee.",
        },
    ],
    sizes: [
        { name: "XXS", inStock: false, stock: 0 },
        { name: "XS", inStock: true, stock: 1 },
        { name: "S", inStock: true, stock: 1 },
        { name: "M", inStock: true, stock: 1 },
        { name: "L", inStock: true, stock: 1 },
        { name: "XL", inStock: true, stock: 1 },
        { name: "2XL", inStock: true, stock: 1 },
        { name: "3XL", inStock: true, stock: 1 },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    slug: "",
};
const createProductData = {
    title: "",
    price: "",
    images: [],
    sizes: [
        { name: "XXS", inStock: false, stock: 0 },
        { name: "XS", inStock: false, stock: 0 },
        { name: "S", inStock: false, stock: 0 },
        {
            name: "M",
            inStock: false,
            stock: 0,
        },
        { name: "L", inStock: false, stock: 0 },
        { name: "XL", inStock: false, stock: 0 },
        { name: "2XL", inStock: false, stock: 0 },
        {
            name: "3XL",
            inStock: false,
            stock: 0,
        },
    ],
    description: "",
    highlights: [""],
    details: "",
    slug: "",
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ProductPage({ create }) {
    const [product, setProduct] = useState(
        create ? createProductData : productData
    );
    const [selectedSize, setSelectedSize] = useState({
        name: "",
        inStock: false,
        stock: 0,
        index: -1,
    });

    // Highlights Event Handlers
    function addHighlight() {
        setProduct({
            ...product,
            highlights: [...product.highlights, ""],
        });
    }

    function removeHighlight(index) {
        return () =>
            setProduct({
                ...product,
                highlights: product.highlights.filter((val, i) => {
                    return i !== index;
                }),
            });
    }

    function updateHighlight(index) {
        return (evt) => {
            const { value } = evt.target;
            let newHighlights = [...product.highlights];
            newHighlights[index] = value;
            setProduct({
                ...product,
                highlights: newHighlights,
            });
        };
    }

    //Size Event Handlers
    function changeSize(evt) {
        let index = Number(evt.target.dataset.index);
        setSelectedSize({ ...product.sizes[index], index });
    }
    function changeSizeStock(evt) {
        let stock = Number(evt.target.value);
        let newSizes = [...product.sizes];
        newSizes[selectedSize.index].stock = stock;
        if (stock < 1) newSizes[selectedSize.index].inStock = false;
        else newSizes[selectedSize.index].inStock = true;
        setProduct({
            ...product,
            sizes: newSizes,
        });
        setSelectedSize({
            ...selectedSize,
            stock: stock,
        });
    }

    function changeInput(evt) {
        const { name, value } = evt.target;
        setProduct({
            ...product,
            [name]: value,
        });
    }

    //Image Event Handlers
    function setImage(index, url) {
        let images = product.images;
        images[index] = {
            src: url,
        };
        setProduct({
            ...product,
            images,
        });
    }

    //Api related functions
    function AddProduct() {
        Axios.get("/", (res) => console.log(res));
    }
    function UpdateProduct() {
        Axios.get("/", (res) => console.log(res));
    }

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav
                    className={
                        "max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 "
                    }
                >
                    <a href={LIST_PRODUCTS}>
                        <button
                            className={"hover:bg-gray-100 p-2 rounded-full"}
                        >
                            <XIcon className={"text-black w-6 h-6"} />
                        </button>
                    </a>
                </nav>

                {/* Image gallery */}
                <ImageGallery images={product.images} setImage={setImage} />
                {/* Product info */}
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <input
                            onChange={changeInput}
                            type="text"
                            name="name"
                            className="w-full border-gray-300 rounded-md shadow text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
                            value={product.title}
                        />
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <div>
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Price
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">
                                        ₹
                                    </span>
                                </div>
                                <input
                                    onChange={changeInput}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="0.00"
                                    aria-describedby="price-currency"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span
                                        className="text-gray-500 sm:text-sm"
                                        id="price-currency"
                                    >
                                        INR
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Reviews */}
                        <Reviews reviews={reviews} />

                        <div className="mt-10">
                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm text-gray-900 font-medium">
                                        Size
                                    </h3>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Size guide
                                    </a>
                                </div>

                                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 mt-2">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            className={classNames(
                                                size.name === selectedSize.name
                                                    ? "text-indigo-600 font-bold"
                                                    : "",
                                                size.inStock ? "border" : "",
                                                " border-indigo-500  shadow bg-gray-100 -inset-px rounded-md  w-full h-20"
                                            )}
                                            aria-hidden="true"
                                            onClick={changeSize}
                                            data-index={index}
                                        >
                                            {size.name}
                                        </button>
                                    ))}
                                </div>
                                {selectedSize.name !== "" && (
                                    <div className="stock">
                                        <label
                                            htmlFor="stock"
                                            className="block text-sm font-medium text-gray-700 mt-4"
                                        >
                                            Stock
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                onChange={changeSizeStock}
                                                value={selectedSize.stock}
                                                type="number"
                                                min={0}
                                                name="stock"
                                                id="stock"
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                placeholder="stock"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="slug">
                                <label
                                    htmlFor="slug"
                                    className="block text-sm font-medium text-gray-700 mt-4"
                                >
                                    Slug
                                </label>
                                <div className="mt-1">
                                    <input
                                        onChange={changeInput}
                                        value={product.slug}
                                        type="text"
                                        name="slug"
                                        id="slug"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Slug"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={create ? AddProduct : UpdateProduct}
                            >
                                {create ? "Add Product" : "Update"}
                            </button>
                        </div>
                    </div>

                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>
                            <label
                                htmlFor="description"
                                className="text-md font-medium text-gray-900"
                            >
                                Description
                            </label>
                            <div className="space-y-6 mt-2 ">
                                <textarea
                                    rows={4}
                                    name="description"
                                    id="description"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    defaultValue={product.description}
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <div className="flex align-middle justify-between">
                                <h3 className="text-md font-medium text-gray-900">
                                    Highlights
                                </h3>
                                <button
                                    onClick={addHighlight}
                                    className={
                                        "hover:bg-gray-100 p-2 rounded-full"
                                    }
                                >
                                    <PlusIcon
                                        className={"text-black w-6 h-6"}
                                    />
                                </button>
                            </div>

                            <div className="mt-4">
                                <ul
                                    role="list"
                                    className="pl-4 list-disc text-sm space-y-2"
                                >
                                    {product.highlights.map(
                                        (highlight, index) => (
                                            <div
                                                key={index}
                                                className={
                                                    "flex justify-between align-middle p-2"
                                                }
                                            >
                                                <li className="flex-1 text-gray-400">
                                                    <input
                                                        onChange={updateHighlight(
                                                            index
                                                        )}
                                                        className="w-full text-gray-600 p-1 focus:outline-none"
                                                        value={highlight}
                                                    />
                                                </li>
                                                <button
                                                    onClick={removeHighlight(
                                                        index
                                                    )}
                                                    className={
                                                        "hover:bg-red-300 p-2 rounded-full"
                                                    }
                                                >
                                                    <Minus
                                                        className={
                                                            "text-black w-4 h-4   "
                                                        }
                                                    />
                                                </button>
                                            </div>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="sr-only">Details</h2>

                            <label
                                htmlFor="details"
                                className="text-md font-medium text-gray-900"
                            >
                                Details
                            </label>
                            <div className="space-y-6 mt-2">
                                <textarea
                                    rows={4}
                                    name="details"
                                    id="details"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    defaultValue={product.details}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

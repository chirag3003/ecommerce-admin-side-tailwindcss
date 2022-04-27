import React from "react";

function ProductCard({ product }) {
    return (
        <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-72 lg:h-80">
                <img
                    src={product.images[0] ? product.images[0] : null}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                    <a href={`/products/${product.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-base font-medium text-gray-900">
                        {product.price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

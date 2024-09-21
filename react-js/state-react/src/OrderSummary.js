import {useState} from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

const cartProducts = [
    {
        id: 1,
        title: "Basic Tee",
        href: "#",
        price: "$32.00",
        color: "Black",
        size: "Large",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 2,
        title: "Basic Tee",
        href: "#",
        price: "$32.00",
        color: "Sienna",
        size: "Large",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-02.jpg",
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
];
const shipping = 5;

// Make it possible to delete products from order summary using the trash button
// Bonus: Display the correct subtotal and total
export default function OrderSummary() {
    const [arrOrder, setArrOrder] = useState(
        cartProducts.map(product => {
            let {price} = product;
            price = Number(price.replace("$", ""));
            return {
                ...product,
                price: price
            };
        })
    );
    const subTotal = arrOrder.reduce(
        (sum, product) => sum + product.price,
        0,
    );
    const total = subTotal > 0 ? subTotal + shipping : 0;

    return (
        <div className="max-w-sm py-8 mx-auto">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                    {arrOrder.map((product) => (
                        <li key={product.id} className="flex px-4 py-6 sm:px-6">
                            <div className="flex-shrink-0">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-20 rounded-md"
                                />
                            </div>

                            <div className="ml-6 flex flex-1 flex-col">
                                <div className="flex">
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-sm">
                                            <a
                                                href={product.href}
                                                className="font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                {product.title}
                                            </a>
                                        </h4>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.color}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.size}
                                        </p>
                                    </div>

                                    <div className="ml-4 flow-root flex-shrink-0">
                                        <button
                                            type="button"
                                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                                        >
                                            <span className="sr-only">
                                                Remove
                                            </span>
                                            <TrashIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                onClick={() =>{
                                                    setArrOrder(
                                                        arrOrder.filter(productOrder => productOrder.id !== product.id)
                                                    );
                                                }}
                                            />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-1 items-end justify-between pt-2">
                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                        {`$${product.price.toFixed(2)}`}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex items-center justify-between">
                        <dt className="text-sm">Subtotal</dt>
                        <dd className="text-sm font-medium text-gray-900">
                            {`$${subTotal.toFixed(2)}`}
                        </dd>
                    </div>
                    <div className="flex items-center justify-between">
                        <dt className="text-sm">Shipping</dt>
                        <dd className="text-sm font-medium text-gray-900">
                            {`$${shipping.toFixed(2)}`}
                        </dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <dt className="text-base font-medium">Total</dt>
                        <dd className="text-base font-medium text-gray-900">
                            {`$${total.toFixed(2)}`}
                        </dd>
                    </div>
                </dl>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <button
                        type="submit"
                        className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                        Confirm order
                    </button>
                </div>
            </div>
        </div>
    )
}

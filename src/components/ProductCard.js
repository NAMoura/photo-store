import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { toast } from "react-hot-toast";

export default function ProductCard({ product, index }) {

    const { addItem } = useShoppingCart()

    function onAddToCart(event) {
        event.preventDefault()
        const id = toast.loading("Adding 1 item...")
        addItem(product)
        toast.success(`${product.name} added`, { id })
    }

  return (
    <Link
      href={`/products/${product.id}`}
      className="border-2 rounded-md group overflow-hidden hover:shadow-lg"
    >
      <div className="relative w-full h-64">
        <Image
          priority={index === 0}
          src={product.image}
          alt={product.name}
          fill
          sizes="100%"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="p-6 bg-white">
        <p className="font-semibold text-lg">{product.name}</p>
        <Rating />
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-500">Price</p>
            <p className="text-large font-semibold">
              {formatCurrencyString({ value: product.price, currency: "EUR" })}
            </p>
          </div>
          <button onClick={onAddToCart} className="border rounded-lg py-1 px-4  border-lime-500 bg-lime-500 hover:bg-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white disabled:opacity-50 disabled:cursor-not-allowed">Add to cart</button>
        </div>
      </div>
    </Link>
  );
}

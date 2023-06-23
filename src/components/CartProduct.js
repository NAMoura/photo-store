import Image from "next/image";
import Link from "next/link";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function CartProduct({ product }) {
  return (
    <div className="flex flex-col md:flex-row  justify-between space-x-3 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4 bg-white">
      <Link
        href={`/products/${product.id}`}
        className="flex items-center space-x-3 group"
      >
        <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="font-semibold text-lg group-hover:underline">
          {product.name}
        </p>
      </Link>

      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <button
            disabled={product.quantity <= 1}
            className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500"
          >
            <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
          <p className="font-semibold text-xl">{product.quantity}</p>
          <button className="p-1 rounded-md hover:bg-green-100 hover:text-green-500">
            <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
        </div>
        <p className="font-semibold text-xl ml-10">
          <XMarkIcon className="hidden w-4 h-4 text-gray-500 sm:inline-flex mr-4 mb-1" />
          {product.formattedPrice}
        </p>
        <button className="ml-4 hover:text-red-500">
          <XCircleIcon className="w-6 h-6 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity"/>
        </button>
        
      </div>
    </div>
  );
}

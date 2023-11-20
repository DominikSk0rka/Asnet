"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { GiShoppingCart } from "react-icons/gi"

const CartCount = () => {
    const {cartTotalQty} = useCart();
    const router = useRouter();
    return ( <div className="relative cursor-pointer" 
    onClick={() => router.push("/cart")}>

    <div className="text-5xl flex flex-center">
        <GiShoppingCart/>
    </div>

    <span className="absolute top-[-2px] left-[33px] bg-amber-600 text-white h-5 w-5 rounded-full flex justify-center text-sm">
        {cartTotalQty}
    </span>

    </div> );
}
 
export default CartCount;
"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";


interface SetQtyProps{

    cartProduct: CartProductType;

}
const quantity: React.FC<SetQtyProps> = ({
    cartProduct,
}) => {
    return  <div className="flex gap-8 items-center">
    
         <div className="flex gap-4 items-center text-base">
            <div>{cartProduct.quantity}</div>
         </div>
    </div>;
}
export default quantity;
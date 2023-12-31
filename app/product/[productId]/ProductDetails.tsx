"use client";

import { useCallback, useEffect, useState } from "react";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/products/Button";
import ProductImage from "@/app/components/products/ProductImage";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";



interface ProductDetailsProps{
    product: any;
};


export type CartProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    selectedImg: SelectedImgType;
    quantity:number;
    price: number;

};

export type SelectedImgType = {
    color: string;
    colorCode: string;
    image: string;
};


const Horizontal = () =>{
    return <hr className="w-[30% mt-2 mb-2]"/>;
};



//--------------------------------------Start-----------------------------------
const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {
    
    const {handleAddProductToCart, cartProducts} = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: {...product.images[0]},
    quantity: 1,
    price: product.price,
    });

    const router = useRouter();
  console.log(cartProducts);

  //--------------------------------------czy item jest w koszyku------------------------------------
  useEffect(()=>{
    setIsProductInCart(false);
    if(cartProducts){
        const existingIndex = cartProducts.findIndex((item)=>item.id === product.id);
        if(existingIndex > -1){
            setIsProductInCart(true);
        }
    }
},[cartProducts])
    
//--------------------------------Colors/Images----------------------------------------------
const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCartProduct((prev) => {
        return {...prev,selectedImg: value}
    });
}, [cartProduct.selectedImg]
);

//--------------------------------------return-----------------------------------
    return ( 

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <ProductImage 
                     cartProduct={cartProduct}
                     product={product} 
                     handleColorSelect={handleColorSelect}/>

            <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>

                    <Horizontal/>
                        <div className="text-justify">{product.description}</div>
                    <Horizontal/>


                    <Horizontal/>
                        <div>
                            <span className="font-semibold">Kategoria:</span> 
                            {product.category}
                        </div>
                        
                        <div>
                            <span className="font-semibold">Marka:</span> {product.brand}
                        </div>

                        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                            {product.inStock ? 'Dostępny' : 'Niedostepny'}
                        </div>
                    <Horizontal/>
                    
                    {isProductInCart ? ( 
                        <>
                        <p className="mb-2 text-slate-500 flex items-center gap-1">
                        <MdCheckCircle className="text-teal-400" size={20}/>
                             <span>Produkt dodany do koszyka</span>
                        </p>

                            <div>
                                <Button label="Zobacz Koszyk" outline onClick={()=>{
                                    router.push('/cart');}}/>
                            </div>
                        </> 
                    ):( 
                    <>
                        <SetQuantity 
                                cartProduct={cartProduct}
                                />
                        <Horizontal/>

                        <div>
                            <Button 
                            label="Dodaj Do Koszyka"
                            onClick={() => handleAddProductToCart(cartProduct)}
                            />
                        </div>
                    </>)}
                         
            </div>
        </div>  

    );}
 
export default ProductDetails;
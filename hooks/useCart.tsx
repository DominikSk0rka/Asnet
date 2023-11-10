import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import {toast} from 'react-hot-toast';

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleClearCart: () => void;

};


export const CartContext = createContext<CartContextType | null >(null);


interface Props{
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);




    

//------------------------------------po odswieżeniu pobiera item z localstorage----------------------------------------------------
    useEffect(() => {
        const cartItems: any = localStorage.getItem("eShopCartItems");
        const  cProducts: CartProductType[] | null = JSON.parse(cartItems);
        setCartProducts(cProducts);
    }, []);

//----------------------------------------------------------------------------------------
    const handleAddProductToCart = useCallback((product: CartProductType)=>{
        setCartProducts((prev)=>{
             
            let updatedCart;
            if(prev){
                updatedCart = [...prev, product];
            }else{
                updatedCart =[product];
            }
            toast.success("Produkt dodany do koszyka");
            localStorage.setItem("eShopCartItems", JSON.
            stringify(updatedCart));
            return updatedCart;
        });
    }, []);
//----------------------------------------------------------------------------------------
    const handleRemoveProductFromCart = useCallback((
        product: CartProductType
        )=>{
        if(cartProducts){
            const fillteredProducts = cartProducts.filter
            ((item)=>{
                return item.id !== product.id;
            });
            setCartProducts(fillteredProducts);
            toast.success("Usunięto pomyślnie");
            localStorage.setItem("eShopCartItems", JSON.
            stringify(fillteredProducts)
            );
        }
    }, 
    [cartProducts]
    );


//----------------------------------Usuwanie wszystkiego z koszyka------------------------------------------------
    const handleClearCart = useCallback(()=>{
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem("eShopCartItems", JSON.
            stringify(null));
    },[cartProducts]);



    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleClearCart,
    };

    return <CartContext.Provider value={value} {...props}/>;
};

export const useCart = () =>{
   const context = useContext(CartContext);
   if(context == null) {
    throw new Error("useCart must be used within a CartContextProvider")
}
return context;

}
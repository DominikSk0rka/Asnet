"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
//--------------------------Gdy nic nie ma w koszyku------------------------------------------
const CartClient = () => {
    const {cartProducts} = useCart()
    if(!cartProducts || cartProducts.length ==0){
        return(
            <div className="flex flex-col items-center">
                <div className="text-2xl">Twój koszyk jest pusty</div>
                <div>
                    <Link href={"/"} className="
                    text-slate-500 flex items-center gap-1 mt-2
                    ">
                        <MdArrowBack/>
                    <span>Zacznyij kupować</span>
                    </Link>
                </div>
            </div>
        )
    }
//-----------------------------------Gdy coś jest----------------------------------


    return ( <div>
        <Heading title="Koszyk" center/>
        <div className="grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        mt-8">
            <div className="col-span-2 justify-self-start">PRODUKT</div>
            <div className="justify-self-center">CENA</div>
            <div className="justify-self-center">ILOŚĆ</div>
            <div className="justify-self-end">KOSZT</div>
        </div>



        <div>
            {cartProducts && cartProducts.map((item)=>{
                return <ItemContent key={item.id} item={item}/>;
            })}
        </div>




        <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
            <div className="w-[90px]">
                <Button label="Wyczyść koszyk" onClick={()=>{}} small outline/>
            </div>


            <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex justify-between w-full text-base font-semibold">
                    <span>Suma</span>
                    <span>1000PLN</span>
                    </div>
                    <p className="text-slate-500">Podatki i wysyłka obliczone przy kupnie</p>
                <Button label="Kup" onClick={() => {
                }}/>


               <Link href={"/"} className="
                    text-slate-500 flex items-center gap-1 mt-2
                    ">
                        <MdArrowBack/>
                    <span>Kontynuj kupowanie</span>
                    </Link>
            </div>
        </div>
    </div> );
}
 
export default CartClient;
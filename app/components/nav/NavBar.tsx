import Link from "next/link";
import Container from "../Container";

import {Teko} from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";

const teko = Teko({subsets: ['latin'], weight: ["500"]})

const NavBar = async() => {


    const currentUser = await getCurrentUser();
  


    return ( 
    <div className="
    sticky
    top-0
    w-full
    bg-slate-200
    z-30
    shadow-sm
    "
    >
       
        <div className="py-4 border-b-[1] ">
            <Container>
                <div className="
                flex
                items-center
                justify-between
                gap-3
                md:gap-0
                "> 
                    <div>
                        <Link href="/" className={teko.className} style={{ fontSize: '32px' }}>Asnet</Link>
                        </div>
                    <div className="hidden md:block">Szukaj</div>
                    <div className="flex items-center gap-8
                    md:gap-12">
                        <div>
                            <CartCount />
                        </div>
                        <UserMenu  currentUser={currentUser}/>
                    </div>
                </div>
            </Container>
        </div>
        <Categories/>
       </div> );
}
 
export default NavBar;
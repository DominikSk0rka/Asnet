import Link from "next/link";
import Container from "../Container";

import {Teko} from "next/font/google";

const teko = Teko({subsets: ['latin'], weight: ["500"]})

const NavBar = () => {
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
                        <Link href="/" className={teko.className} style={{ fontSize: '24px' }}>Asnet</Link>
                        </div>
                    <div className="hidden md:block">Szukaj</div>
                    <div className="flex items-center gap-8
                    md:gap-12">
                        <div>
                            <Link href="/cart">Koszyk</Link>
                        </div>
                        <div>Menu</div>
                    </div>
                </div>
            </Container>
        </div>
       </div> );
}
 
export default NavBar;

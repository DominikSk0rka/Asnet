import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md'

const Footer = () => {
    return ( <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row
            justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Kategorie</h3>
                   <Link href='#'>Komputery</Link>
                   <Link href='#'>Laptopy</Link>
                   <Link href='#'>Monitory</Link>
                   <Link href='#'>Karty Graficzne</Link>
                   <Link href='#'>Akcesoria</Link>
                </FooterList>

                <FooterList>
                    <h3 className="text-base font-bold mb-2">Kontakt</h3>
                   <Link href='#'>Kontakt</Link>
                   <Link href='#'>Polityka sklepu</Link>
                   <Link href='#'>Zwroty</Link>
                   <Link href='#'>FAQs</Link>
                </FooterList>

               <div className="w-full md:w-1/3 mb-6 md:mb-0">
               <h3 className="text-base font-bold mb-2">O Nas</h3>
                    <p className="mb-2">Tutaj będzie opis ale dopiero w końcowej fazie</p>
               </div> 

               <FooterList>
               <h3 className="text-base font-bold mb-2">Polub Nas</h3>
               <div className="flex gap-2"> 
                  <Link href='https://www.facebook.com/profile.php?id=100086276891536'>
                    <MdFacebook size={24}/>
                  </Link>
               </div>
               </FooterList>
            </div>
        </Container>

    </footer> );
}
 
export default Footer;
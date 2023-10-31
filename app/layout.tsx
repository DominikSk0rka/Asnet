import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';

const poppins = Poppins({ subsets: ['latin'], 
weight: ['400', '700']});

export const metadata: Metadata = {
  title: 'Asnet',
  description: 'Online shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        
        
        <div className="flex flex-col min-h-screen">
        <NavBar></NavBar>
    <main className="flex-grow"> {children} </main>
        <Footer></Footer>
        </div>



      </body>
    </html>
  )
}


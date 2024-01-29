"use client"
import '../globals.css'
import Header from '../components/Header'
import { usePathname } from 'next/navigation';
import TickerComponent from '../components/TicketComponent';
import Footer from '../components/FooterComponent';


export default function RootLayout({ children }) {
  const paths = ['/login' , "/register" , "/forgot"]
  const profile = usePathname()
  
  
  return (
    <html>
      <body className='bg-color1 rubik.className'>
     { !paths.includes(profile) && <Header /> }
     <div className='fixed top-0 z-20'>

     { !paths.includes(profile) && <TickerComponent /> }
     </div>
       
        <div>

        {children}
        { !paths.includes(profile) && <Footer /> }
        </div>
      </body>
    </html>
  )
}



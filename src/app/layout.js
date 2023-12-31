import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import NavLinks from './components/NavLinks' // Import the NavLinks component
import { BiMenu, BiLogOut } from 'react-icons/bi';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS GraphQl',
  description: 'NextJS GraphQl',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content mt-16 lg:mt-0">
           <hr className=' bg-black lg:bg-transparent' />
            {children}
            <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden absolute top-3 left-5"><BiMenu className=' text-2xl' /></label>
            <button className="btn btn-outline drawer-button lg:hidden absolute top-3 right-5"><BiLogOut className=' text-2xl'/></button>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <h3 className='mx-2 text-lg font-semibold text-center py-5'>Inventory</h3>
              <li><NavLinks navLinks={[{ name: "Add New Product", href: "/" }]}>Add New Product</NavLinks></li>
              <li><NavLinks navLinks={[{ name: "Categories", href: "/categories" }]}>Categories</NavLinks></li>
              <li><NavLinks navLinks={[{ name: "Attributes", href: "/attributes" }]}>Attributes</NavLinks></li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  )
}

import "./globals.css" 
import { ReactNode } from "react" 
import Link from "next/link" 
export const metadata = { title: "DOC Delivery", description: "Delivery Order Management" } 
export default function RootLayout({ children }:{ children:ReactNode }){ return( <html lang="en">
  <body>
    <header className="p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold"> Dreams of Ceylonese Pvt Ltd </h1>
        <p className="text-sm"> +94 77 100 41 53 </p>
      </div>
      <nav className="space-x-4">
        <Link href="/">Dashboard</Link>
      </nav>
    </header>
    <main> {children} </main>
    <footer className="text-center text-sm text-gray-500 p-4"> Powered by SquareaSoft </footer>
  </body>
</html> ) }
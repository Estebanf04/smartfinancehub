import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header() {

  const {pathname} = useLocation()
  const isHome = useMemo(() => pathname === '/', [pathname]) 

  return (
    <>
      <header>
            <p className="text-center py-3 text-sm font-normal bg-gray-900 text-gray-100">
                <span className="text-cyan-400 font-semibold">
                  10% OFF {''}
                </span> 
                 de descuento hasta el 31 de diciembre
            </p>
            <div className="flex p-4 justify-between mx-auto max-w-6xl items-center">
                  <Link to={'/'}>
                      <img 
                      src="./LogoSmartF.png" 
                      className="w-48 md:w-52"
                      />
                  </Link>

                  {isHome && (
                    <Link 
                      to={'/contact'}
                      className="px-2.5 md:px-4 py-2 rounded-3xl text-black border shadow-md shadow-cyan-400 font-normal"
                    >
                      Solicitar Demo
                    </Link>  
                  )}
            </div>
      </header>
    </>
  )
}
import { NavLink } from "react-router-dom";


export default function Footer() {

  return (
        <footer className="bg-gray-900">
              <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                  <div className="lg:flex items-center lg:justify-between">
                      <div className="flex flex-col items-center md:items-start"> 
                          <div className="flex justify-center lg:justify-start">
                              <p className="text-gray-300 text-2xl md:text-3xl">
                                SmartFinance Hub
                              </p>
                          </div>

                          <p className="mx-auto my-7 max-w-md text-center leading-relaxed text-gray-400 lg:text-left">
                                Proyecto frontal de una SaaS creado con React, Tailwind, DaisyUI, React-Router, realizado por {''}
                                <span className="font-semibold text-gray-300">
                                  Esteban Fandos
                                </span>.
                          </p>

                          <a 
                          href="https://www.estebanfandos.com" 
                          target="_blank"
                          className="bg-cyan-700 text-gray-200 py-2 px-6 font-semibold rounded-xl text-md border border-cyan-400 hover:scale-105 hover:bg-cyan-600 transition-all"
                          >
                            Mi Portfolio
                          </a>
                      </div>

                      <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                          <li>
                              <NavLink className="text-gray-400 transition hover:text-gray-500/75" to="/">
                                  Home
                              </NavLink>
                          </li>

                          <li>
                              <NavLink className="text-gray-400 transition hover:text-gray-500/75" to="/contact">
                                  Contact
                              </NavLink>
                          </li>

                          <li>
                              <a className="text-gray-400 transition hover:text-gray-500/75" href="#"> 
                                  Privacy Policy 
                              </a>
                          </li>

                          <li>
                              <a className="text-gray-400 transition hover:text-gray-500/75" href="#"> 
                                  Terms of use 
                              </a>
                          </li>
                      </ul>
                  </div>

                  <p className="mt-8 lg:mt-0 text-center text-sm text-gray-500 lg:text-right">
                      Copyright &copy; 2024. SmartFinance Hub.
                  </p>
              </div>
      </footer>
  )
}

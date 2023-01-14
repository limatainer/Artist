import React from 'react'

export default function Header() {
  return (
    <div className='h-10'>

      <nav className="h-10 flex flex-wrap items-center justify-between bg-gray-50">
        <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
          <a className="text-xl font-semibold text-gray-800 font-heading" href="#">
            Central do Artista
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>
                Sobre
              </title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
              </path>
            </svg>
          </button>
        </div>
        <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
          <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
            Home
          </a>
          <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
            Artistas
          </a>
          <a className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
            Galeria
          </a>
        </div>
        <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
          <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
            Sobre
          </a>
          <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
            Contato
          </a>

        </div>
      </nav>

    </div>
  )
}

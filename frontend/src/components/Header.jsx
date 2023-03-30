import React from 'react';
import { navigation } from '../constants';

import { useState } from 'react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="bg-black text-white px-4 py-6 mx-auto
       lg:py-8 sm:max-w-xl md:max-w-full
     lg:max-w-screen-xl md:px-24 lg:px-8 rounded"
    >
      <div
        className="relative flex items-center justify-between
       lg:justify-center lg:space-x-16"
      >
        <a
          href="/"
          aria-label="Elph"
          title="Elph"
          className="inline-flex items-center"
        >
          <span className="ml-2 text-xl font-bold tracking-wide uppercase">
            <p>Central do Artista</p>
          </span>
        </a>
        <ul className=" items-center hidden space-x-8 lg:flex">
          {navigation.map((nav, index) => (
            <li key={index}>
              <a
                href={`#${nav.id}`}
                aria-label="Our product"
                title={nav.title}
                className="font-medium tracking-wide  
          transition-colors duration-200 hover:text-indigo-600"
              >
                {nav.title}{' '}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden z-[999]">
          <button
            aria-label="Abrir Menu"
            title="Abrir Menu"
            className="p-2 -mr-1 transition duration-200 rounded
             focus:outline-none focus:shadow-outline hover:bg-indigo-600
              focus:bg-indigo-600"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 " viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-black border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Elph"
                      title="Elph"
                      className="inline-flex items-center"
                    >
                      <span
                        className="ml-2 text-xl font-bold tracking-wide
                        uppercase"
                      >
                        <p>Central do Artista</p>
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200
                       rounded hover:bg-gray-200 focus:bg-gray-200
                        focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 " viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {navigation.map((nav) => (
                      <li>
                        <a
                          key={nav.id}
                          href={`#${nav.id}`}
                          aria-label="Artistas"
                          title={nav.title}
                          className="font-medium tracking-wide 
                      transition-colors duration-200
                       hover:text-indigo-600"
                        >
                          {nav.title}{' '}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

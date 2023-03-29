import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-white flex items-center justify-between px-8 py-4">
      <div className="text-2xl font-bold text-white text-center">
        Central do Artista
      </div>
      <div className="flex items-center">
        <a href="#" className="px-3 py-2 text-white hover:text-indigo-600">
          Galeria
        </a>
        <a href="#" className="px-3 py-2 text-white hover:text-indigo-600">
          Portfolio
        </a>
        <a href="#" className="px-3 py-2 text-white hover:text-indigo-600">
          Contato
        </a>
        <a href="#" className="px-3 py-2 text-white hover:text-indigo-600">
          Sobre
        </a>
      </div>
    </header>
  );
}

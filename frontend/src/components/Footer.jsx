import React from 'react';

export default function Footer() {
  return (
    <footer
      className="h-10 w-auto p-1 bg-gray-50 text-base-content mt-8
      shadow shadow-slate-500 "
    >
      <div>
        <p className="text-gray-900">
          Copyright © 2023 - All right reserved by
          <a
            className="hover:text-indigo-600"
            href="http://elph.vercel.app "
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            ElphTech
          </a>
        </p>
      </div>
    </footer>
  );
}

import React from 'react';
import Pablo from '/assets/img/pablo.jpg';
import Darina from '/assets/img/darina.jpg';
import Carlos from '/assets/img/carlos.jpg';
import Muham from '/assets/img/muham.jpg';
export default function Featured() {
  return (
    <div id="estrelas" className="py-20">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 ">
          <h2
            className="mb-4 text-2xl font-bold text-gray-800
            md:text-4xl"
          >
            Artistas Gold
          </h2>
          <p className="text-gray-600 ">
            Ranking dos nossos artistas que mais apareceram nas mídias
          </p>
        </div>
        <div
          className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 
        md:grid-cols-3 lg:grid-cols-4"
        >
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              className="mx-auto h-[26rem] w-full grayscale object-cover
               object-top ransition duration-500 group-hover:scale-105 
               group-hover:grayscale-0"
              src={Pablo}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              className="absolute bottom-0 inset-x-0 h-max mt-auto 
            px-8 py-6 bg-gray-800 translate-y-24 transition
             duration-300 ease-in-out group-hover:translate-y-0"
            >
              <div>
                <h4 className="text-xl font-semibold  text-white">Pablo</h4>
                <span className="block text-sm text-gray-500">Ator</span>
              </div>
              <p className="mt-8 text-gray-300 ">Ator, Modelo, 29 anos</p>
            </div>
          </div>
          <div className="group relative rounded-3xl space-y-6 overflow-hidden">
            <img
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top
               ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src={Darina}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              className="absolute bottom-0 inset-x-0 h-max mt-auto
             px-8 py-6 bg-gray-800  translate-y-24 
             transition duration-300 ease-in-out group-hover:translate-y-0"
            >
              <div>
                <h4 className="text-xl font-semibold text-white">Darina</h4>
                <span className="block text-sm text-gray-500">Modelo</span>
              </div>
              <p className="mt-8 text-gray-300 ">Modelo, 35 anos</p>
            </div>
          </div>
          <div className="group relative rounded-3xl space-y-6 overflow-hidden">
            <img
              className="mx-auto h-[26rem] w-full grayscale object-cover 
              object-top transition duration-500 group-hover:scale-105 
              group-hover:grayscale-0"
              src={Carlos}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              className="absolute bottom-0 inset-x-0 h-max mt-auto 
            px-8 py-6 bg-gray-800  translate-y-24 transition
             duration-300 ease-in-out group-hover:translate-y-0"
            >
              <div>
                <h4 className="text-xl font-semibold text-white">Carlo</h4>
                <span className="block text-sm text-gray-500">Top Model</span>
              </div>
              <p className="mt-8 text-gray-300 ">Ator, Modelo, 39 anos</p>
            </div>
          </div>
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <img
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top
               ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src={Muham}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6
             bg-gray-800  translate-y-24 transition duration-300 ease-in-out
              group-hover:translate-y-0"
            >
              <div>
                <h4 className="text-xl font-semibold  text-white">Muham</h4>
                <span className="block text-sm text-gray-500">Performance</span>
              </div>
              <p className="mt-8 text-gray-300 ">Dancarina, Modelo, 19 anos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

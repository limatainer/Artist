import React from 'react';
import Bunuelo from '../assets/img/bunuelo.jpg';
import Craig from '../assets/img/craig.jpg';
import Emily from '../assets/img/emily.jpg';
import Mateo from '../assets/img/mateo.jpg';
export default function Presentation() {
  return (
    <div class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white m:px-6 lg:px-8 py-26 lg:mt-20">
      <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
            <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
              Artistas
            </p>
            <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 :text-3xl sm:leading-9">
              O maior portifolio de artistas na web
            </h4>
            <p class="mt-4 text-lg leading-6 text-gray-500 ">
              Conheça nossos agenciados, Fotos, Projetos, entre em contacto e
              saiba mais para contratar.
            </p>
            <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 ">
                    Fotos
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 ">
                    Projetos
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Peças
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                    Freelancer
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div class="relative space-y-4">
              <div class="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  class="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={Bunuelo}
                  alt="1"
                />
                <img
                  class="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={Craig}
                  alt="2"
                />
              </div>
              <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  class="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={Emily}
                  alt="3"
                />
                <img
                  class="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={Mateo}
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

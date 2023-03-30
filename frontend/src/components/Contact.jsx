import axios from 'axios';
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, whats, message);
    const data = {
      Name: name,
      Email: email,
      Whatsapp: whats,
      Message: message,
    };
    axios
      .post('https://sheetdb.io/api/v1/h6vmuhennqqy2', data)
      .then((response) => {
        console.log(response);
        setName('');
        setEmail('');
        setMessage('');
        setWhats('');
      });
  };

  return (
    <section id="contact" className="py-6 mt-4">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Entre em Contato</h1>
          <p className="pt-2 pb-4">
            Preencha as informações que nossa equipe irá responder prontamente
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7
                   7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Portugal, 3435 Porto</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74
                 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 
                 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1
                  1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                ></path>
              </svg>
              <span>34567836</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2
                 2 0 00-1.997 1.884z"
                ></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>elph@artistas.com</span>
            </p>
          </div>
        </div>
        <form
          id="contato"
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched
           ng-pristine ng-valid"
          onSubmit={handleSubmit}
        >
          {submitSuccess && (
            <div className="text-green-600 mb-4">Mensagem enviada</div>
          )}
          <label className="block">
            <span className="mb-1">Seu nome</span>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring
               focus:ring-opacity-75 focus:ring-violet-400 "
            />
          </label>
          <label className="block" htmlFor="email">
            <span className="mb-1">Email</span>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring
               focus:ring-opacity-75 focus:ring-violet-400 "
            />
          </label>
          <label className="block" htmlFor="message">
            <span className="mb-1">Mensagem</span>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows="3"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75
               focus:ring-violet-400 "
            ></textarea>
          </label>
          <button
            type="button"
            disabled={isSubmitting}
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring
             focus:ring-opacity-75
              focus:ring-violet-400 hover:ring-violet-400"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
}

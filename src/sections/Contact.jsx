import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-gray-800 dark:text-gray-600 text-lg mb-6">
        Let’s connect! I’m open to collaboration and new opportunities.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="mailto:piasundsby@gmail.com" className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
          Email
        </a>
        <a href="https://github.com/piasun" target="_blank" rel="noreferrer" className="border border-gray-300 px-5 py-2 rounded hover:bg-gray-100 dark:border-gray-600 hover:bg-gray-800 transition hover:text-white">
          GitHub
        </a>
        <a href="#" className="border border-gray-300 px-5 py-2 rounded hover:bg-gray-100 dark:border-gray-600 hover:bg-gray-800 transition hover:text-white">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

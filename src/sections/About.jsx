import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">About</h2>
      <p className="text-gray-800 text-lg">
        I’m a Front-End Developer focused on React, accessibility and human-centered design.
        I enjoy fast iterations, clean structure and playful micro‑interactions that make interfaces
        feel alive — without sacrificing usability.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
        {["React", "Vite", "TypeScript (learning)", "Bootstrap", "Figma", "WCAG", "GitHub", "Netlify"].map(skill => (
          <span key={skill} className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

import React from 'react';

export default function Portfolio() {
  const projects = [
    {
        title: "Vibbz – Social Media App",
        description: "A modern social platform using React and Noroff API.",
        image: "/images/frontpage_Vibbz.png",
        github: "https://github.com/piasun/project-exam-2-vibbz",
        live: "https://vibbz.netlify.app/"
    },
    {
        title: "React eCommerce Store",
        description: "E-commerce project with Zustand and styled components.",
        image: "/images/yms_screenshot.png",
        github: "https://github.com/piasun/js-frameworks-ca",
        live: "#"
    },
    {
        title: "List It – Auction Website",
        description: "JavaScript auction app for bidding and listing items.",
        image: "/images/website-listit.png",
        github: "https://github.com/piasun/semester-project-2",
        live: "https://list-it-auction-website.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.description}</p>
              <div className="mt-4 flex gap-3 text-sm">
                <a href={p.github} className="text-indigo-600 hover:underline dark:text-indigo-400">GitHub</a>
                {p.live && <a href={p.live} className="text-indigo-600 hover:underline dark:text-indigo-400">Live</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

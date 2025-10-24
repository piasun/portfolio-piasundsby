import React from 'react';

export default function ScrollLink({ href, children, className = '' }) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

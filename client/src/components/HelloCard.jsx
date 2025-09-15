import React from "react";

const HelloCard = ({ name, photoUrl, githubUrl }) => {
  return (
    <div className="relative w-64 h-80 bg-red-400 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg hover:scale-105 transform transition duration-300 mx-auto">
      {/* User photo */}
      <div className="w-40 h-40 bg-gray-200 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={`${name} avatar`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <span 
          className="text-gray-500 text-sm font-mono"
          style={{ display: photoUrl ? 'none' : 'flex' }}
        >
          photo
        </span>
      </div>
      
      {/* Name */}
      <p className="text-white font-mono font-bold text-lg text-center px-2 break-words">
        {name}
      </p>
      
      {/* GitHub circle at bottom-left */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-200 transition duration-200"
          aria-label={`Visit ${name}'s GitHub profile`}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
            alt="GitHub"
            className="w-5 h-5"
          />
        </a>
      )}
    </div>
  );
};

export default HelloCard;

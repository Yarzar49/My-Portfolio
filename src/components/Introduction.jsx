// src/components/Introduction.js
import React from 'react';

const Introduction = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 lg:p-8 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
      
      <div className="flex items-center mb-4">
        <img 
          src={"/images/me.png"} 
          alt="My Photo" 
          className="w-24 h-24 rounded-full mr-4 shadow-lg"
        />
        <div>
          <p className="text-gray-700 mb-4">
            Hello! I'm a passionate developer with a focus on creating dynamic and user-friendly web applications. 
            My goal is to deliver high-quality software that meets the needs of users while ensuring a great user experience.
          </p>
          <p className="text-gray-600">
            With a background in various technologies, I strive to stay updated with the latest trends in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

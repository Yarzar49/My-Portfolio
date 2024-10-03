import React from 'react';

const MySkills = () => {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 lg:p-8 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">JavaScript</h3>
          </li>
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">PHP</h3>
          </li>
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">Laravel</h3>
          </li>
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">React</h3>
          </li>
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">Tailwind CSS</h3>
          </li>
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">Bootstrap</h3>
          </li>
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">HTML & CSS</h3>
          </li>
          <li className="bg-gray-200 p-4 rounded-md shadow">
            <h3 className="font-medium">Git & GitHub</h3>
          </li>
        </ul>
      </div>
    );
  };
  
  export default MySkills;
  
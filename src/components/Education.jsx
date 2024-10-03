
import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science(BC.Sc)",
      institution: "University of Computer Studies, Manadalay",
      year: "2016 - 2020",
    },
    {
      degree: "High School Diploma",
      institution: "CAE Private High School",
      year: "2015 - 2016",
    },
  ];

  return (
    <div className='mt-10'>
      <h3 className="text-2xl font-semibold mb-2">Education</h3>
      <ul className="list-disc list-inside">
        {educationData.map((edu, index) => (
          <li key={index} className="text-gray-700 mb-2">
            <strong>{edu.degree}</strong> at <em>{edu.institution}</em> ({edu.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;

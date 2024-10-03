// src/components/Job.js
import React from 'react';

const Job = () => {
  const jobData = [
    {
      title: "Mid PHP Laravel Developer",
      company: "Secure Link",
      duration: "2023 - Present",
      description: "Responsible for developing and maintaining the user interface of web applications, ensuring a seamless user experience."
    },
    {
        title: "Junior Software Engineer",
        company: "Brycen Myanmar",
        duration: "2022 - 2023(9 Months)",
        description: "Responsible for developing and maintaining the user interface of web applications, ensuring a seamless user experience."
      },
    {
      title: "Intern Developer",
      company: "Brycen Myanmar",
      duration: "3 Months",
      description: "Assisted in the development of web applications and gained hands-on experience in React, Laravel, Wordpress and other modern technologies."
    },
  ];

  return (
    <div className='mt-8'>
      <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>
      <ul className="list-disc list-inside">
        {jobData.map((job, index) => (
          <li key={index} className="text-gray-700 mb-4">
            <strong>{job.title}</strong> at <em>{job.company}</em> ({job.duration})
            <p className="text-gray-600">{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;

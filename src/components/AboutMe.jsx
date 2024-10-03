import React from 'react';
import Introduction from '../components/Introduction';
import MySkills from '../components/MySkills';
import Education from './Education';
import Job from './Job';

const AboutMe = () => {
  return (
    <div className=' bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
      <section className="py-20 max-w-3xl mx-auto p-6rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-6">About Me</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Introduction />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <MySkills />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Education />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Job />
      </div>
    </section>    
    </div>
  );
};

export default AboutMe;

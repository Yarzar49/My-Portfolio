// src/pages/Home.js
import React from 'react';
import ProjectList from '../components/ProjectList';

const Home = () => {
  return (
    <>
      {/* Welcome Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center pt-24">
        <div className="backdrop-blur-sm bg-white/30 p-10 rounded-lg shadow-2xl">
          <h1 className="text-6xl font-extrabold text-white mb-6 text-center">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-white text-center mb-10">
            Showcasing My Latest Work and Blog Posts
          </p>
          <ProjectList />
        </div>
      </section>
    </>
  );
};

export default Home;

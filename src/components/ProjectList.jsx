import React from 'react';
import useFetch from '../hooks/useFetch';
import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from 'react-router-dom';

const ProjectList = () => {

    let { data , loading, error }= useFetch('/db.json');
  
    if (error) {
        return <p>{error}</p>
    }

  return (
    <section className="py-10">
        {loading &&  
        <div className="container mx-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader color="#3498db" loading={loading} size={150} />
        </div>
        }
       <div>
      <h2 className="text-4xl text-center font-bold text-white mb-8">My Projects</h2>
      {!!data && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data.projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <NavLink to={`/projects/${project.id}`} className="text-indigo-500 mt-4 inline-block">Learn More</NavLink>
            </div>
          </div>
        ))}
      </div>
      )}
      
    </div>
    </section>
  )
}

export default ProjectList
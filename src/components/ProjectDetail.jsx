import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProjectDetail = () => {
  const { projectId } = useParams();
  let { data: projects, loading, error } = useFetch('http://localhost:3000/projects');

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  const project = projects?.find(project => project.id === projectId);

  if (!project) return <h2 className="text-center text-red-600 text-2xl mt-10">Project not found!</h2>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 lg:p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{project.name}</h1>
        <img src={project.image} alt={project.name} className="w-full mb-6 rounded-lg shadow-sm"/>
        <p className="text-gray-700 text-base mb-4">{project.description}</p>
        <p className="text-gray-600 text-sm">
          This project is a <span className="font-medium">{project.name}</span>. More details about the project can be added here.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;

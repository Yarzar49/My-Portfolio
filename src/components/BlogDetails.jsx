import React from 'react'
import useFetch from '../hooks/useFetch';
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const BlogDetails = () => {
  const { id } = useParams();
  const { darkMode } = useTheme();
  let { data : blogs, loading, error }= useFetch('http://localhost:3000/blogs');
    if (error) {
        return <p>{error}</p>
    }
 
  const blog = blogs?.find(blog => blog.id ===  id);

  if (!blog) return <h2 className="text-center text-red-600 text-2xl mt-10">Blog not found!</h2>;

  return (
    <section className={`min-h-screen  py-24 px-6 mt-6 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">{blog.title}</h1>
        <p className="text-gray-400 text-sm mb-12">{blog.date}</p>
        <article className="text-lg text-gray-700 leading-relaxed">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-6">{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default BlogDetails
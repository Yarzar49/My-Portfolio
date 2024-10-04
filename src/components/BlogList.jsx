import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import useFetch from '../hooks/useFetch';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const BlogList = () => {
  const { darkMode } = useTheme();
  let { data, loading, error } = useFetch('/db.json');

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={`min-h-screen py-24 px-6 mt-8 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        {loading && (
          <div
            className="container mx-auto flex justify-center items-center"
            style={{ height: '100vh' }}
          >
            <ClipLoader color="#3498db" loading={loading} size={150} />
          </div>
        )}

        {!loading && (
          <>
            <h2
              className={`text-5xl font-bold text-center mb-16 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Blog Posts
            </h2>

            {!!data && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.blogs.map((blog) => (
                  <NavLink
                    key={blog.id}
                    to={`/blog/${blog.id}`}
                    className="bg-white rounded-lg shadow-md p-6 transition transform hover:scale-105 hover:shadow-lg"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h3>
                    <p className="text-gray-600 mb-6">{blog.excerpt}</p>
                    <p className="text-gray-400 text-sm">{blog.date}</p>
                  </NavLink>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogList;

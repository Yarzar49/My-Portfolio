import React from 'react'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const BlogDetails = () => {
   // Get the blogId from the URL using useParams
   const { blogId } = useParams();

   // Get the darkMode value from your useTheme hook (if you're handling dark mode)
   const { darkMode } = useTheme();
 
   // Fetch the data from db.json using useFetch
   let { data, loading, error } = useFetch('/db.json');
 
   // Show a loading state while fetching the data
   if (loading) return <p className="text-center text-gray-600">Loading...</p>;
 
   // Show an error message if something goes wrong
   if (error) return <p className="text-center text-red-600">{error}</p>;
 
   // Convert blogId to a number since the IDs in db.json are numbers
   const blogIdNumber = parseInt(blogId);
 
   // Ensure that the blogs array is available before trying to find the blog
   const blog = data?.blogs?.find(blog => blog.id === blogIdNumber);
 
   // Debugging: Console log the blogId and the blog to check if the match works
   console.log('blogId:', blogId, 'blog:', blog);
 
   // Handle the case where the blog is not found
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
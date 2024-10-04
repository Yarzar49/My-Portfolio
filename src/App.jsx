// // import { useState } from 'react'
// import { useState } from 'react'
// import './App.css'
// import { useEffect } from 'react';
// // import useFetch from './hooks/useFetch';

// function App() {

//   // const [url , setUrl] = useState('http://localhost:5000/posts');
//   // const {data : posts, isLoading, error } = useFetch(url, { option : "GET" });
  
//   // const fetchPosts = useCallback(() => {
//   //   fetch(url)
//   //   .then(res => res.json())
//   //   .then(data => {
//   //     setPosts(data);
//   //   })
//   // }, [url])
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(prev => prev + 1);
//       console.log(count);
//     }, 1000)      
//     return () => clearInterval(timer);
//   }, [count])

//   return (
//     <>
//     {/* { error && <p>{error}</p> }
//     { !error &&
//       <div>
//         <h1>UseEffect</h1>    
//         {
//         isLoading && <p> Loading...</p>
//         }
//         <button onClick={() => setUrl('http://localhost:5000/posts')}>All</button>
//         <button onClick={() => setUrl('http://localhost:5000/posts?location=Myanmar')}>Myanmar</button>
//         <ul>
//           {
//             posts && posts.map(post => (
//               <li key={post.id}>
//                 <h3>{post.title}</h3>
//                 <p>price - {post.views}</p>
//               </li>
//             ))
//           }
//         </ul>    
//       </div>

//     }   */}
//     <h1>{count}</h1>
//     </>
//   )
// }

// export default App
// import React from 'react';
// import Test from './Test';
// import { createContext, useState } from 'react';

// // Correctly export ThemeContext here
// export const ThemeContext = createContext();

// const App = () => {
//   const [theme, setTheme] = useState('light');

//   return (
//     <ThemeContext.Provider value={theme}>
//       <Test />
//     </ThemeContext.Provider>    
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from './components/BlogDetails';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} 
            />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

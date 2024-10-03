import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form  Data Submitted:', formData);
    }

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center pt-24 pb-24">
      <div className="backdrop-blur-sm bg-white/30 p-10 rounded-lg shadow-2xl w-full max-w-3xl">
        <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-lg text-white text-center mb-10">
          Feel free to drop a message. I'd love to hear from you!
        </p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-3 bg-white/70 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Your Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-white/70 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Subject</label>
            <input 
              type="text" 
              placeholder="Enter the subject" 
              className="w-full px-4 py-3 bg-white/70 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea 
              rows="5" 
              placeholder="Type your message here..." 
              className="w-full px-4 py-3 bg-white/70 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
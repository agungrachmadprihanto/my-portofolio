import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

    const [selectedImg, setSelectedImg] = useState(null);
    const projects = [
    { 
      id: 1, 
      title: "MAA Digi", 
      // Tech dibuat menjadi array of objects agar warnanya bisa berbeda
      tech: [
        { name: "JS", bg: "bg-yellow-100", text: "text-yellow-600" },
        { name: "Laravel", bg: "bg-red-100", text: "text-red-600" },
        { name: "Bootstrap", bg: "bg-blue-100", text: "text-blue-600" },
        { name: "Nginx", bg: "bg-green-100", text: "text-green-600" }
      ], 
      img: "/porto/image5.png", 
      desc: "Internet banking makes it easier for customers to make online transactions securely and fast."
    },
    { 
      id: 2, 
      title: "KPI Penilaian", 
      // Tech dibuat menjadi array of objects agar warnanya bisa berbeda
      tech: [
        { name: "JS", bg: "bg-yellow-100", text: "text-yellow-600" },
        { name: "Laravel", bg: "bg-red-100", text: "text-red-600" },
        { name: "Vue JS", bg: "bg-blue-100", text: "text-blue-600" },
        { name: "Nginx", bg: "bg-green-100", text: "text-green-600" }
      ], 
      img: "/porto/image2.png",
      desc: "employee assessment to determine performance every quarter and produce reports for HRD and management." 
    },
    { 
      id: 3, 
      title: "Asset Lelang", 
      // Tech dibuat menjadi array of objects agar warnanya bisa berbeda
      tech: [
        { name: "JS", bg: "bg-yellow-100", text: "text-yellow-600" },
        { name: "Laravel", bg: "bg-red-100", text: "text-red-600" },
        { name: "Nginx", bg: "bg-green-100", text: "text-green-600" }
      ], 
      img: "/porto/image3.png",
      desc: "The auction asset catalog provides information about the products to be auctioned." 
    },
    { 
      id: 4, 
      title: "Website Perusahaan", 
      // Tech dibuat menjadi array of objects agar warnanya bisa berbeda
      tech: [
        { name: "Wordpress", bg: "bg-yellow-100", text: "text-yellow-600" },
        { name: "Elementor", bg: "bg-red-100", text: "text-red-600" },
        { name: "PHP", bg: "bg-blue-100", text: "text-blue-600" },
      ], 
      img: "/porto/image4.png",
      desc: "provide information about company products and the benefits provided to customers." 
    },
    { 
      id: 5, 
      title: "Ijin Online", 
      // Tech dibuat menjadi array of objects agar warnanya bisa berbeda
      tech: [
        { name: "JS", bg: "bg-yellow-100", text: "text-yellow-600" },
        { name: "Laravel", bg: "bg-red-100", text: "text-red-600" },
        { name: "Bootstrap", bg: "bg-blue-100", text: "text-blue-600" },
        { name: "Nginx", bg: "bg-green-100", text: "text-green-600" }
      ], 
      img: "/porto/image1.png",
      desc: "make it easier for employees to apply for permission and summarize the results for HRD." 
    },
    { 
      id: 6, 
      title: "Pengajuan Kredit", 
      // Tech dibuat menjadi array of objects agar warnanya bisa berbeda
      tech: [
        { name: "JS", bg: "bg-yellow-100", text: "text-yellow-600" },
        { name: "Laravel", bg: "bg-red-100", text: "text-red-600" },
        { name: "Bootstrap", bg: "bg-blue-100", text: "text-blue-600" },
        { name: "Nginx", bg: "bg-green-100", text: "text-green-600" }
      ], 
      img: "/porto/image6.png",
      desc: "a summary list of credit applications from customers who will apply for credit to make it easier to follow up." 
    },
 
  ];

return (
    // Tambahkan scroll-smooth di div utama agar transisi perpindahan section halus
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-100 scroll-smooth">
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            alt="Enlarged" 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in duration-300"
          />
          <button className="absolute top-5 right-5 text-white text-3xl font-bold">&times;</button>
        </div>
      )}


      {/* Container Utama */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Navigation Bar - Fixed atau Sticky agar selalu terlihat saat di-scroll */}
        <nav className="flex justify-center sticky top-5 z-50 mb-16 md:mb-24">
          <ul className="flex items-center gap-4 sm:gap-8 bg-white/80 backdrop-blur-md shadow-lg px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium ring-1 ring-gray-100 overflow-x-auto">
            <li><a href="#home" className="text-gray-700 hover:text-teal-500 transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-teal-500 transition-colors">About</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-teal-500 transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-teal-500 transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Home Section */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start mb-32 pt-10">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="w-16 h-16 bg-yellow-300 rounded-full mb-6 flex items-center justify-center text-3xl shadow-sm">
               👨‍💻
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
              Full-stack web developer and Devops engineer.
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
              I am a full-stack developer with expertise in Laravel. I enjoy solving complex problems and learning new skills.
            </p>
            {/* Social Icons */}
            <div className="flex gap-6 text-gray-400">
              {/* Icon GitHub */}
              <a 
                href="https://github.com/agungrachmadprihanto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Icon LinkedIn */}
              <a 
                href="https://linkedin.com/in/agung-rachmad-prihanto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Profile" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 pt-20 border-t border-gray-100">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 max-w-3xl leading-loose">
            Passionate about building digital products that solve real-world problems. 
            I believe that great software is built with clean code and a deep understanding of the user's needs. 
            When I'm not coding, you'll find me looking at the stars or experimenting with new frameworks.
          </p>
        </section>



      {/* Featured Projects */}
        <section id="projects" className="pt-20 border-t border-gray-100 mb-32">
          <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Featured Projects</h2>          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col">
                {/* Image Container */}
                <div 
                  className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-video cursor-zoom-in shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setSelectedImg(project.img)}
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Lihat Gambar</span>
                  </div>
                </div>

       

                {/* Content  Projects*/}
                <div className="px-1">           
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, index) => (
                      <span 
                        key={index} 
                        className={`px-2 py-1 ${t.bg} ${t.text} rounded-md font-bold text-[10px]`}
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-teal-600 transition-colors">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
   
   
      

        {/* Contact Section */}
        <section id="contact" className="pt-20 border-t border-gray-100 mb-32">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-600 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
          <a href="mailto:your@email.com" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors">
            Say Hello
          </a>
        </section>

      </div>
    </div>
  );
}

export default App;

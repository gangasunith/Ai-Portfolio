import React from 'react';
import FloatingChat from "./components/FloatingChat";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50"> 
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">R.Ganga Sunith</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl">
             Student with a passion for web development, solving complex problems through coding. My goal is to contribute to groundbreaking innovations by designing and building scalable, efficient, and visually engaging web applications that make a real-world impact.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:rgangasunith@gmail.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/gangasunith"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ganga-sunith-07438424b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section> 
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'JavaScript',
              'React.js',
              'Node.js',
              'ExpressJS',
              'HTML/CSS',
              'Bootstrap',
              'Git',
              'SQL',
              'MongoDB',
              'RESTful APIs',
              'Responsive Design',
              'Problem Solving',
              'Java',
              'c++',
              'Python'
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <p className="text-lg font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Software Developer Intern</h3>
                <div className="text-gray-600">May 2025 - June 2025</div>
              </div>
              <div className="text-gray-600 mb-4">Bluestock Fintech</div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed a dynamic IPO (Initial Public Offering) page using full-stack technologies.</li>
                <li>Implemented frontend components using React.js to display IPO listings, filters, and detailed stock information.</li>
                <li>Built backend APIs using Express and integrated them with a MongoDB database to store and retrieve IPO data.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Frontend Web Developer Intern</h3>
                <div className="text-gray-600">Jan 2025 - Mar 2025</div>
              </div>
              <div className="text-gray-600 mb-4">HKTechnical</div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed responsive and user-friendly web pages using HTML, CSS, JavaScript, and React.js.</li>
                <li>Improved website efficiency by optimizing code and implementing best practices for
faster load times.</li> 
                <li>Participated in code reviews and contributed to team discussions</li>
                <li>I served as the team leader, coordinating tasks, guiding team members, and ensuring timely delivery of project milestones.</li>
              </ul>
            </div>
          </div>
        </div>
      </section> 
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Wanderlust',
                description: 'Including features for property listings, booking management, and payment processing, leading to a streamlined user experience and increased platform adoption.Integrated user review and rating system, fostering trust between guests and hosts and leading to higher ratings for listings and increased platform retention.',
                link: 'https://wanderlust-zlw9.onrender.com/listings',
              }, {
                title: 'Night Time Pedestrian Detection',
                description: 'Developed a nighttime pedestrian detection system uses both camera data and millimeter wave radar. Millimeter wave radar ensures reliable detection in darkness or bad weather enables real time use in autonomous vehicles and driver assistance systems to improve safety at night.',
                // link: 'https://project5.com',
              },
              {
                title: 'Automobile Service Portal',
                description: 'User-friendly platform for scheduling maintenance, repairs, and service appointments for vehicles.Designed an intuitive interface for users to quickly access emergency services, including location tracking and one-click alerts, improving response times and user safety.',
               // link: 'https://project2.com',
              },
              {
                title: 'Password Vault',
                description: 'A privacy-first password vault that keeps your credentials safe through end-to-end encryption. Only you can access your passwords — not even the server can decrypt them.',
                link: 'https://vault-mvp-u1ve.onrender.com/',
              },
              {
                title: 'Simon Game',
                description: 'The Simon game is a classic electronic memory game where players must repeat a sequence of tones and lights. Each round, the game adds one more step to the sequence, and the player must remember and replicate the growing pattern.',
                link: 'simon-game-opal-one.vercel.app',
              },
              {
                title: 'ChatBot for HKTechnical',
                description: 'Designed and developed a custom chatbot for HKTechnical to handle customer queries, provide technical support, and guide users through service options.',
                // link: 'https://project2.com',
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Expo winner</h3>
              <p className="text-gray-600">First place in the inter college expo 2023, developing an innovative solution for Automobiles.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership</h3>
              <p className="text-gray-600">Successfully managed a team of 4 developers during the internship project at HKTechnical.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hackathon</h3>
              <p className="text-gray-600">Participated in INSPIRA 2025 at IIT Hyd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:rgangasunith@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} R.Ganga Sunith. All rights reserved.
        </div>
      </footer>
      <FloatingChat/>
    </div>
  );
}

export default App;

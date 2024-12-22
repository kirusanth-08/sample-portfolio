import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-white dark:border-gray-800 shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          John Doe
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | Open Source Enthusiast
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white dark:bg-gray-800 py-20 transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            I'm a passionate full-stack developer with 5 years of experience building web applications.
            I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find
            me contributing to open-source projects or writing technical blog posts.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8 transition-colors">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
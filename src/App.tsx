/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  Calculator, 
  Menu, 
  X,
  Youtube,
  Play,
  ChevronRight,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Videos', id: 'videos' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-bottom border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-blue tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
            Tafhimul Islam
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${activeSection === item.id ? 'text-brand-blue' : ''}`}
              >
                {item.name}
              </button>
            ))}
            <a 
              href="/resume.pdf" 
              download="Tafhimul_Islam_Resume.pdf"
              className="bg-brand-blue text-white px-5 py-2 rounded-md font-medium hover:bg-blue-900 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 p-6 flex flex-col space-y-4 shadow-xl"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left text-lg font-medium ${activeSection === item.id ? 'text-brand-blue' : 'text-brand-dark'}`}
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="/resume.pdf" 
                download="Tafhimul_Islam_Resume.pdf"
                className="bg-brand-blue text-white px-5 py-3 rounded-md font-medium flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-4 block">Welcome to my portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-6 leading-tight">
            Tafhimul Islam
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Student Tutor <span className="text-brand-blue font-medium">(Mathematics)</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            I am a CSE student with a strong background in mathematics. I enjoy explaining math in simple ways and helping students understand difficult topics easily.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-brand-blue text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-md font-semibold hover:bg-brand-light transition-all"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-brand-blue rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/profile.jpg" 
                alt="Tafhimul Islam" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/tutor/800/800";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-8 border-white rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                I am currently an undergraduate student pursuing a <span className="font-semibold">B.Sc. in Computer Science & Engineering</span> at AIUB. My journey in tech is deeply rooted in my love for logical reasoning and mathematical structures.
              </p>
              <p>
                With strong skills in <span className="text-brand-blue font-medium">Algebra, Calculus, and Trigonometry</span>, I bridge the gap between abstract mathematical concepts and practical computational applications.
              </p>
              <p>
                I am passionate about teaching and helping students overcome their academic hurdles. My goal is to make mathematics accessible and enjoyable for everyone I tutor.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm">
                  <GraduationCap size={20} />
                </div>
                <span className="font-medium">CSE Student</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm">
                  <Calculator size={20} />
                </div>
                <span className="font-medium">Math Expert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Mathematics', icon: <Calculator />, skills: ['Algebra', 'Calculus', 'Trigonometry'] },
              { title: 'Technical', icon: <Code />, skills: ['C++', 'Java', 'Problem Solving'] },
              { title: 'Soft Skills', icon: <Briefcase />, skills: ['Teaching', 'Communication', 'Leadership'] }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card"
              >
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center text-brand-blue mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
          </div>

          <div className="space-y-12">
            {[
              {
                role: 'Mathematics Volunteer Tutor',
                org: 'AIUB',
                period: '2023 - Present',
                desc: 'Providing academic support to fellow students in foundational mathematics courses. Organizing group study sessions and clarifying complex topics.'
              },
              {
                role: 'Private Math Tutor',
                org: 'Class 9–10 Students',
                period: '2022 - Present',
                desc: 'Helping secondary school students prepare for exams and quizzes. Focused on building strong conceptual foundations in Algebra and Geometry.'
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 relative"
              >
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-blue"></div>
                  <div className="w-0.5 h-full bg-gray-200"></div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark">{exp.role}</h3>
                      <p className="text-brand-blue font-medium">{exp.org}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { degree: 'B.Sc. in CSE', inst: 'AIUB', result: 'CGPA: 3.71', year: 'Ongoing' },
              { degree: 'HSC', inst: 'Science Group', result: 'GPA 5.00', year: '2021' },
              { degree: 'SSC', inst: 'Science Group', result: 'GPA 5.00', year: '2019' }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card text-center border-t-4 border-t-brand-blue"
              >
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue mx-auto mb-6">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 mb-2">{edu.inst}</p>
                <p className="text-brand-blue font-bold mb-4">{edu.result}</p>
                <span className="text-sm text-gray-400">{edu.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lectures Section */}
      <section id="videos" className="section-padding bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Lectures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">I regularly share mathematical explanations and academic tutorials on my YouTube channel.</p>
            <div className="w-20 h-1 bg-brand-blue mx-auto mt-4"></div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="marquee-content gap-6 px-6">
            {[
              { id: 'PuVnVG5yb6A' },
              { id: 'DniwB_ZfgXc' },
              { id: 'NssFrtmAWgU' },
              { id: '9BTkQRC3Ta8' },
              { id: 'TiPJ2WBDFaI' },
              { id: 'PuVnVG5yb6A' },
              { id: 'DniwB_ZfgXc' },
              { id: 'NssFrtmAWgU' },
              { id: '9BTkQRC3Ta8' },
              { id: 'TiPJ2WBDFaI' },
              { id: 'PuVnVG5yb6A' },
              { id: 'DniwB_ZfgXc' },
              { id: 'NssFrtmAWgU' },
              { id: '9BTkQRC3Ta8' },
              { id: 'TiPJ2WBDFaI' },
            ].map((video, idx) => (
              <div
                key={idx}
                className="w-[350px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group flex-shrink-0"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                    alt="YouTube Lecture" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-2xl">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                    <Youtube size={12} /> YouTube
                  </div>
                </div>
                <div className="p-5 text-center">
                  <a 
                    href={`https://youtube.com/watch?v=${video.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs hover:gap-3 transition-all"
                  >
                    Watch Lecture <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@thinkeasyacademy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-md font-bold hover:bg-brand-light transition-all"
          >
            <Youtube size={20} /> Visit Think Easy Academy
          </a>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Activities</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dean's List of Honor", icon: <Award /> },
              { title: "Math Olympiad Participant", icon: <Calculator /> },
              { title: "Executive Member – Science Club", icon: <Briefcase /> },
              { title: "Class Representative – AIUB", icon: <GraduationCap /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-gray-700 rounded-xl hover:bg-gray-800 transition-colors flex flex-col items-center text-center"
              >
                <div className="text-brand-blue mb-4">
                  {item.icon}
                </div>
                <h3 className="font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CS Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A selection of projects developed during my Computer Science & Engineering courses.</p>
            <div className="w-20 h-1 bg-brand-blue mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'AIUB FITNESS ZONE',
                desc: 'A comprehensive fitness management system designed for students, featuring workout tracking, progress monitoring, and a personalized dashboard to stay "addicted to getting stronger."',
                tags: ['Java', 'GUI', 'Management System'],
                image: '/fitness.jpg',
                fallback: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
                link: '#'
              },
              {
                title: 'Online Class Platform',
                desc: 'An interactive learning management system for "Think Easy Academy" that facilitates online courses, instructor profiles, and seamless student-teacher interaction.',
                tags: ['Web', 'Education', 'LMS'],
                image: '/Online Class Platform.jpg',
                fallback: 'https://picsum.photos/seed/onlineclass/800/500',
                link: 'https://thinkeasyacademy.kesug.com/login/'
              },
              {
                title: 'TO-LET BD',
                desc: 'A specialized house rental platform in Bangladesh that simplifies the process of finding and listing properties for rent with secure user authentication and property management.',
                tags: ['Database', 'Real Estate', 'Authentication'],
                image: '/TO-LET BD.jpg',
                fallback: 'https://picsum.photos/seed/house/800/500',
                link: '#'
              },
              {
                title: 'Day Planner',
                desc: 'A productivity-focused task management application that helps users plan their daily schedules, track to-dos, and manage upcoming events with a clean timeline view.',
                tags: ['Productivity', 'Java', 'UI/UX'],
                image: '/Day Planner.jpg',
                fallback: 'https://picsum.photos/seed/planner/800/500',
                link: '#'
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = project.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    View Project <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-10 text-lg">
                I'm always open to discussing new tutoring opportunities, academic collaborations, or tech projects. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-blue shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Me</p>
                    <a href="mailto:tafhimul98@gmail.com" className="text-brand-dark font-semibold hover:text-brand-blue">tafhimul98@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-blue shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Me</p>
                    <a href="tel:+8801602603802" className="text-brand-dark font-semibold hover:text-brand-blue">+8801602603802</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-blue shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-brand-dark font-semibold">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/tafhimulislam/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Your Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none" placeholder="Your Message"></textarea>
                </div>
                <button className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold hover:bg-blue-900 transition-all flex items-center justify-center gap-2">
                  Send Message
                  <ExternalLink size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tafhimul Islam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

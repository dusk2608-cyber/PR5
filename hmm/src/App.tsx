import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Menu, 
  X, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Award, 
  Car, 
  Star, 
  Users, 
  Target, 
  Zap, 
  Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data Structures ---

const PROJECTS = [
  {
    title: "Video Ads Campaign 2026",
    description: "Developed high-impact video advertisements and short-form content for digital media platforms, focusing on visual storytelling and audience engagement.",
    tech: ["Video Editing", "Short-form Content", "Visual Storytelling"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/videoads/600/400"
  },
  {
    title: "Operational Efficiency Project",
    description: "Strategized and implemented workflow improvements at Bytech Company, enhancing team collaboration and reducing operational bottlenecks.",
    tech: ["Project Strategy", "Process Improvement", "Management"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/strategy/600/400"
  },
  {
    title: "Mobile Tech Support System",
    description: "Optimized customer support workflows for mobile technology troubleshooting, improving resolution times and customer satisfaction scores.",
    tech: ["Technical Support", "Mobile Tech", "Problem Solving"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/techsupport/600/400"
  }
];

const CORE_SKILLS = [
  { name: "Professional Skills", rating: 5, icon: <Briefcase className="w-5 h-5" />, description: "Expertise in customer service, sales strategy, and real estate consulting." },
  { name: "Technology Skills", rating: 5, icon: <Cpu className="w-5 h-5" />, description: "Proficient in Google Gemini AI, MS Office, and digital media editing tools." },
  { name: "Problem Solving", rating: 5, icon: <Zap className="w-5 h-5" />, description: "Expertise in handling complex situations and finding efficient solutions." },
  { name: "Time Management", rating: 4, icon: <Clock className="w-5 h-5" />, description: "Highly organized with a strong ability to prioritize tasks and meet deadlines." },
  { name: "Sales Skills", rating: 4, icon: <Target className="w-5 h-5" />, description: "Proven track record in customer persuasion and real estate consulting." },
  { name: "Teamwork", rating: 4, icon: <Users className="w-5 h-5" />, description: "Effective collaborator with strong communication and interpersonal skills." }
];

const EXPERIENCE = [
  {
    company: "Digital Media Agency",
    role: "Video Ads Editor & Short-form Content Creator",
    period: "2026 - Present",
    description: "Crafting high-impact video advertisements and engaging short-form content for various digital platforms. Specialized in rapid editing and visual storytelling.",
    skills: ["Video Editing", "Short-form Content", "Visual Storytelling"]
  },
  {
    company: "Bytech Company",
    role: "Intern & Project Strategist",
    period: "2025",
    description: "Developed and proposed innovative projects to improve company workflows and operational efficiency. Collaborated with cross-functional teams to implement process enhancements.",
    skills: ["Project Management", "Process Improvement", "Strategic Planning"]
  },
  {
    company: "Tech Support Center",
    role: "Mobile Technology Customer Support Specialist",
    period: "2023",
    description: "Assisted customers with technical troubleshooting, mobile device configurations, and software updates. Provided expert advice on mobile technology solutions.",
    skills: ["Technical Support", "Mobile Tech", "Problem Solving"]
  },
  {
    company: "Financial Institution",
    role: "Customer Service Representative",
    period: "2022",
    description: "Handled financial inquiries and provided tailored solutions for clients. Maintained high customer satisfaction ratings through effective communication and problem resolution.",
    skills: ["Customer Service", "Financial Consulting", "Communication"]
  },
  {
    company: "Local Coffee Shop",
    role: "Coffee Shop Staff",
    period: "2021",
    description: "Provided excellent customer service and maintained shop operations in a fast-paced environment. Managed inventory and handled point-of-sale transactions.",
    skills: ["Customer Relations", "Operations", "Teamwork"]
  }
];

const EDUCATION = [
  {
    school: "University of Economics & Business",
    degree: "Bachelor of Business Administration",
    period: "2022 - 2026",
    description: "Graduated with an Excellent degree. Focused on strategic management, marketing, and business operations. Developed a strong foundation in organizational leadership.",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    school: "Google Certification",
    degree: "Google Gemini AI Professional Certification",
    period: "2026",
    description: "Advanced certification in leveraging Google Gemini AI models for business productivity and creative workflows.",
    icon: <Award className="w-6 h-6" />
  },
  {
    school: "Information Technology Center",
    degree: "Microsoft Office Specialist (Basic & Advanced)",
    period: "2022 - 2023",
    description: "Proficient in advanced Excel, Word, and PowerPoint for professional business documentation and data analysis.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    school: "Department of Transportation",
    degree: "Automobile Driver's License",
    period: "2023",
    description: "Licensed for operating passenger vehicles, ensuring mobility and flexibility for professional requirements.",
    icon: <Car className="w-6 h-6" />
  }
];

// --- Main Application Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter">HUY HOÀNG</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all transform hover:scale-105">
                Resume
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-400">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f0f0f] border-b border-white/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="block w-full text-left px-3 py-4 text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-4 px-3">
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium">
                    Download Resume
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                Available for new opportunities
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Dynamic Professional <br className="hidden md:block" />
                Focused on Excellence
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                I'm <span className="text-white font-semibold">Huy Hoàng</span>, a dynamic, enthusiastic, and responsible professional with diverse experience in customer service, sales, and real estate consulting.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollTo('projects')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  View My Work <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-20 flex justify-center gap-8 text-gray-500"
            >
              <a href="#" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full" />
                About Me
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I am a dynamic, enthusiastic, and responsible professional with diverse experience in customer service, sales, and real estate consulting. 
                  I am consistently committed to delivering high efficiency and the best possible customer experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-blue-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-bold">Location</p>
                      <p className="text-gray-200">Ha Noi City, VN</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-blue-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-bold">Phone</p>
                      <p className="text-gray-200">0372126804</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-blue-500">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-bold">Education</p>
                      <p className="text-gray-200">Business Administration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-blue-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase font-bold">Email</p>
                      <p className="text-gray-200">Dusk2608@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                <img 
                  src="https://ais-dev-pf6xdiroiytkxyaaj6lqni-750385998051.asia-southeast1.run.app/api/attachments/huyhoang_portrait.jpg" 
                  alt="Huy Hoàng" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-blue-500" />
                Experience
              </h2>
              <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                {EXPERIENCE.map((exp, idx) => (
                  <motion.div
                    key={`${exp.company}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#0a0a0a] border-2 border-blue-600 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                      </div>
                      <p className="text-blue-400 font-medium mb-4">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-500" />
                Education & Skills
              </h2>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={`${edu.school}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      {edu.icon}
                    </div>
                    <span className="text-xs font-bold text-blue-500 mb-2 block">{edu.period}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium mb-4">{edu.school}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <p className="text-gray-400">Key professional strengths and expertise levels.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {CORE_SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < skill.rating ? 'fill-blue-500 text-blue-500' : 'text-gray-700'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400">A selection of my recent work and open-source contributions.</p>
            </div>
            <a href="#" className="text-blue-500 font-medium flex items-center gap-2 hover:underline">
              View all projects <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.github} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-[#0f0f0f]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-blue-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-10">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a 
                href="mailto:Dusk2608@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                <Mail className="w-5 h-5" /> Email Me
              </a>
              <a 
                href="tel:0372126804"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5" /> 0372126804
              </a>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm">© 2026 Huy Hoàng. Built with React & Tailwind.</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import GeoEngine from './components/GeoEngine';
import OreanStudio from './components/OreanStudio';
import Arcade3D from './components/Arcade3D';

function App() {
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@vidathdassanayake.me');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        setCurrentProject(hash);
        // Scroll the main content area to top when the route changes
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else if (hash === '' || hash === '#') {
        setCurrentProject(null);
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        // If it's a main section hash on initial load (like #skills)
        const isMainSection = ['#bio', '#projects', '#skills', '#about', '#education'].includes(hash);
        if (isMainSection) {
          setCurrentProject(null);
          setTimeout(() => {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    };

    // Global click handler to intercept anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        if (href.startsWith('#project/')) {
          return;
        }

        // If it's a main page section link (#bio, #projects, #skills, #education)
        const isMainSection = ['#bio', '#projects', '#skills', '#about', '#education'].includes(href);

        if (isMainSection) {
          // If we are currently inside a project view, we need to unmount the project view
          // and go back to the main view.
          if (currentProject !== null) {
            e.preventDefault();
            setCurrentProject(null);
            window.location.hash = href;
            setTimeout(() => {
              const element = document.getElementById(href.substring(1));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 100);
            return;
          }
        }

        // For other internal section anchors on the current page (e.g. #docker)
        if (href !== '#' && href !== '#/') {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(decodeURIComponent(id));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    // Initialize state from current location hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Determine which page view to render
  const renderContent = () => {
    switch (currentProject) {
      case '#project/geo-engine':
        return <GeoEngine />;
      case '#project/orean-studio':
        return <OreanStudio />;
      case '#project/3d-arcade':
        return <Arcade3D />;
      default:
        return (
          <div className="space-y-12">
            <Bio />
            <Projects />
            <Skills />
            <Education />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-900 font-sans">
      
      {/* Navigation */}
      <div className="w-full fixed bottom-0 left-0 md:top-0 md:bottom-auto md:w-32 md:h-full bg-gray-200 z-50 md:border-r border-gray-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-none">
        <Navbar currentProject={currentProject} />
      </div>

      {/* Main Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 md:ml-32 overflow-y-auto h-screen scroll-smooth flex flex-col justify-between pb-16 md:pb-0"
      >
        <div className="p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-[#284bbe] text-white py-8 px-6 md:py-12 md:px-8 text-sm">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/20 pb-8 mb-6">
            
            {/* Left Column: Copyright & Status */}
            <div className="space-y-4 text-left">
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-white/70">
                Status
              </div>
              <div className="flex items-center bg-white/10 px-3 py-1.5 rounded-lg w-fit">
                <span className="relative flex h-2.5 w-2.5 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium">Available for opportunities</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed pt-2">
                © {new Date().getFullYear()} Vidath Vimansana Dassanayake.<br />All rights reserved.
              </p>
            </div>

            {/* Middle Column: Quick Navigation */}
            <div className="space-y-4 text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Navigation
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <a href="#bio" className="hover:underline text-white/90 hover:text-white">Bio</a>
                <a href="#projects" className="hover:underline text-white/90 hover:text-white">Projects</a>
                <a href="#skills" className="hover:underline text-white/90 hover:text-white">Skills</a>
                <a href="#about" className="hover:underline text-white/90 hover:text-white">About Me</a>
                <a href="#education" className="hover:underline text-white/90 hover:text-white">Education</a>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }} 
                  className="hover:underline text-white/90 hover:text-white col-span-2 pt-1 flex items-center gap-1"
                >
                  Back to Top ↑
                </a>
              </div>
            </div>

            {/* Right Column: Contact & Socials */}
            <div className="space-y-4 text-left md:text-right md:items-end flex flex-col">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70 w-full">
                Connect & Contact
              </div>
              
              <button 
                onClick={handleCopyEmail}
                className="bg-white text-[#284bbe] px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all text-xs shadow-xs w-fit block text-center focus:outline-hidden"
              >
                {copiedEmail ? 'Email Copied!' : 'Contact Me: hello@vidathdassanayake.me'}
              </button>

              <div className="flex gap-4 pt-2 items-center">
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-opacity"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-opacity"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              <div className="flex items-center text-xs text-white/90 gap-1.5 font-medium px-1">
                <span>📍</span> Colombo, Sri Lanka
              </div>
            </div>

          </div>

          <div className="max-w-4xl mx-auto text-center text-xs text-white/50">
            Built with React & Tailwind CSS
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
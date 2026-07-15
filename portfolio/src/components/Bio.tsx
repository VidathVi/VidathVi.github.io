import { useState } from 'react';

export default function Bio() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@vidathdassanayake.me');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <section id="bio" className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center pt-0 md:pt-12">
        {/* Name block — on mobile: order 1, on desktop: part of the left column */}
        <div className="flex-1 space-y-4 order-1 md:order-none">
          <div className="space-y-1">
            <span className="text-lg text-white/60 font-medium block">Hi, my name is</span>
            <h1 className="text-5xl font-extrabold text-white tracking-tight">Vidath Dassanayake</h1>
          </div>

          <h2 className="text-2xl text-blue-100 font-bold" style={{ letterSpacing: '0.012em' }}>I automate scaling and eliminate downtime</h2>
          <p className="text-white/80 leading-relaxed max-w-2xl">
            DevOps & Cloud Engineer specializing in secure containerization, and zero-downtime CI/CD pipelines.
          </p>

          {/* Profile Picture — mobile only, shown below description */}
          <div className="relative flex-shrink-0 md:hidden self-center mx-auto">
            <div className="absolute top-2 right-[-6px] w-44 h-56 bg-[#284bbe] z-0" />
            <div className="relative w-56 h-56 bg-gray-100 rounded-none overflow-hidden shadow-xs z-10">
              <img 
                src="/profile.png" 
                alt="Vidath Dassanayake" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="pt-4 space-y-2.5 text-base text-white/80">
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
              </svg>
              <a href="mailto:hello@vidathdassanayake.me" className="hover:underline hover:text-white transition-colors font-medium">
                hello@vidathdassanayake.me
              </a>
              <button 
                onClick={handleCopy}
                className="ml-1 p-1.5 text-white/60 hover:text-white rounded-md transition-colors duration-200 focus:outline-hidden"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <span className="text-[11px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">Copied!</span>
                ) : (
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                )}
              </button>
            </p>
            <div className="flex gap-3 pt-2 items-center">
              <div className="flex items-center gap-1">
                <a 
                  href="/CV.pdf" 
                  download="Vidath_Dassanayake_Resume.pdf"
                  className="flex items-center gap-2 bg-white text-[#284bbe] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-bold shadow-xs"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                  </svg>
                  <span>Resume</span>
                </a>

                <div className="relative group/tooltip flex items-center">
                  <a 
                    href="/CV.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white p-1.5 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[11px] font-bold text-gray-800 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-75 ease-out scale-95 group-hover/tooltip:scale-100 origin-bottom whitespace-nowrap z-50">
                    Open CV in new tab
                  </span>
                </div>
              </div>
              <a 
                href="https://github.com/VidathVi" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white border border-transparent hover:border-white/30 hover:bg-white/10 px-3 py-2 rounded-lg transition-all text-sm font-medium group"
              >
                <img src="/github-icon.png" alt="GitHub" className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vidathdassanayake" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white border border-transparent hover:border-white/30 hover:bg-white/10 px-3 py-2 rounded-lg transition-all text-sm font-medium group"
              >
                <img src="/linkedin-icon.png" alt="LinkedIn" className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="pt-2">
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-[#284bbe] transition-all duration-200 text-sm font-bold shadow-xs"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile Picture — desktop only (right side) */}
        <div className="relative flex-shrink-0 hidden md:block">
          {/* Solid decorative square underneath */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#284bbe] z-0" />
          <div className="relative w-56 h-56 bg-gray-100 rounded-none overflow-hidden shadow-xs z-10">
            <img 
              src="/profile.png" 
              alt="Vidath Dassanayake" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
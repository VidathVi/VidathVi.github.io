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
      <section id="bio" className="flex flex-col md:flex-row gap-8 items-start pt-12">
        <div className="flex-1 space-y-4">
          <div className="space-y-1">
            <span className="text-lg text-[#db2777] font-medium block">Hi, my name is</span>
            <h1 className="text-5xl font-bold text-[#284bbe] tracking-tight">Vidath Dassanayake</h1>
          </div>
          <h2 className="text-2xl text-[#1e3a8a] font-bold" style={{ letterSpacing: '0.012em' }}>I automate scaling and eliminate downtime</h2>
          <p className="text-black leading-relaxed max-w-2xl">
            DevOps & Cloud Engineer specializing in secure containerization, and zero-downtime CI/CD pipelines.
          </p>
          <div className="pt-4 space-y-2.5 text-base text-black">
            <p className="flex items-center gap-2">
              <img src="/mail-icon.png" alt="Email" className="w-5 h-5 object-contain flex-shrink-0" />
              <a href="mailto:hello@vidathdassanayake.me" className="hover:underline hover:text-[#284bbe] transition-colors font-medium">
                hello@vidathdassanayake.me
              </a>
              <button 
                onClick={handleCopy}
                className="ml-1 p-1.5 text-gray-400 hover:text-[#284bbe] rounded-md transition-colors duration-200 focus:outline-hidden"
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
                  className="flex items-center gap-2 bg-[#284bbe] text-white px-4 py-2 rounded-lg hover:bg-[#1e3995] transition-colors text-sm font-medium shadow-xs"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                  </svg>
                  <span>Resume</span>
                </a>

                <a 
                  href="/CV.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#284bbe] p-1.5 transition-colors"
                  title="View Resume in new tab"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                  </svg>
                </a>
              </div>
              <a 
                href="https://github.com/VidathVi" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 border border-transparent hover:border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all text-sm font-medium group"
              >
                <img src="/github-icon.png" alt="GitHub" className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vidathdassanayake" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 border border-transparent hover:border-gray-300 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all text-sm font-medium group"
              >
                <img src="/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="pt-2">
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-2 bg-[#db2777] text-white px-5 py-2.5 rounded-lg hover:bg-[#be185d] transition-all duration-200 text-sm font-medium shadow-xs hover:shadow-md"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Profile Picture */}
        <div className="w-56 h-56 bg-gray-100 rounded-2xl flex-shrink-0 overflow-hidden border border-gray-200 shadow-xs">
          <img 
            src="/profile.png" 
            alt="Vidath Dassanayake" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Connected About Me section */}
      <div id="about" className="pt-8 border-t border-gray-200 space-y-4">
        <h3 className="text-xl font-bold text-[#284bbe]">About Me</h3>
        <div className="text-black text-sm md:text-base leading-relaxed">
          <p>
            I am a DevOps-focused software developer currently studying computer science at the Informatics Institute of Technology(IIT). I design production-ready setups using Docker, Kubernetes, and Terraform. My practical experience includes implementing background worker queues that scale-to-zero using BullMQ, Redis and KEDA autoscaling and deploying optimized container builds that slash image sizes through multi-stage builds. In addition to DevOps and cloud infrastructure, I have a strong interest in 3D animation and Game development, and I have experience with Blender, Unity, and unreal engine 5
          </p>
        </div>
      </div>
    </div>
  );
}
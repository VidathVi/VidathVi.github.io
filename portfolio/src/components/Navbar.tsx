interface NavbarProps {
  currentProject: string | null;
}

export default function Navbar({ currentProject }: NavbarProps) {
  if (currentProject) {
    return (
      <div className="flex flex-row md:flex-col items-center justify-around md:justify-start py-2 md:py-10 px-2 space-y-0 md:space-y-4 h-full text-gray-500 w-full overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <a 
          href="#" 
          className="hidden md:flex font-black text-lg text-[#284bbe] border-2 border-[#284bbe] rounded-full w-12 h-12 items-center justify-center hover:bg-[#284bbe] hover:text-white transition-all mb-4 tracking-tighter shrink-0"
        >
          VD
        </a>
        
        <span className="hidden md:block text-[11px] font-bold text-gray-500 uppercase tracking-widest py-2 text-center">Projects</span>
        
        <a 
          href="#project/orean-studio" 
          className={`px-3 md:w-full text-center py-2 md:py-2.5 md:px-2 rounded-lg text-sm font-semibold transition-all ${
            currentProject === '#project/orean-studio' 
              ? 'bg-[#284bbe]/10 text-[#284bbe] border-b-2 md:border-b-0 md:border-l-4 border-[#284bbe] font-bold' 
              : 'text-gray-600 hover:text-[#284bbe] hover:bg-gray-100'
          }`}
        >
          Orean
        </a>
        <a 
          href="#project/geo-engine" 
          className={`px-3 md:w-full text-center py-2 md:py-2.5 md:px-2 rounded-lg text-sm font-semibold transition-all ${
            currentProject === '#project/geo-engine' 
              ? 'bg-[#284bbe]/10 text-[#284bbe] border-b-2 md:border-b-0 md:border-l-4 border-[#284bbe] font-bold' 
              : 'text-gray-600 hover:text-[#284bbe] hover:bg-gray-100'
          }`}
        >
          GEO Engine
        </a>
        <a 
          href="#project/3d-arcade" 
          className={`px-3 md:w-full text-center py-2 md:py-2.5 md:px-2 rounded-lg text-sm font-semibold transition-all ${
            currentProject === '#project/3d-arcade' 
              ? 'bg-[#284bbe]/10 text-[#284bbe] border-b-2 md:border-b-0 md:border-l-4 border-[#284bbe] font-bold' 
              : 'text-gray-600 hover:text-[#284bbe] hover:bg-gray-100'
          }`}
        >
          3D Arcade
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-row md:flex-col items-center justify-around md:justify-start py-2 md:py-10 space-y-0 md:space-y-8 h-full text-gray-500 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2">
      <a 
        href="#" 
        className="hidden md:flex font-black text-lg text-[#284bbe] border-2 border-[#284bbe] rounded-full w-12 h-12 items-center justify-center hover:bg-[#284bbe] hover:text-white transition-all tracking-tighter shrink-0"
      >
        VD
      </a>
      
      <a href="#bio" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/bio-icon.png" alt="Bio" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-85 group-hover:opacity-100 transition-opacity" />
        <span>Bio</span>
      </a>
      
      <a href="#projects" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/projects-icon.png" alt="Projects" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-85 group-hover:opacity-100 transition-opacity" />
        <span>Projects</span>
      </a>
      
      <a href="#skills" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/skills-icon.png" alt="Skills" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-85 group-hover:opacity-100 transition-opacity" />
        <span>Skills</span>
      </a>
      
      <a href="#certificates" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[9px] md:text-xs text-center group shrink-0 px-1 md:px-0">
        <svg className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-85 group-hover:opacity-100 transition-opacity fill-current text-[#284bbe]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
        <span>Certifications</span>
      </a>
      
      <a href="#education" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/education-icon.png" alt="Education" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-85 group-hover:opacity-100 transition-opacity" />
        <span>Education</span>
      </a>

      <a href="#about" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <svg className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-85 group-hover:opacity-100 transition-opacity fill-current text-[#284bbe]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
        <span>About</span>
      </a>
    </div>
  );
}
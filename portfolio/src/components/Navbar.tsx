interface NavbarProps {
  currentProject: string | null;
}

export default function Navbar({ currentProject }: NavbarProps) {
  if (currentProject) {
    return (
      <div className="flex flex-row md:flex-col items-center justify-around md:justify-start py-2 md:py-10 px-2 space-y-0 md:space-y-4 h-full text-gray-500 w-full overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <a href="#" className="hidden md:block font-bold text-xl text-gray-800 border-b-2 border-gray-800 pb-1 mb-4 hover:text-[#284bbe] hover:border-[#284bbe] transition-colors">VD</a>
        
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
      <a href="#" className="hidden md:block font-bold text-xl text-gray-800 border-b-2 border-gray-800 pb-1 hover:text-[#284bbe] hover:border-[#284bbe] transition-colors shrink-0">VD</a>
      
      <a href="#bio" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/bio-icon.png" alt="Bio" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
        <span>Bio</span>
      </a>
      
      <a href="#projects" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/projects-icon.png" alt="Projects" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
        <span>Projects</span>
      </a>
      
      <a href="#skills" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/skills-icon.png" alt="Skills" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
        <span>Skills</span>
      </a>
      
      <a href="#education" className="flex flex-col items-center gap-1 hover:text-[#284bbe] transition-colors font-semibold text-[10px] md:text-base group shrink-0 px-2 md:px-0">
        <img src="/education-icon.png" alt="Education" className="w-5 h-5 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
        <span>Education</span>
      </a>
    </div>
  );
}
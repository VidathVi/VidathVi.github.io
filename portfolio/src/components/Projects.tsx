export default function Projects() {
  return (
    <section id="projects" className="space-y-8 pt-16 border-t border-white/20">
      <h3 className="text-2xl font-bold text-white">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* OreanStudio */}
        <a 
          href="#project/orean-studio" 
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#284bbe]/30 group block text-left"
        >
          <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#284bbe] transition-colors">OreanStudio</h4>
          <p className="text-xs font-mono text-[#284bbe] mb-3 mt-1">Next.js 16 • Express • PostgreSQL • GKE • Docker • Terraform</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A social media automation platform with media transcoding, KEDA autoscaling, and edge edge-security gateways.
          </p>
          <span className="text-xs font-semibold text-[#284bbe] group-hover:underline">View Summary →</span>
        </a>

        {/* GEO Engine */}
        <a 
          href="#project/geo-engine" 
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#284bbe]/30 group block text-left"
        >
          <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#284bbe] transition-colors">GEO Engine</h4>
          <p className="text-xs font-mono text-[#284bbe] mb-3 mt-1">Python • PyTorch • WSL2 • Docker</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            An automated content generation pipeline and LLM fine-tuning system designed under zero-cost constraints.
          </p>
          <span className="text-xs font-semibold text-[#284bbe] group-hover:underline">View Summary →</span>
        </a>

        {/* 3D Interactive Arcade */}
        <a 
          href="#project/3d-arcade" 
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#284bbe]/30 group block text-left"
        >
          <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#284bbe] transition-colors">3D Interactive Arcade</h4>
          <p className="text-xs font-mono text-[#284bbe] mb-3 mt-1">C# • Unity 6 • Blender</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A first-person 3D arcade simulator with a central exploration hub, custom character controller, dialogue system, and mini-games.
          </p>
          <span className="text-xs font-semibold text-[#284bbe] group-hover:underline">View Summary →</span>
        </a>

      </div>
    </section>
  );
}
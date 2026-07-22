export default function Skills() {
  return (
    <section id="skills" className="space-y-6 pt-16 border-t border-white/20">
      <h3 className="text-2xl font-bold text-white">Skills</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Languages Card */}
        <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-xs font-mono text-[15px] leading-relaxed p-5 select-text flex flex-col">
          <pre className="space-y-1">
            <div>
              <span className="text-[#0451a5]"># Programming Languages</span>
            </div>
            <div>
              <span className="text-black">languages:</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">Python</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">JavaScript</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">Java</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">C#</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">C</span>
            </div>
          </pre>
        </div>

        {/* DevOps Card */}
        <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-xs font-mono text-[15px] leading-relaxed p-5 select-text flex flex-col">
          <pre className="space-y-1">
            <div>
              <span className="text-[#0451a5]"># Infrastructure & CI/CD</span>
            </div>
            <div>
              <span className="text-black">devops_cloud:</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">Docker</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">Kubernetes</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">Terraform</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">Google Cloud Platform</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">CI/CD (GitHub Actions)</span>
            </div>
          </pre>
        </div>

        {/* APIs Card */}
        <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-xs font-mono text-[15px] leading-relaxed p-5 select-text flex flex-col">
          <pre className="space-y-1">
            <div>
              <span className="text-[#0451a5]"># Integration & Architecture</span>
            </div>
            <div>
              <span className="text-black">development_apis:</span>
            </div>
            <div>
              <span className="text-gray-400">  -</span> <span className="text-[#0451a5]">REST API</span>
            </div>
          </pre>
        </div>

      </div>
    </section>
  );
}
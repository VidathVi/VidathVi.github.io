export default function About() {
  return (
    <section id="about" className="pt-16 pb-24 border-t border-white/20 space-y-4">
      <h3 className="text-xl font-bold text-white">About Me</h3>
      <div className="text-white/90 text-sm md:text-base leading-relaxed">
        <p>
          I am a DevOps-focused software developer currently studying computer science at the Informatics Institute of Technology(IIT). I design production-ready setups using Docker, Kubernetes, and Terraform. My practical experience includes implementing background worker queues that scale-to-zero using BullMQ, Redis and KEDA autoscaling and deploying optimized container builds that slash image sizes through multi-stage builds. In addition to DevOps and cloud infrastructure, I have a strong interest in 3D animation and Game development, and I have experience with Blender, Unity, and unreal engine 5
        </p>
      </div>
    </section>
  );
}

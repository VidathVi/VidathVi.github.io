export default function AboutMe() {
  return (
    <section id="about" className="space-y-6 pt-16 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-[#284bbe]">About Me</h3>
      <div className="text-black text-base leading-relaxed">
        <p>
          I am a DevOps-focused software developer currently studying computer science at the Informatics Institute of Technology(IIT). I design production-ready setups using Docker, Kubernetes, and Terraform. My practical experience includes implementing background worker queues that scale-to-zero using BullMQ, Redis and KEDA autoscaling and deploying optimized container builds that slash image sizes through multi-stage builds. In addition to DevOps and cloud infrastructure, I have a strong interest in 3D animation and Game development, and I have experience with Blender, Unity, and unreal engine 5
        </p>
      </div>
    </section>
  );
}

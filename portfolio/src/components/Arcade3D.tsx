export default function Arcade3D() {
  return (
    <div className="space-y-8">
      {/* Header Box */}
      <div className="bg-gray-200 p-12 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-5xl font-bold text-gray-900">3D Interactive Arcade</h2>
          <div className="mt-5">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider block">Skill Usage</span>
            <div className="text-sm font-mono text-gray-500 mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <a href="#csharp" className="text-blue-600 hover:underline">C#</a>
              <span>•</span>
              <a href="#blender" className="text-blue-600 hover:underline">Blender</a>
              <span>•</span>
              <a href="#unity" className="text-blue-600 hover:underline">Unity</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 font-medium whitespace-nowrap">
          <a 
            href="https://github.com/VidathVi/3DArcadeProject" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
          >
            <img src="/github-icon.png" alt="GitHub" className="w-4 h-4 object-contain flex-shrink-0" />
            <span>GitHub Repository</span>
            <img src="/redirect-icon.png" alt="Redirect" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
          </a>
          <a 
            href="#" 
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 mt-2 flex items-center gap-1"
          >
            <span>← Back to Portfolio</span>
          </a>
        </div>
      </div>

      {/* Body Box */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">

<section id="technical-summary-3d-interactive-arcade" className="scroll-mt-10 space-y-4"><h1 id="technical-summary-3d-interactive-arcade" className="text-3xl font-bold text-gray-900 mt-8 mb-4">Technical Summary: 3D Interactive Arcade</h1>
<p className="my-4 leading-relaxed text-gray-700">A first-person 3D arcade simulator built in Unity using LEGO-style assets. The project contains a central exploration hub, dialogue paths, and four custom mini-games.</p>

      {/* Tech Stack Section */}
      <div className="mb-8 p-6 bg-gradient-to-r from-[#284bbe]/5 to-[#284bbe]/10 border border-[#284bbe]/20 rounded-xl shadow-xs">
        <h3 className="text-lg font-semibold text-[#284bbe] mb-4 flex items-center gap-2">
          <img src="/tech-stack-icon.png" alt="Tech Stack Icon" className="w-6 h-6 object-contain" />
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {['C#', 'Blender', 'Unity'].map((tech) => (
            <span key={tech} className="text-sm px-3 py-1.5 bg-[#284bbe]/10 text-[#284bbe] rounded-lg font-semibold border border-[#284bbe]/20">{tech}</span>
          ))}
        </div>
      </div>

<hr className="my-8 border-gray-200" />
</section>
<section id="1-project-concept-and-gameplay-loop" className="scroll-mt-10 space-y-4"><h2 id="1-project-concept-and-gameplay-loop" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">1. Project concept and gameplay loop</h2>
<p className="my-4 leading-relaxed text-gray-700">The game builds a LEGO-themed arcade room where the player walks around in a first-person view.</p>
<p className="my-4 leading-relaxed text-gray-700">Upon spawning, the player wakes up on the floor of a dimly lit arcade room. They must walk over to the main counter and talk to an NPC named Max the Rabbit. Conversing with Max introduces the environment, shows how to interact with objects, and unlocks the rest of the arcade.</p>
<p className="my-4 leading-relaxed text-gray-700">Once unlocked, the player explores a central hub containing several custom arcade cabinets. Walking up to a cabinet and interacting with it transitions the scene into that cabinet&#x27;s mini-game.</p>
<hr className="my-8 border-gray-200" />
</section>
<section id="2-technical-architecture-and-navigation-framework" className="scroll-mt-10 space-y-4"><div id="csharp" className="scroll-mt-16" />
<div id="unity" className="scroll-mt-16" />
<h2 id="2-technical-architecture-and-navigation-framework" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">2. Technical architecture and navigation framework</h2>
<p className="my-4 leading-relaxed text-gray-700">The project is built in Unity 6 and written entirely in C#. C# scripts control the character controller, camera movements, collision physics, and mini-game logic.</p>
<h3 id="firstperson-controller" className="text-xl font-bold text-gray-800 mt-6 mb-3">First-person controller</h3>
<p className="my-4 leading-relaxed text-gray-700">The player character moves using a Unity Character Controller component. Keyboard input (WASD) handles movement, and the mouse handles looking around. The main camera is attached to the player&#x27;s head, with its rotation clamped to prevent the camera from clipping or spinning upside down. Collisions with walls and objects are managed by combining the Character Controller with a Rigidbody component.</p>
<h3 id="scene-transitions" className="text-xl font-bold text-gray-800 mt-6 mb-3">Scene transitions</h3>
<p className="my-4 leading-relaxed text-gray-700">Each arcade cabinet functions as a portal. When the player stands near a cabinet and presses the action key, a C# script triggers a Unity scene transition to load that specific mini-game.</p>
<hr className="my-8 border-gray-200" />
</section>
<section id="3-asset-design-and-production-pipeline" className="scroll-mt-10 space-y-4"><div id="blender" className="scroll-mt-16" />
<h2 id="3-asset-design-and-production-pipeline" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">3. Asset design and production pipeline</h2>
<p className="my-4 leading-relaxed text-gray-700">The project uses a LEGO visual theme built through Blender and Mecabricks.</p>
<h3 id="3d-modeling" className="text-xl font-bold text-gray-800 mt-6 mb-3">3D modeling</h3>
<ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
  <li>  <strong>Arcade cabinets:</strong> Sourced or modified from the Mecabricks library, using LEGO set 40805 as a design reference.</li>
  <li>  <strong>Custom assets:</strong> The Air Hockey table, puck, paddle, and the NPC cashier were modeled from scratch in Blender.</li>
  <li>  <strong>Lego minifigure construction:</strong> Built in Blender by beveling a cylinder for the head, stitching cylinders using Bridge Edge Loops for the arms, deleting cylinder faces and adding a Solidify modifier for the hands, deforming a cube for the torso, and using two separate cube meshes for the legs.</li>
</ul>
<h3 id="animation-and-physics" className="text-xl font-bold text-gray-800 mt-6 mb-3">Animation and physics</h3>
<ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
  <li>  <strong>NPC animations:</strong> Rigged in Blender and imported into Unity to handle idle, talking, and clapping states for Max the Rabbit.</li>
  <li>  <strong>Mini-game movement:</strong> The targets in the Target Shooter move back and forth using translation loop animations.</li>
  <li>  <strong>Physics materials:</strong> The Air Hockey mini-game uses custom Unity physics materials to make the puck bounce realistically off the table and paddles.</li>
</ul>
<h3 id="shading-texturing-and-lighting" className="text-xl font-bold text-gray-800 mt-6 mb-3">Shading, texturing, and lighting</h3>
<ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
  <li>  <strong>Textures:</strong> The NPC was textured in Blender before export. Other models use standard materials provided by Mecabricks.</li>
  <li>  <strong>Lighting cues:</strong> Instead of using long text instructions, the game uses real-time lighting to guide the player, such as a spotlight highlighting the cashier&#x27;s counter.</li>
</ul>
<hr className="my-8 border-gray-200" />
</section>
<section id="4-interactive-minigame-suite" className="scroll-mt-10 space-y-4"><h2 id="4-interactive-minigame-suite" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">4. Interactive mini-game suite</h2>
<p className="my-4 leading-relaxed text-gray-700">Each arcade machine hosts a distinct, isolated interactive experience with custom control schemas.</p>
<div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-2xs">
  <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
    <thead className="bg-gray-50 text-gray-700 font-semibold uppercase tracking-wider">
      <tr>
        <th className="px-6 py-3 border-b border-gray-200">Mini-game</th>
        <th className="px-6 py-3 border-b border-gray-200">Core mechanics</th>
        <th className="px-6 py-3 border-b border-gray-200">UI and win conditions</th>
        <th className="px-6 py-3 border-b border-gray-200">Input controls</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 bg-white text-gray-600">
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 border-b border-gray-200">Target Shooter</td>
        <td className="px-6 py-4 border-b border-gray-200">Shooting moving targets in a restricted environment.</td>
        <td className="px-6 py-4 border-b border-gray-200">Score UI tracks shots; requires shooting down 8 targets before ammo depletion.</td>
        <td className="px-6 py-4 border-b border-gray-200">Mouse (Aim/Shoot), restricted movement.</td>
      </tr>
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 border-b border-gray-200">Air Hockey</td>
        <td className="px-6 py-4 border-b border-gray-200">Deflect computer-shot pucks into a goal.</td>
        <td className="px-6 py-4 border-b border-gray-200">First to deflect 12 pucks into the computer&#x27;s goal wins.</td>
        <td className="px-6 py-4 border-b border-gray-200">Mouse (direct 2D mapping to paddle).</td>
      </tr>
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 border-b border-gray-200">Flappy Bird</td>
        <td className="px-6 py-4 border-b border-gray-200">Directing a character past vertical obstacles.</td>
        <td className="px-6 py-4 border-b border-gray-200">Persistent score counter.</td>
        <td className="px-6 py-4 border-b border-gray-200">Keyboard (Spacebar only).</td>
      </tr>
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 border-b border-gray-200">Crane Game</td>
        <td className="px-6 py-4 border-b border-gray-200">Controlling a mechanical claw.</td>
        <td className="px-6 py-4 border-b border-gray-200">Item retrieval rewards.</td>
        <td className="px-6 py-4 border-b border-gray-200">Keyboard (Spacebar for movement/claw drop) + Mouse (camera adjustments).</td>
      </tr>
    </tbody>
  </table>
</div>
<hr className="my-8 border-gray-200" />
</section>
<section id="5-team-roles-and-contributions" className="scroll-mt-10 space-y-4"><h2 id="5-team-roles-and-contributions" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">5. Team roles and contributions</h2>
<p className="my-4 leading-relaxed text-gray-700">The project was built by Group 01, divided into coding, asset design, and project planning roles.</p>
<h3 id="vidath-dassanayake-w2121281-20241012" className="text-xl font-bold text-gray-800 mt-6 mb-3">Vidath Dassanayake (w2121281 / 20241012)</h3>
<ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
  <li>  <strong>Code:</strong> Programmed the first-person controller for the hub, mouse movement scripts for the Air Hockey paddle, UI scorekeeping, and win conditions.</li>
  <li>  <strong>Assets:</strong> Modeled the Air Hockey table, puck, and paddle in Blender, set up physics materials, and designed the Air Hockey and Target Shooter environments.</li>
  <li>  <strong>Project management:</strong> Organized group files, managed version control, created presentation slides (for proposal, planning, and work-in-progress videos), and wrote peer review documents for Group 4.</li>
</ul>
<h3 id="aaqil-amjah-w2120164-20240950" className="text-xl font-bold text-gray-800 mt-6 mb-3">Aaqil Amjah (w2120164 / 20240950)</h3>
<ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
  <li>  <strong>Code:</strong> Programmed the dialogue system, opening cutscene, minifigure viewer, and general hub interactions.</li>
  <li>  <strong>Assets:</strong> Created animations and Blender rigs for Max the Rabbit. Designed and scripted the Crane Game.</li>
  <li>  <strong>Media:</strong> Edited the group video submission.</li>
</ul>
<h3 id="thevindi-methlini-w2153572-20232776" className="text-xl font-bold text-gray-800 mt-6 mb-3">Thevindi Methlini (w2153572 / 20232776)</h3>
<ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
  <li>  <strong>UI design:</strong> Designed user interfaces inspired by Sonic Mania and Hollow Knight.</li>
  <li>  <strong>Level design:</strong> Planned the layout and placed assets in the main arcade hub.</li>
  <li>  <strong>Mini-game:</strong> Built the Flappy Bird mechanics.</li>
  <li>  <strong>Diagrams:</strong> Created the use-case diagrams.</li>
</ul>
<hr className="my-8 border-gray-200" />
</section>
<section id="6-project-management-and-ai-usage" className="scroll-mt-10 space-y-4"><h2 id="6-project-management-and-ai-usage" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">6. Project management and AI usage</h2>
<h3 id="development-methodology" className="text-xl font-bold text-gray-800 mt-6 mb-3">Development methodology</h3>
<p className="my-4 leading-relaxed text-gray-700">The team followed Rapid Application Development (RAD). Members built mini-games and systems in parallel, making it easier to adjust components based on early feedback. After testing individual scenes, the team combined them into the central hub and aligned the visual styles.</p>
<h3 id="generative-ai" className="text-xl font-bold text-gray-800 mt-6 mb-3">Generative AI</h3>
<p className="my-4 leading-relaxed text-gray-700">Google Gemini was used to find errors, check syntax, and optimize C# scripts. It acted as an assistant for debugging rather than writing code from scratch. No 3D models or other game assets were created with AI, keeping the work compliant with academic standards.</p>
</section>
        </div>
      </div>
    </div>
  );
}

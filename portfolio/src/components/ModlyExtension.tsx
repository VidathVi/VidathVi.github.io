export default function ModlyExtension() {
  return (
    <div className="space-y-8">
      {/* Header Box */}
      <div className="bg-white border border-gray-100 shadow-sm p-12 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-5xl font-bold text-gray-900">Modly Blender Extension</h2>
          <div className="mt-5">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider block">Skill Usage</span>
            <div className="text-sm font-mono text-gray-500 mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <a href="#python" className="text-blue-600 hover:underline">Python</a>
              <span>&bull;</span>
              <a href="#blender-api" className="text-blue-600 hover:underline">Blender API</a>
              <span>&bull;</span>
              <a href="#fastapi" className="text-blue-600 hover:underline">FastAPI</a>
              <span>&bull;</span>
              <span className="text-gray-400">HTTP / subprocess</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 font-medium whitespace-nowrap">
          <a
            href="https://github.com/VidathVi/Modly_blender_extension"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
          >
            <svg className="w-4 h-4 fill-current text-gray-700 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub Repository</span>
            <img src="/redirect-icon.png" alt="Redirect" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
          </a>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900 mt-2 flex items-center gap-1">
            <span>&larr; Back to Portfolio</span>
          </a>
        </div>
      </div>

      {/* Body Box */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">

          <section id="technical-summary-modly-blender-extension" className="scroll-mt-10 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Technical Summary: Modly Blender Extension</h1>
            <p className="my-4 leading-relaxed text-gray-700">
              A Blender 5.2 extension that connects to a local AI 3D generation backend from inside Blender's node editor. The workflow stays in one application: you wire up a node graph, click Run Graph, and the extension manages the backend process, sends the job, and imports the result when it is done.
            </p>

            {/* Tech Stack Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[#284bbe]/5 to-[#284bbe]/10 border border-[#284bbe]/20 rounded-xl shadow-xs">
              <h3 className="text-lg font-semibold text-[#284bbe] mb-4 flex items-center gap-2">
                <img src="/tech-stack-icon.png" alt="Tech Stack Icon" className="w-6 h-6 object-contain" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Blender &amp; Python</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python 3.11', 'bpy (Blender API)', 'bpy.types.NodeTree', 'bpy.props (dynamic)', 'modal timers'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Backend &amp; Networking</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['FastAPI', 'uvicorn', 'subprocess', 'urllib (HTTP client)', 'multipart/form-data', 'pathlib'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />
          </section>

          <section id="1-what-it-does" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">1. What it does</h2>
            <p className="my-4 leading-relaxed text-gray-700">
              The Modly app has its own node-based UI built in Electron. This extension drops that and replaces it with a custom node editor inside Blender itself, so you work entirely within one application.
            </p>
            <p className="my-4 leading-relaxed text-gray-700">
              You connect an image or text input node to a generator node (Trellis2 GGUF for image-to-mesh or retexturing, or one of three TRELLIS Text nodes for text-to-mesh), then wire the output into an Add to Scene node. Clicking Run Graph submits the graph to the backend. Nodes can be chained: when Generate Mesh finishes, its output file path is picked up automatically and passed into the next node.
            </p>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="2-architecture" className="scroll-mt-10 space-y-4">
            <div id="python" className="scroll-mt-16" />
            <div id="blender-api" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">2. Architecture</h2>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">The node editor side</h3>
            <p className="my-4 leading-relaxed text-gray-700">
              A <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">ModlyNodeTree</code> class registers Blender's new editor type. There are ten nodes in total: image input, text prompt, Selection-In (which exports the active object to a temporary GLB), five generator nodes, and Add to Scene. Sockets use four types to make illegal connections visible at a glance: Image (orange), Text (blue), MeshRef (green), and Job (yellow).
            </p>
            <p className="my-4 leading-relaxed text-gray-700">
              Job state is stored in a module-level dictionary in <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">job_registry.py</code> rather than on the node itself. Blender's undo system would wipe node properties on Ctrl+Z. A module-level dict survives that.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">The backend subprocess</h3>
            <p className="my-4 leading-relaxed text-gray-700">
              GPU inference cannot run inside Blender's bundled Python. Blender ships its own Python build with its own ABI, and trying to load CUDA-dependent wheels into it causes crashes. The extension starts the Modly FastAPI backend as a separate subprocess in its own virtual environment instead. A modal timer polls <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">/api/health</code> on a loop until the server responds, then unlocks the UI.
            </p>
            <p className="my-4 leading-relaxed text-gray-700">
              The extension points at the existing Modly installation's model directory, so models downloaded through the desktop app are reused. Nothing gets downloaded twice.
            </p>

            <div className="my-6 p-5 bg-gray-50 border border-gray-200 rounded-xl font-mono text-xs text-gray-600 overflow-x-auto leading-relaxed">
              <pre>{'Blender 5.2 (your process)\n\u2502\n\u251c\u2500\u2500 ModlyNodeTree (custom editor)\n\u2502   \u251c\u2500\u2500 Input nodes  (Image Input, Text Prompt, Selection-In)\n\u2502   \u251c\u2500\u2500 Generator nodes  (Generate Mesh, Texture Mesh, Trellis Text x3)\n\u2502   \u2514\u2500\u2500 Output node  (Add to Scene)\n\u2502\n\u251c\u2500\u2500 Operators\n\u2502   \u251c\u2500\u2500 Run Graph \u2192 serializes nodes \u2192 POSTs to backend\n\u2502   \u251c\u2500\u2500 Poll Jobs \u2192 modal timer, 500ms, updates node colours\n\u2502   \u2514\u2500\u2500 Backend control  (start / stop / restart / health-check)\n\u2502\n\u2514\u2500\u2500 HTTP (localhost:8765) \u25b6 Modly backend (subprocess)\n                               \u2514\u2500\u2500 Own Python venv + CUDA'}</pre>
            </div>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="3-dynamic-node-generation" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">3. Dynamic node generation</h2>
            <p className="my-4 leading-relaxed text-gray-700">
              Nodes are not hardcoded. On startup, the extension reads <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">manifest.json</code> files from the Modly backend's extensions directory and generates node classes on the fly using Python's <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">type()</code> function. Each manifest's <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">params_schema</code> maps to Blender property types: JSON integers become <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">IntProperty</code>, selects become <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">EnumProperty</code>, and so on.
            </p>
            <p className="my-4 leading-relaxed text-gray-700">
              There is a Blender-specific requirement here. Since 2.8, dynamically assigned properties have to be in the class's <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">__annotations__</code> dictionary or they will not appear in the UI. The <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">type()</code> call handles this. When the Modly backend adds a new model, the extension picks it up on the next sync without any code changes.
            </p>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="4-graph-execution" className="scroll-mt-10 space-y-4">
            <div id="fastapi" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">4. Graph execution and polling</h2>
            <p className="my-4 leading-relaxed text-gray-700">
              Run Graph serialises the node tree into a topologically sorted list of <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">NodeTask</code> dataclasses, then submits each one to the backend as a <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">multipart/form-data</code> HTTP POST. The HTTP client is written with plain <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">urllib</code> so there are no third-party dependencies to manage.
            </p>
            <p className="my-4 leading-relaxed text-gray-700">
              The backend returns a <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">run_id</code>. A modal operator fires every 500ms, queries the status endpoint, and updates the node's header colour: blue while running, green on completion, red on failure. The Blender UI does not lock during this.
            </p>
            <p className="my-4 leading-relaxed text-gray-700">
              For chained graphs, the polling loop reads the completed node's <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">output_url</code> and injects it into the next task's parameters before submitting. The Texture Mesh node does not need to know where the mesh came from; the runner figures it out.
            </p>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="5-challenges-and-fixes" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">5. Bugs and fixes</h2>
            <p className="my-4 leading-relaxed text-gray-700">Most of these were not obvious until the relevant code path actually ran.</p>

            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-2xs">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200">Problem</th>
                    <th className="px-6 py-3 border-b border-gray-200">Root cause</th>
                    <th className="px-6 py-3 border-b border-gray-200">Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-gray-600">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Blender crash on seed parameter</td>
                    <td className="px-6 py-4 border-b border-gray-200">The manifest defined seed as a 32-bit unsigned int (max 4,294,967,295). Blender's property system is signed 32-bit only.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Clamp parsed max and default values to 2,147,483,647 before registering.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Dynamic properties not showing in UI</td>
                    <td className="px-6 py-4 border-b border-gray-200">Since Blender 2.8, dynamic properties must be in <code className="bg-gray-100 px-1 rounded font-mono text-xs">__annotations__</code> or Blender ignores them.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Populate <code className="bg-gray-100 px-1 rounded font-mono text-xs">__annotations__</code> inside the <code className="bg-gray-100 px-1 rounded font-mono text-xs">type()</code> call.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Text-to-mesh returns HTTP 400</td>
                    <td className="px-6 py-4 border-b border-gray-200">The backend's <code className="bg-gray-100 px-1 rounded font-mono text-xs">/workflow-runs/from-image</code> endpoint requires an image payload for every request, including text-only models.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Graph serialiser generates a 1x1 white PNG in memory with <code className="bg-gray-100 px-1 rounded font-mono text-xs">struct</code> and <code className="bg-gray-100 px-1 rounded font-mono text-xs">zlib</code> and injects it before the request goes out.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Chained task returns HTTP 400</td>
                    <td className="px-6 py-4 border-b border-gray-200">The Texture Mesh node was submitted without a mesh path because the polling loop had not captured the upstream output URL yet.</td>
                    <td className="px-6 py-4 border-b border-gray-200">On job completion, capture <code className="bg-gray-100 px-1 rounded font-mono text-xs">output_url</code> and write it into the next task's params before submitting.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Fatal crash when chaining tasks</td>
                    <td className="px-6 py-4 border-b border-gray-200">The code called <code className="bg-gray-100 px-1 rounded font-mono text-xs">MODLY_OT_run_graph()</code> directly to reuse the submission logic. Blender operators are C structs; you cannot instantiate them from Python.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Moved the submission logic out of the operator class into a standalone <code className="bg-gray-100 px-1 rounded font-mono text-xs">submit_task()</code> function.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Error text not visible on failed nodes</td>
                    <td className="px-6 py-4 border-b border-gray-200">The draw function only showed the status box when <code className="bg-gray-100 px-1 rounded font-mono text-xs">run_id</code> was set. A pre-flight failure never gets a run ID, so the error was drawn into a hidden box.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Show the status box whenever <code className="bg-gray-100 px-1 rounded font-mono text-xs">status_text != "Idle"</code>, not just when a run ID exists.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">FileNotFoundError on mesh import</td>
                    <td className="px-6 py-4 border-b border-gray-200">The backend returns Linux-style paths like <code className="bg-gray-100 px-1 rounded font-mono text-xs">/workspace/Default/mesh.glb</code>. Joining that directly with the Windows workspace path doubled the <code className="bg-gray-100 px-1 rounded font-mono text-xs">workspace</code> segment.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Strip the <code className="bg-gray-100 px-1 rounded font-mono text-xs">/workspace/</code> prefix, then join the remainder with the absolute Windows path using <code className="bg-gray-100 px-1 rounded font-mono text-xs">pathlib</code>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="6-file-structure" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">6. File structure (19 files)</h2>
            <p className="my-4 leading-relaxed text-gray-700">Five layers, each handling a different part of the problem.</p>
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-2xs">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200">Layer</th>
                    <th className="px-6 py-3 border-b border-gray-200">Files</th>
                    <th className="px-6 py-3 border-b border-gray-200">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-gray-600">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Core</td>
                    <td className="px-6 py-4 border-b border-gray-200 font-mono text-xs">__init__.py, preferences.py, job_registry.py, blender_manifest.toml</td>
                    <td className="px-6 py-4 border-b border-gray-200">Registration, preferences UI, undo-safe job state, extension manifest</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Backend</td>
                    <td className="px-6 py-4 border-b border-gray-200 font-mono text-xs">backend/process_manager.py</td>
                    <td className="px-6 py-4 border-b border-gray-200">Launches uvicorn, CREATE_NO_WINDOW flag, log redirect, health polling</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Nodes</td>
                    <td className="px-6 py-4 border-b border-gray-200 font-mono text-xs">nodes/tree.py, sockets.py, categories.py, inputs.py, generators.py, outputs.py, dynamic.py</td>
                    <td className="px-6 py-4 border-b border-gray-200">10 node types, 4 socket types, dynamic node generation from manifest</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Operators</td>
                    <td className="px-6 py-4 border-b border-gray-200 font-mono text-xs">operators/backend_ops.py, run_graph.py</td>
                    <td className="px-6 py-4 border-b border-gray-200">Backend start/stop/restart, Run Graph, Poll Jobs (500ms timer), Cancel Job</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Panels &amp; Utils</td>
                    <td className="px-6 py-4 border-b border-gray-200 font-mono text-xs">panels/status_panel.py, models_panel.py, utils/api_client.py, graph_serializer.py</td>
                    <td className="px-6 py-4 border-b border-gray-200">Sidebar UI, model list, pure-urllib HTTP client, topological sort and task serialisation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="7-next-steps" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">7. What is still missing</h2>
            <p className="my-4 leading-relaxed text-gray-700">The extension runs end-to-end. Three things are still on the list:</p>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Job log panel.</strong> Right now there is no way to review past runs. Adding a persistent log of run IDs, statuses, and output paths would make it easier to track what generated what.</li>
              <li><strong>Thumbnail previews on nodes.</strong> A completed node shows a status colour. It would be more useful to show a small render of the output mesh directly on the node.</li>
              <li><strong>CUDA out-of-memory handling.</strong> When a model runs out of VRAM, the backend crashes with a generic error. The extension should catch this and suggest a smaller quantisation instead.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

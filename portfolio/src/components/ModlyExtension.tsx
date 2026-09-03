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
            <p className="my-4 leading-relaxed text-gray-700">A native Blender 5.2 extension that wires a local AI 3D-generation backend directly into Blender's node editor. Instead of switching between apps, you build a node graph inside Blender and let the extension handle everything else — launching the backend, sending jobs, polling progress, and dropping the finished mesh into your scene.</p>
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
            <p className="my-4 leading-relaxed text-gray-700">The Modly Blender Extension replaces the standalone Modly desktop app with a fully native Blender workflow. Once installed, you open a Modly Node Editor, build a graph by connecting input, generator, and output nodes, and click Run Graph. The extension takes it from there.</p>
            <p className="my-4 leading-relaxed text-gray-700">It supports the full Modly model lineup — Trellis2 GGUF for image-to-mesh and mesh retexturing, and three TRELLIS Text nodes (Base, Large, XL) for text-to-mesh generation. Nodes can be chained: a Generate Mesh node feeds directly into a Texture Mesh node, and the extension resolves the intermediate file path automatically between jobs.</p>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="2-architecture" className="scroll-mt-10 space-y-4">
            <div id="python" className="scroll-mt-16" />
            <div id="blender-api" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">2. Architecture</h2>
            <p className="my-4 leading-relaxed text-gray-700">The extension is split into two layers that communicate over HTTP on localhost.</p>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Inside Blender</h3>
            <p className="my-4 leading-relaxed text-gray-700">A custom <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">ModlyNodeTree</code> registers itself as a new editor type. Ten node types cover the whole workflow: image and text inputs, a Selection-In node that exports your active Blender object to a temporary GLB, five generator nodes, and an Add to Scene output node. Four socket types carry the right data between them — Image (orange), Text (blue), MeshRef (green), and Job (yellow).</p>
            <p className="my-4 leading-relaxed text-gray-700">Job state lives in a module-level dictionary (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">job_registry.py</code>) rather than node properties. This keeps in-flight jobs safe from Blender's undo system — pressing Ctrl+Z won't corrupt a running generation.</p>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">The backend subprocess</h3>
            <p className="my-4 leading-relaxed text-gray-700">Running GPU inference inside Blender's bundled Python is not practical — ABI mismatches and CUDA context conflicts with the viewport make it unstable. Instead, the extension launches the existing Modly FastAPI backend as a hidden subprocess inside its own virtual environment. A health-check modal timer keeps the UI locked only until the server is ready, then hands control back to the user.</p>
            <p className="my-4 leading-relaxed text-gray-700">Because the extension reuses the real Modly installation's model directory, you never download the same model twice — both the desktop app and the Blender extension share the same weights on disk.</p>
            <div className="my-6 p-5 bg-gray-50 border border-gray-200 rounded-xl font-mono text-xs text-gray-600 overflow-x-auto leading-relaxed">
              <pre>{'Blender 5.2 (your process)\n\u2502\n\u251c\u2500\u2500 ModlyNodeTree (custom editor)\n\u2502   \u251c\u2500\u2500 Input nodes  (Image Input, Text Prompt, Selection-In)\n\u2502   \u251c\u2500\u2500 Generator nodes  (Generate Mesh, Texture Mesh, Trellis Text x3)\n\u2502   \u2514\u2500\u2500 Output node  (Add to Scene)\n\u2502\n\u251c\u2500\u2500 Operators\n\u2502   \u251c\u2500\u2500 Run Graph \u2192 serializes nodes \u2192 POSTs to backend\n\u2502   \u251c\u2500\u2500 Poll Jobs \u2192 modal timer, 500ms, updates node colours\n\u2502   \u2514\u2500\u2500 Backend control  (start / stop / restart / health-check)\n\u2502\n\u2514\u2500\u2500 HTTP (localhost:8765) \u25b6 Modly backend (subprocess)\n                               \u2514\u2500\u2500 Own Python venv + CUDA'}</pre>
            </div>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="3-dynamic-node-generation" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">3. Dynamic node generation</h2>
            <p className="my-4 leading-relaxed text-gray-700">Rather than hardcoding a node for every model, the extension reads <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">manifest.json</code> files from the Modly backend's extensions directory. It parses each model's <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">params_schema</code> and maps JSON parameter types to native Blender property types — integers become <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">IntProperty</code>, selects become <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">EnumProperty</code>, and so on.</p>
            <p className="my-4 leading-relaxed text-gray-700">Python's <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">type()</code> metaprogramming function constructs the node subclasses on the fly. Each generated class has its properties added to <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">__annotations__</code>, which is the mechanism Blender 2.8+ requires for dynamically assigned properties to appear in the UI. This means the extension automatically gains new nodes whenever the Modly backend adds a new model — no code changes needed.</p>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="4-graph-execution" className="scroll-mt-10 space-y-4">
            <div id="fastapi" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">4. Graph execution and non-blocking polling</h2>
            <p className="my-4 leading-relaxed text-gray-700">When you click Run Graph, the node tree is serialised into an ordered list of <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">NodeTask</code> dataclasses using a topological sort. Each task is submitted to the backend as a <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">multipart/form-data</code> HTTP POST containing the image file, the model ID, and JSON-encoded parameters. The HTTP client is a pure-urllib implementation with no third-party dependencies.</p>
            <p className="my-4 leading-relaxed text-gray-700">Once the backend accepts the job and returns a run ID, a modal operator starts a 500ms Blender timer. Every half-second it queries the backend's status endpoint and updates the node's header colour in real time — blue for running, green for completed, red for failed. Blender stays fully interactive throughout.</p>
            <p className="my-4 leading-relaxed text-gray-700">For chained graphs, the polling loop captures the completed node's output URL and injects it into the next task's parameters before submission, so a Texture Mesh node automatically receives the mesh file from the Generate Mesh node that ran before it.</p>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="5-challenges-and-fixes" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">5. Challenges and fixes</h2>
            <p className="my-4 leading-relaxed text-gray-700">Several non-obvious issues came up during development, each requiring a targeted fix rather than a workaround.</p>
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
                    <td className="px-6 py-4 border-b border-gray-200">Modly's manifest defined seed as a 32-bit unsigned int (max 4 294 967 295). Blender uses signed 32-bit integers.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Clamp all parsed max/default values to 2 147 483 647 before registering the property.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Dynamic properties invisible in UI</td>
                    <td className="px-6 py-4 border-b border-gray-200">Blender 2.8+ requires dynamically created properties to be in the class's __annotations__ dict.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Updated the type() constructor to populate __annotations__ alongside the property assignments.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Text-to-mesh HTTP 400 (no image)</td>
                    <td className="px-6 py-4 border-b border-gray-200">The backend endpoint requires an image for every request, even for text-only models.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Graph serialiser generates a 1x1 white PNG in memory using struct + zlib and injects it silently.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Chained task HTTP 400 (missing mesh path)</td>
                    <td className="px-6 py-4 border-b border-gray-200">Downstream node submitted before the upstream output URL was captured.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Polling loop now captures output_url on completion and injects it into the next task's params before submission.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Fatal crash on operator instantiation</td>
                    <td className="px-6 py-4 border-b border-gray-200">The code tried to call the operator class directly. Blender operators are C structs and cannot be instantiated in Python.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Extracted the submission method into a standalone module-level function.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">Error messages hidden on failed submission</td>
                    <td className="px-6 py-4 border-b border-gray-200">UI drawing checked for an active run_id before showing status. Pre-flight failures never get a run_id.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Changed condition to show status whenever status_text is not "Idle", regardless of run ID.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-b border-gray-200 font-medium">FileNotFoundError on Windows path resolution</td>
                    <td className="px-6 py-4 border-b border-gray-200">Backend returned a Linux-style relative path. Naive join duplicated the workspace segment on Windows.</td>
                    <td className="px-6 py-4 border-b border-gray-200">Added stripping logic to extract just the relative part and rejoin with pathlib.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="6-file-structure" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">6. File structure (19 files)</h2>
            <p className="my-4 leading-relaxed text-gray-700">The extension is organised into five layers, each with a focused responsibility.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">7. Next steps</h2>
            <p className="my-4 leading-relaxed text-gray-700">The extension works end-to-end. Planned improvements include:</p>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Persistent job log panel</strong> — review past run IDs, status, and output paths without re-running the graph.</li>
              <li><strong>Node thumbnail previews</strong> — show a small preview of the generated mesh directly on the completed node to make graphs visually scannable.</li>
              <li><strong>CUDA OOM recovery</strong> — catch out-of-memory errors and surface actionable advice (e.g. "Try the Base quantisation instead of Large").</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

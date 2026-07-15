export default function GeoEngine() {
  return (
    <div className="space-y-8">
      {/* Header Box */}
      <div className="bg-white border border-gray-100 shadow-sm p-12 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-5xl font-bold text-gray-900">GEO Engine</h2>
          <div className="mt-5">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider block">Skill Usage</span>
            <div className="text-sm font-mono text-gray-500 mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <a href="#wsl2" className="text-blue-600 hover:underline">WSL2</a>
              <span>•</span>
              <a href="#docker" className="text-blue-600 hover:underline">Docker</a>
              <span>•</span>
              <a href="#firecrawl-api" className="text-blue-600 hover:underline">Firecrawl API</a>
              <span>•</span>
              <span className="text-gray-400">Python</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 font-medium whitespace-nowrap">
          <a 
            href="https://github.com/VidathVi/Fine-tune" 
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
          <a 
            href="https://docs.google.com/document/d/19Td908lvYiEBF9u8jQUMMWA7Z4j7TWl8eSRPKSBBMT0/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
          >
            <img src="/docs-icon.png" alt="Docs" className="w-4 h-4 object-contain flex-shrink-0" />
            <span>Case Study</span>
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

          <section id="technical-summary-geo-content-generation-pipeline" className="scroll-mt-10 space-y-4">
            <h1 id="technical-summary-geo-content-generation-pipeline" className="text-3xl font-bold text-gray-900 mt-8 mb-4">Technical Summary: GEO Content Generation Pipeline and LLM Fine-Tuning</h1>
            <p className="my-4 leading-relaxed text-gray-700">An overview of scraping, cleaning, training, and hosting open-weight large language models under zero-cost constraints.</p>

            {/* Tech Stack Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[#284bbe]/5 to-[#284bbe]/10 border border-[#284bbe]/20 rounded-xl shadow-xs">
              <h3 className="text-lg font-semibold text-[#284bbe] mb-4 flex items-center gap-2">
                <img src="/tech-stack-icon.png" alt="Tech Stack Icon" className="w-6 h-6 object-contain" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Infrastructure & Data Scraping</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Docker / Docker Compose', 'Firecrawl API', 'Playwright', 'Redis', 'ProtonVPN', 'Gluetun', 'WSL2 (Ubuntu)'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Data Processing Pipeline</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Pandas', 'Langdetect'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Fine-Tuning Environment</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Google Colab (T4 GPU)', 'Google Drive', 'Unsloth', 'Hugging Face TRL (SFTTrainer)', 'Hugging Face PEFT & bitsandbytes', 'Hugging Face Hub', 'hf-transfer'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Deployment & Inference</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Ollama', 'Modal.com', 'vLLM'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Target systems</strong>: Social Media Marketing and SEO (SMMA) platforms</li>
              <li><strong>Status</strong>: Production build complete and verified</li>
              <li><strong>Primary model</strong>: Qwen-2.5-7B-Instruct-bnb-4bit (LoRA adapters)</li>
              <li><strong>Deployment target</strong>: Modal serverless GPU platform (vLLM)</li>
              <li><strong>Version</strong>: 1.0</li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="table-of-contents" className="scroll-mt-10 space-y-4">
            <h2 id="table-of-contents" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">Table of contents</h2>
            <ul className="list-none space-y-2 pl-0 my-4 text-gray-700">
              {[
                '1. Project overview and objectives',
                '2. Scraping and data collection',
                '3. Data cleaning and dataset layout',
                '4. Model selection and fine-tuning',
                '5. Technical challenges and resolutions',
                '6. Hosting architecture and API integration',
                '7. Results and conclusion'
              ].map((section, idx) => (
                <li key={idx}>
                  {idx + 1}. <a href={`#section-${idx + 1}`} className="text-blue-600 hover:underline">{section}</a>
                </li>
              ))}
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-1" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">1. Project overview and objectives</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Generative Engine Optimization (GEO)</strong>: Formatting content to increase its visibility in search summaries generated by AI tools like Google Search Generative Experience or Perplexity.</li>
              <li><strong>Objectives</strong>: The project establishes a data pipeline to:
                <ol className="list-decimal pl-6 space-y-1.5 mt-2">
                  <li>Harvest high-performing programming posts from public websites.</li>
                  <li>Clean and structure the raw text.</li>
                  <li>Fine-tune an open-weight Large Language Model (LLM) to write captions, metadata, hashtags, and links that match popular developer content.</li>
                </ol>
              </li>
              <li><strong>Cost constraints</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Scraping: Self-hosted container environments replace paid API services.</li>
                  <li>Training: Quantized model training runs on free Google Colab T4 GPU instances.</li>
                  <li>Inference: Serverless GPU endpoints scale to zero when inactive, running inside free credit tiers on Modal.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-2" className="scroll-mt-10 space-y-4">
            <div id="wsl2" className="scroll-mt-16" />
            <div id="docker" className="scroll-mt-16" />
            <div id="firecrawl-api" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">2. Scraping and data collection</h2>
            <p className="my-4 leading-relaxed text-gray-700 font-medium">To bypass API pricing and rate restrictions, the crawler utilizes three configurations:</p>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Local crawler</strong>: Firecrawl runs inside Docker Compose on port <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`3002`}</code>. We swapped in pre-built images and bypassed FoundationDB and RabbitMQ health checks so it runs on basic developer hardware.</li>
              <li><strong>VPN routing</strong>: Routes network requests through ProtonVPN's free tier to cycle IPs and prevent blocks. Since ProtonVPN lacks a Windows CLI, we run the client inside WSL2 (Ubuntu). Local Docker container traffic automatically inherits this VPN route. The crawler loops through free servers in the Netherlands, Japan, and the US.</li>
              <li><strong>Targeted scrapers</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Reddit: Crawls the public, anonymous Arctic Shift database. This bypasses developer credential gates. The crawler gathers posts from 15 subreddits, filtering for scores above 100 and upvote ratios over 85% to collect 377 programming posts.</li>
                  <li>LinkedIn: Loads cookies from <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`accounts.json`}</code> via <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`account_manager.py`}</code> and injects them into Playwright headers. Requests pause for 10 to 25 seconds to mimic human browsing and prevent IP bans.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-3" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">3. Data cleaning and dataset layout</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Text cleaning (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`clean.py`}</code>)</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Strips markdown syntax, redirect links, and bot-generated headers.</li>
                  <li>Discards duplicate records and posts shorter than 30 characters.</li>
                  <li>Prunes all-caps titles and personally identifiable details.</li>
                  <li>Result: 374 sanitized text records.</li>
                </ul>
              </li>
              <li><strong>Dataset structure (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`format_dataset.py`}</code>)</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Formats text records into ChatML files containing system, user, and assistant blocks.</li>
                  <li>System templates outline the target social channel, topic, audience, and goals. Assistant blocks host the target output captions, hashtags, and links.</li>
                </ul>
              </li>
              <li><strong>Split metrics</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li><code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`train.jsonl`}</code> (299 records) for training cycles.</li>
                  <li><code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`val.jsonl`}</code> (37 records) for loss evaluation.</li>
                  <li><code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`test.jsonl`}</code> (38 records) for final evaluations.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-4" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">4. Model selection and fine-tuning</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Open-weight transition</strong>: We targeted open-weight models instead of closed APIs (like Qwen 3.7-Max) since proprietary services lock out adapter weights and carry API licensing charges. We selected the Qwen 2.5 family because of its strong markdown formatting and code synthesis metrics.</li>
              <li><strong>Hardware limitations</strong>: We initially tested a 30B model. Loading its weights in half-precision requires over 60 GB of RAM. Free-tier Google Colab instances host a T4 GPU with just 12.7 GB of system memory, which triggers out-of-memory crashes. We solved this by using Unsloth's pre-quantized 4-bit weights (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`unsloth/Qwen2.5-7B-Instruct-bnb-4bit`}</code>). This model takes 5.5 GB on disk and loads straight to the GPU's 16 GB VRAM.</li>
              <li><strong>Training run</strong>: Mounted Google Drive to persist checkpoints. We ran Supervised Fine-Tuning (SFT) using Unsloth for three epochs (114 steps). Hyperparameters: batch size of 2, 4 gradient accumulation steps, and the AdamW optimizer. Training loss dropped from 1.84 to 0.96. LoRA adapters were saved back to Google Drive.</li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-5" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">5. Technical challenges and resolutions</h2>
            <p className="my-4 leading-relaxed text-gray-700">The pipeline resolved 12 engineering roadblocks:</p>
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-2xs">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200">Challenge</th>
                    <th className="px-6 py-3 border-b border-gray-200">Symptom</th>
                    <th className="px-6 py-3 border-b border-gray-200">Resolution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-gray-600">
                  {[
                    { id: 'C-01: Terminal emoji crash', sym: 'Emojis crashed Windows console streams with UnicodeEncodeError.', res: "Configured stdout to UTF-8: sys.stdout.reconfigure(encoding='utf-8')." },
                    { id: 'C-02: Reddit access blocks', sym: 'Reddit blocked standard OAuth scripts.', res: 'Bypassed APIs by querying the public Arctic Shift database.' },
                    { id: 'C-03: LinkedIn logins', sym: 'Requests hit login gates or HTTP 999 rate blocks.', res: 'Rotated session cookies and set crawler intervals to 10–25 seconds.' },
                    { id: 'C-04: Google Colab OOM', sym: 'Loading the float16 30B model crashed system memory.', res: 'Switched to 4-bit model weights loaded directly to GPU memory.' },
                    { id: 'C-05: Stalled downloads', sym: 'Hugging Face downloads timed out in cloud notebooks.', res: 'Enabled hf-transfer to run downloads via Rust.' },
                    { id: 'C-06: SFTTrainer configuration', sym: 'ChatML JSONL inputs triggered trainer schema errors.', res: 'Formatted input fields into a single text column before training.' },
                    { id: 'C-07: Closed-source training', sym: 'Proprietary APIs do not export custom adapter weights.', res: 'Swapped to open-weight models (Qwen 2.5 series).' },
                    { id: 'C-08: Windows VPN control', sym: 'ProtonVPN has no native CLI for Windows.', res: 'Ran the Linux CLI in WSL2 (Ubuntu) to encrypt all container traffic.' },
                    { id: 'C-09: Infrastructure budget limits', sym: 'Project requirements banned paid services.', res: 'Utilized Google Colab, Google Drive, free VPN servers, and local containers.' },
                    { id: 'C-10: Google Colab timeouts', sym: 'Colab timed out, wiping training weights.', res: 'Saved training states to Google Drive directories.' },
                    { id: 'C-11: Drive sync errors', sym: 'Exporting large weights directly to GDrive mounts failed.', res: 'Merged and quantized weights locally before uploading the file to GDrive.' },
                    { id: 'C-12: Google Colab disk space', sym: 'Cache directory sizes filled the instance storage.', res: 'Scripted cleanup commands to remove unused base models.' }
                  ].map((c) => (
                    <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 border-b border-gray-200 font-semibold text-gray-800">{c.id}</td>
                      <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{c.sym}</td>
                      <td className="px-6 py-4 border-b border-gray-200 text-gray-700 font-mono text-xs">{c.res}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-6" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">6. Hosting architecture and API integration</h2>
            <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Local GGUF compilation</strong>: Merges training adapters into base weights, exports a 4-bit GGUF file, and instantiates the model in Ollama via a custom <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`Modelfile`}</code> on the local desktop.</li>
              <li><strong>Hugging Face storage</strong>: Uploads Safetensors base and adapter weights to a private repository (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`Vi-ViD/GEO-Engine`}</code>) on the Hugging Face Hub to secure the assets.</li>
              <li><strong>Serverless GPU serving</strong>: Deploys the model on Modal. The wrapper script (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`serve.py`}</code>) routes requests to vLLM running on an NVIDIA A10G GPU. Setting <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`container_idle_timeout = 120`}</code> stops the container and frees the GPU after two minutes of inactivity.</li>
              <li><strong>API integration</strong>: The model functions as a microservice. The backend app builds the ChatML prompt, calls Modal, parses the output JSON, updates the PostgreSQL database, and serves it to the frontend.</li>
            </ol>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-7" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">7. Results and conclusion</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Zero costs</strong>: Running VPN clients, crawlers, Colab, Hugging Face, and serverless GPU serving runs entirely within free limits.</li>
              <li><strong>Validation</strong>: Output checks confirm the model successfully mimics the layout and tone of top developer posts, including technical outlines, hashtag sets, and link setups.</li>
              <li><strong>Deployment</strong>: The complete data, training, and hosting loops are operational and verified.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

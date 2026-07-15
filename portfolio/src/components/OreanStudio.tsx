export default function OreanStudio() {
  return (
    <div className="space-y-8">
      {/* Header Box */}
      <div className="bg-gray-200 p-12 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-5xl font-bold text-gray-900">OreanStudio</h2>
          <div className="mt-5">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider block">Skill Usage</span>
            <div className="text-sm font-mono text-gray-500 mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <a href="#docker" className="text-blue-600 hover:underline">Docker</a>
              <span>•</span>
              <a href="#kubernetes" className="text-blue-600 hover:underline">Kubernetes</a>
              <span>•</span>
              <a href="#helm" className="text-blue-600 hover:underline">Helm</a>
              <span>•</span>
              <a href="#prometheus" className="text-blue-600 hover:underline">Prometheus</a>
              <span>•</span>
              <a href="#terraform" className="text-blue-600 hover:underline">Terraform</a>
              <span>•</span>
              <a href="#github-actions" className="text-blue-600 hover:underline">CI/CD Pipelines (Github Actions)</a>
              <span>•</span>
              <span className="text-gray-400">WSL2</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 font-medium whitespace-nowrap">
          <a 
            href="https://github.com/VidathVi/SMMA-Final-Build" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
          >
            <img src="/github-icon.png" alt="GitHub" className="w-4 h-4 object-contain flex-shrink-0" />
            <span>GitHub Repository</span>
            <img src="/redirect-icon.png" alt="Redirect" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
          </a>
          <a 
            href="https://docs.google.com/document/d/1VM0UiwINqqyd3wsL9-NN_WEpwaxhlxFNIS6XPeRHZPs/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
          >
            <img src="/docs-icon.png" alt="Docs" className="w-4 h-4 object-contain flex-shrink-0" />
            <span>Case Study</span>
            <img src="/redirect-icon.png" alt="Redirect" className="w-3.5 h-3.5 object-contain flex-shrink-0" />
          </a>
          <a 
            href="https://orean.studio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5"
          >
            <img src="/orean-icon.png" alt="Orean" className="w-4 h-4 object-contain flex-shrink-0" />
            <span>Orean Website</span>
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

          <section id="technical-summary-orean-360" className="scroll-mt-10 space-y-4">
            <h1 id="technical-summary-orean-360" className="text-3xl font-bold text-gray-900 mt-8 mb-4">Technical Summary: Orean 360 Social Media Management Automation Platform</h1>
            <p className="my-4 leading-relaxed text-gray-700">An overview of the architecture, tools, and implementation of Orean 360 (internal codename `SMMA-Final-Build`), a social media management automation platform.</p>

            {/* Tech Stack Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[#284bbe]/5 to-[#284bbe]/10 border border-[#284bbe]/20 rounded-xl shadow-xs">
              <h3 className="text-lg font-semibold text-[#284bbe] mb-4 flex items-center gap-2">
                <img src="/tech-stack-icon.png" alt="Tech Stack Icon" className="w-6 h-6 object-contain" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Recharts', 'PostCSS', 'ESLint'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Node.js / Express 5', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Redis', 'BullMQ', 'FFmpeg', 'Multer', 'Google APIs (googleapis)', 'Zod', 'Axios', 'Bcrypt / Bcrypt.js', 'JSONWebToken (JWT)', 'QRCode'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Infrastructure, Deployment & DevOps</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Docker / Docker Compose', 'Kong API Gateway', 'Terraform', 'Kubernetes / Google Kubernetes Engine (GKE)', 'Helm'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs p-4 rounded-lg border border-[#284bbe]/15 shadow-2xs">
                  <h4 className="font-semibold text-xs text-[#284bbe] uppercase tracking-wider mb-2">Observability & Monitoring</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Prometheus', 'Grafana', 'Fluent Bit'].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#284bbe]/10 text-[#284bbe] rounded-md font-medium border border-[#284bbe]/20">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Metrics</strong>: 17+ pages, 23 API controllers, 5 Helm charts, 4 Terraform modules, 3 CI/CD pipelines, 10+ integrations</li>
              <li><strong>Cloud hosting</strong>: Google Cloud Platform (GCP) | Region: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`asia-southeast1`}</code> (Singapore)</li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="table-of-contents" className="scroll-mt-10 space-y-4">
            <h2 id="table-of-contents" className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">Table of contents</h2>
            <ul className="list-none space-y-2 pl-0 my-4 text-gray-700">
              {[
                '1. Frontend architecture',
                '2. Backend services',
                '3. Database structure and models',
                '4. Background workers and queues',
                '5. Containerization',
                '6. Infrastructure as code',
                '7. Cluster hosting and production',
                '8. Deployment pipelines',
                '9. Monitoring and logging',
                '10. Security design'
              ].map((section, idx) => (
                <li key={idx}>
                  {idx + 1}. <a href={`#section-${idx + 1}`} className="text-blue-600 hover:underline">{section.substring(3)}</a>
                </li>
              ))}
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-1" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">1. Frontend architecture</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Recharts.</li>
              <li><strong>Directory</strong>: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/orean-web`}</code></li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Next.js 16 App Router: Uses server-side and client-side rendering. Dashboard pages load inside a shared layout (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/app/dashboard/layout.tsx`}</code>).</li>
                  <li>Tailwind CSS v4: Handles styling for responsive layouts.</li>
                  <li>Recharts: Renders timeline graphs for followers, reach, and engagement on the analytics page (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/dashboard/analytics`}</code>).</li>
                  <li>Authentication guards:
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li>Server edge: Middleware (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`middleware.ts`}</code>) intercepts incoming requests to secure routes.</li>
                      <li>Client browser: A <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`useEffect`}</code> hook in the dashboard layout checks local storage for <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`orean360_token`}</code> and redirects unauthorized users to <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/login`}</code>.</li>
                    </ul>
                  </li>
                  <li>Build optimization: Next.js standalone output compiles only the files needed for production. This cuts the final Docker image size from 1.5 GB to 150 MB.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-2" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">2. Backend services</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: Node.js 20, Express.js 5, TypeScript, Zod, Bcrypt.</li>
              <li><strong>Directory</strong>: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/backend`}</code></li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Entry point: The main server file (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`src/server.ts`}</code>) registers global middleware, verifies database connection pools, and boots background workers.</li>
                  <li>API routes: Mounts 18 route controllers to handle authentication, campaigns, posts, approvals, workflows, assets, analytics, and social credentials.</li>
                  <li>Social integrations: Connects directly to external platforms:
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li>Meta: Pulls page data and publishes posts via the Graph API.</li>
                      <li>YouTube: Uploads video posts via the Google Data API.</li>
                      <li>LinkedIn, TikTok, and WhatsApp: Manages OAuth verification and content publishing.</li>
                    </ul>
                  </li>
                  <li>Input validation and encryption:
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li>Zod schemas validate path params, queries, and request bodies.</li>
                      <li>Bcrypt hashes passwords, while the server signs JWTs to authenticate API requests.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-3" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">3. Database structure and models</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: PostgreSQL, Neon serverless database, Prisma ORM.</li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Neon branching: Isolates staging and production environments using serverless branches. Staging databases scale to zero when idle to minimize costs.</li>
                  <li>Prisma schema: The schema (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`schema.prisma`}</code>) defines 15 models:
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li>Configured cascade deletes to clean up campaign and post dependencies automatically.</li>
                      <li>Stored workflow nodes and asset metadata in JSON columns.</li>
                      <li>Swapped standard enums for lookup tables (like <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`PostStatus`}</code>, <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`CampaignStatus`}</code>, and <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`Role`}</code>) so developers can adjust application statuses without running database migrations.</li>
                    </ul>
                  </li>
                  <li>Migrations: Pipelines run schema migrations using <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`npx prisma migrate deploy`}</code> before deploying updates.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-4" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">4. Background workers and queues</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: BullMQ, Valkey/Redis (Aiven), FFmpeg.</li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Background tasks: BullMQ coordinates queue processes using Aiven Valkey. If worker containers crash, the queue retries failed tasks up to three times with exponential backoff.</li>
                  <li>Post publisher: Handles publishing tasks. Once the scheduled time hits, a worker triggers the target social API and logs results in <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`PublishLog`}</code>.</li>
                  <li>Video transcoder: Spawns FFmpeg tasks to transcode uploaded media into five platform-specific presets (for TikTok, Instagram, YouTube, Facebook, and LinkedIn) with vertical (9:16) or widescreen (16:9) aspects.</li>
                  <li>Valkey connections: A helper function parses the connection URI and automatically enables TLS/SSL options when it detects the <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`rediss://`}</code> protocol.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-5" className="scroll-mt-10 space-y-4">
            <div id="docker" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">5. Containerization</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: Docker, Docker Compose.</li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Backend optimization: The backend image uses a <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`node:20-slim`}</code> base. It installs <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`ffmpeg`}</code> and <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`openssl`}</code>, generates the Prisma client, builds TypeScript, and prunes dev dependencies to keep the image lean.</li>
                  <li>Shared image pattern: The backend API and background workers share the same Docker image. Toggling <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`ENABLE_WORKERS=true`}</code> in the environment starts worker queues instead of the Express server.</li>
                  <li>Development compose stack: Sets up five containers locally: PostgreSQL, Redis, a DB-less Kong API Gateway, the Express backend (with volume mounts for hot reloading), and the Next.js frontend.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-6" className="scroll-mt-10 space-y-4">
            <div id="terraform" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">6. Infrastructure as code</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: Terraform.</li>
              <li><strong>Directory</strong>: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/terraform`}</code></li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Module separation: Divides infrastructure HCL configurations into four modules:
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li><code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`networking`}</code>: Provisions the VPC, subnets, and Cloud NAT gateway.</li>
                      <li><code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`gke`}</code>: Configures the GKE cluster.</li>
                      <li><code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`artifact-registry`}</code>: Configures Google Artifact Registry repositories.</li>
                      <li><code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`cloud-run`}</code>: Provisions staging endpoints.</li>
                    </ul>
                  </li>
                  <li>State tracking: Stores the Terraform state in a GCS bucket with state locking to prevent write conflicts.</li>
                  <li>Disk quota limits: Restricts GKE node boot disks to 50 GB to avoid project storage quota warnings.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-7" className="scroll-mt-10 space-y-4">
            <div id="kubernetes" className="scroll-mt-16" />
            <div id="helm" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">7. Cluster hosting and production</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: GKE, Helm, KEDA, Kong Gateway.</li>
              <li><strong>Directories</strong>: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/monitoring`}</code> and <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/helm`}</code></li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Helm charts: Manages configurations across environments using five Helm charts. A <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`toString`}</code> template filter prevents base64 encoding errors on numeric secret values.</li>
                  <li>KEDA autoscaling: KEDA tracks the queue size in Redis. It scales worker pods up to 10 instances when tasks spike, scaling down to zero when the queue empties.</li>
                  <li>Kong gateway: Runs in DB-less mode, loading routing tables from a ConfigMap (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`kong.yml`}</code>). It verifies JWT signatures at the edge before passing traffic to the backend.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-8" className="scroll-mt-10 space-y-4">
            <div id="github-actions" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">8. Deployment pipelines</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: GitHub Actions.</li>
              <li><strong>Directory</strong>: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`.github/workflows/`}</code></li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Validation (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`ci.yaml`}</code>): Runs linters, compiles TypeScript, and runs test Docker builds on pull requests.</li>
                  <li>Staging pipeline (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`deploy-staging.yaml`}</code>):
                    <ol className="list-decimal pl-6 space-y-1 mt-1">
                      <li>Authenticates to Google Cloud.</li>
                      <li>Builds and pushes the backend container.</li>
                      <li>Runs migrations on the staging database branch.</li>
                      <li>Deploys backend API container to Cloud Run.</li>
                      <li>Queries the dynamic Cloud Run backend URL.</li>
                      <li>Builds the frontend container, passing the backend URL as a compile-time argument.</li>
                      <li>Deploys frontend container to Cloud Run.</li>
                    </ol>
                  </li>
                  <li>Production pipeline (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`deploy-production.yaml`}</code>): Runs production schema migrations, builds containers, and runs Helm upgrades on GKE.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-9" className="scroll-mt-10 space-y-4">
            <div id="prometheus" className="scroll-mt-16" />
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">9. Monitoring and logging</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Technologies</strong>: Prometheus, Grafana, Alertmanager, Fluent Bit.</li>
              <li><strong>Directory</strong>: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`/monitoring`}</code></li>
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Metrics: Prometheus gathers metrics from pods via custom service monitors.</li>
                  <li>Dashboards: Grafana visualizes memory footprints, node health, request volume, and latency.</li>
                  <li>Alerts: Alertmanager forwards severe alerts (like node crashes) to a dedicated Slack channel and admin emails.</li>
                  <li>Logging: Fluent Bit runs as a DaemonSet to harvest container logs and push them to Google Cloud Logging.</li>
                </ul>
              </li>
            </ul>
            <hr className="my-8 border-gray-200" />
          </section>

          <section id="section-10" className="scroll-mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">10. Security design</h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li><strong>Implementation details</strong>:
                <ul className="list-disc pl-6 space-y-1.5 mt-2">
                  <li>Edge security: Kong gatekeeps incoming requests, dropping unauthenticated traffic.</li>
                  <li>Authorization: Express middleware checks JWT claims and enforces ABAC so users only view resources within their tenant.</li>
                  <li>Hardening: Containers drop root access, running as <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`appuser`}</code> (backend) or <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`nextjs`}</code> (frontend) with shell access disabled.</li>
                  <li>Secrets defense: Secret scanners block commits with raw keys. We scrubbed past commits using <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">{`git filter-repo`}</code> to purge exposed tokens.</li>
                </ul>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

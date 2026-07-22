import { useState } from 'react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  date?: string;
  fileUrl: string;
  type: 'image' | 'pdf';
  skills: string[];
}

const certificatesData: Certificate[] = [
  {
    id: 'bootdev-linux',
    title: 'Learn Linux',
    issuer: 'Boot.dev',
    fileUrl: '/certificates/bootdev_certificate_linux.png',
    type: 'image',
    skills: ['Linux', 'Bash Shell', 'System Administration'],
  },
  {
    id: 'bootdev-python',
    title: 'Learn Python',
    issuer: 'Boot.dev',
    fileUrl: '/certificates/bootdev_certificate_python.png',
    type: 'image',
    skills: ['Python', 'Object-Oriented Programming', 'Backend'],
  },
  {
    id: 'linkedin-react-ts',
    title: 'React: Using TypeScript',
    issuer: 'LinkedIn Learning',
    date: 'March 2026',
    fileUrl: '/certificates/CertificateOfCompletion_React Using TypeScript.pdf',
    type: 'pdf',
    skills: ['React.js', 'TypeScript', 'Frontend'],
  },
];

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="space-y-6 pt-16 border-t border-white/20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-2xl font-bold text-white">Certificates</h3>
          <p className="text-white/70 text-sm mt-1">Verified certifications and completed courses</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActiveCertificate(cert)}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200 group cursor-pointer"
          >
            <div>
              {/* Media Preview Container */}
              <div 
                className="relative aspect-16/10 bg-gray-100 overflow-hidden group/media flex items-center justify-center border-b border-gray-100"
              >
                {cert.type === 'image' ? (
                  <>
                    <img
                      src={cert.fileUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        Preview
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full p-6 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center text-center group-hover/media:bg-blue-100/50 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white text-[#284bbe] shadow-xs flex items-center justify-center mb-2 group-hover/media:scale-110 transition-transform">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">PDF Certificate</span>
                    <span className="text-[11px] text-gray-400 mt-0.5">Click to view document</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#284bbe] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#284bbe] border border-blue-100">
                        {cert.issuer}
                      </span>
                      {cert.date && (
                        <span className="text-xs text-gray-400 font-medium">{cert.date}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal Lightbox */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{activeCertificate.title}</h3>
                <p className="text-xs text-gray-500">{activeCertificate.issuer} {activeCertificate.date ? `• ${activeCertificate.date}` : ''}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeCertificate.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                >
                  Open in New Tab
                </a>
                <button
                  onClick={() => setActiveCertificate(null)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto flex-1 flex items-center justify-center bg-gray-950/5 min-h-[300px]">
              {activeCertificate.type === 'image' ? (
                <img
                  src={activeCertificate.fileUrl}
                  alt={activeCertificate.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
                />
              ) : (
                <iframe
                  src={activeCertificate.fileUrl}
                  title={activeCertificate.title}
                  className="w-full h-[65vh] rounded-lg border border-gray-200 shadow-md"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

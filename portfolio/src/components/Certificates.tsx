import { useState } from 'react';

interface CertificateTheme {
  gradient: string;
  badgeContainerBg: string;
  chipBg: string;
  chipText: string;
  chipBorder: string;
  accentColor: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerPartner?: string;
  issueDate?: string;
  fileUrl: string;
  badgeUrl?: string;
  credentialId?: string;
  verifyUrl?: string;
  verifyLabel?: string;
  type: 'image' | 'pdf';
  skills: string[];
  category?: 'badges' | 'cloud' | 'programming' | 'databases';
  theme?: CertificateTheme;
}

const certificatesData: Certificate[] = [
  {
    id: 'ibm-cloud-computing-fundamentals',
    title: 'Cloud Computing Fundamentals',
    issuer: 'IBM SkillsBuild',
    issuerPartner: 'Verified Digital Credential via Credly',
    issueDate: 'October 2026',
    fileUrl: '/certificates/IBM_Cloud_Computing_Fundamentals.pdf',
    badgeUrl: '/certificates/cloud-computing-fundamentals.png',
    credentialId: '559fe3dc-1083-48e5-a7dd-55a6be53dd46',
    verifyUrl: 'https://www.credly.com/badges/559fe3dc-1083-48e5-a7dd-55a6be53dd46',
    verifyLabel: 'Verify on Credly',
    type: 'pdf',
    skills: ['Cloud Computing', 'Cloud Architecture', 'IaaS / PaaS / SaaS', 'Hybrid Cloud', 'Cloud Security', 'Virtualization'],
    category: 'cloud',
    theme: {
      gradient: 'from-[#fff0f5] via-white to-[#fde2ec]',
      badgeContainerBg: 'bg-[#fff5f8]',
      chipBg: 'bg-[#fae6ee]',
      chipText: 'text-[#8a1548]',
      chipBorder: 'border-[#f5c6cb]',
      accentColor: '#8a1548',
    },
  },
  {
    id: 'cisco-python-essentials-2',
    title: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    issuerPartner: 'in partnership with OpenEDG Python Institute',
    issueDate: 'October 2026',
    fileUrl: '/certificates/Python_Essentials_2_certificate.pdf',
    badgeUrl: '/certificates/python-essentials-2.png',
    credentialId: 'd6b06916-8000-4390-85a3-41d3b7946e51',
    verifyUrl: 'https://www.netacad.com/recognitions/verify/d6b06916-8000-4390-85a3-41d3b7946e51',
    verifyLabel: 'Verify on NetAcad',
    type: 'pdf',
    skills: ['Python', 'Object-Oriented Programming', 'Modules & Packages', 'Exceptions', 'File Processing'],
    category: 'programming',
    theme: {
      gradient: 'from-sky-50 via-white to-blue-50/70',
      badgeContainerBg: 'bg-sky-50/40',
      chipBg: 'bg-sky-50',
      chipText: 'text-[#007aa6]',
      chipBorder: 'border-sky-200',
      accentColor: '#007aa6',
    },
  },
  {
    id: 'datacamp-java-intro',
    title: 'Java',
    issuer: 'DataCamp',
    issueDate: 'August 2026',
    fileUrl: '/certificates/Java Introduction.pdf',
    type: 'pdf',
    skills: ['Java', 'Core Java', 'Programming'],
    category: 'programming',
  },
  {
    id: 'datacamp-java-oop',
    title: 'Object-Oriented Programming in Java',
    issuer: 'DataCamp',
    issueDate: 'August 2026',
    fileUrl: '/certificates/Java OOP Introduction.pdf',
    type: 'pdf',
    skills: ['Java', 'OOP', 'Classes & Objects'],
    category: 'programming',
  },
  {
    id: 'bootdev-docker',
    title: 'Docker',
    issuer: 'Boot.dev',
    issueDate: '2026',
    fileUrl: '/certificates/bootdev_docker_certificate.png',
    credentialId: '5c39519f-ce3e-4dc7-87c8-5a8729fd12c1',
    verifyUrl: 'https://boot.dev/certificates/5c39519f-ce3e-4dc7-87c8-5a8729fd12c1',
    verifyLabel: 'Verify on Boot.dev',
    type: 'image',
    skills: ['Docker', 'Containers', 'DevOps'],
    category: 'cloud',
  },
  {
    id: 'bootdev-git',
    title: 'Git',
    issuer: 'Boot.dev',
    issueDate: '2026',
    fileUrl: '/certificates/bootdev_git_certificate.png',
    credentialId: 'bb41a534-cd71-4328-be7a-7983d7ca28e8',
    verifyUrl: 'https://boot.dev/certificates/bb41a534-cd71-4328-be7a-7983d7ca28e8',
    verifyLabel: 'Verify on Boot.dev',
    type: 'image',
    skills: ['Git', 'GitHub', 'Version Control'],
    category: 'cloud',
  },
  {
    id: 'bootdev-linux',
    title: 'Linux',
    issuer: 'Boot.dev',
    issueDate: '2026',
    fileUrl: '/certificates/bootdev_certificate_linux.png',
    credentialId: '86c6da0c-756e-4ca3-bab7-e73276061177',
    verifyUrl: 'https://boot.dev/certificates/86c6da0c-756e-4ca3-bab7-e73276061177',
    verifyLabel: 'Verify on Boot.dev',
    type: 'image',
    skills: ['Linux', 'Bash Shell', 'System Administration'],
    category: 'cloud',
  },
  {
    id: 'bootdev-sql',
    title: 'SQL',
    issuer: 'Boot.dev',
    issueDate: 'August 2026',
    fileUrl: '/certificates/bootdev_certificate_SQL.png',
    credentialId: 'ab3834b2-b73c-4dd8-bfc5-8652342fa0fe',
    verifyUrl: 'https://boot.dev/certificates/ab3834b2-b73c-4dd8-bfc5-8652342fa0fe',
    verifyLabel: 'Verify on Boot.dev',
    type: 'image',
    skills: ['SQL', 'PostgreSQL', 'Relational Databases', 'Queries'],
    category: 'databases',
  },
  {
    id: 'bootdev-python',
    title: 'Python',
    issuer: 'Boot.dev',
    issueDate: '2026',
    fileUrl: '/certificates/bootdev_certificate_python.png',
    credentialId: '3b8fc1b2-ab1a-420d-a155-a545584bed83',
    verifyUrl: 'https://boot.dev/certificates/3b8fc1b2-ab1a-420d-a155-a545584bed83',
    verifyLabel: 'Verify on Boot.dev',
    type: 'image',
    skills: ['Python', 'Object-Oriented Programming', 'Backend'],
    category: 'programming',
  },
  {
    id: 'bootdev-python-oop',
    title: 'Object Oriented Programming in Python',
    issuer: 'Boot.dev',
    issueDate: '2026',
    fileUrl: '/certificates/bootdev_python_oop_certificate.png',
    credentialId: 'ce133c3c-3f82-417b-a036-63a8da978888',
    verifyUrl: 'https://boot.dev/certificates/ce133c3c-3f82-417b-a036-63a8da978888',
    verifyLabel: 'Verify on Boot.dev',
    type: 'image',
    skills: ['Python', 'OOP', 'Clean Code'],
    category: 'programming',
  },
  {
    id: 'linkedin-react-ts',
    title: 'React: Using TypeScript',
    issuer: 'LinkedIn Learning',
    issueDate: '2026',
    fileUrl: '/certificates/CertificateOfCompletion_React Using TypeScript.pdf',
    type: 'pdf',
    skills: ['React.js', 'TypeScript', 'Frontend'],
    category: 'programming',
  },
];

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [modalTab, setModalTab] = useState<'badge' | 'document'>('badge');
  const [copiedId, setCopiedId] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'badges' | 'cloud' | 'programming'>('all');

  const openCertificate = (cert: Certificate, tab?: 'badge' | 'document') => {
    setActiveCertificate(cert);
    setModalTab(tab || (cert.badgeUrl ? 'badge' : 'document'));
    setCopiedId(false);
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const filteredCertificates = certificatesData.filter((cert) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'badges') return Boolean(cert.badgeUrl);
    if (activeFilter === 'cloud') return cert.category === 'cloud';
    if (activeFilter === 'programming') return cert.category === 'programming';
    return true;
  });

  const verifiedBadgesCount = certificatesData.filter((c) => Boolean(c.badgeUrl)).length;

  return (
    <section id="certificates" className="space-y-6 pt-16 border-t border-white/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">Certificates</h3>
          <p className="text-white/70 text-sm mt-1">Verified certifications, digital badges, and completed courses</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white text-gray-900 shadow-sm font-bold'
                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10'
            }`}
          >
            All ({certificatesData.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('badges')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeFilter === 'badges'
                ? 'bg-gradient-to-r from-amber-300 to-yellow-400 text-gray-950 font-bold shadow-md ring-2 ring-yellow-300/40'
                : 'bg-yellow-400/15 text-yellow-200 hover:bg-yellow-400/25 border border-yellow-300/30'
            }`}
          >
            <svg className="w-3.5 h-3.5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified Badges ({verifiedBadgesCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('cloud')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeFilter === 'cloud'
                ? 'bg-white text-gray-900 shadow-sm font-bold'
                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10'
            }`}
          >
            Cloud & DevOps
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('programming')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeFilter === 'programming'
                ? 'bg-white text-gray-900 shadow-sm font-bold'
                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10'
            }`}
          >
            Programming
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredCertificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => openCertificate(cert)}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-all duration-200 group cursor-pointer"
          >
            {/* Media Preview Container - Spacious and designed for complete badge visibility */}
            <div 
              className={`relative w-full sm:w-60 md:w-64 shrink-0 overflow-hidden group/media flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-100 ${
                cert.badgeUrl ? (cert.theme?.badgeContainerBg || 'bg-gray-50') : 'bg-gray-100'
              }`}
            >
              {cert.badgeUrl ? (
                <div className={`w-full h-full min-h-[185px] sm:min-h-[200px] bg-gradient-to-br ${cert.theme?.gradient || 'from-sky-50 via-white to-blue-50/70'} p-4 pt-9 pb-4 flex flex-col items-center justify-center relative`}>
                  {/* Verified Badge Pill - Positioned in top-right with dedicated clearance so it NEVER overlaps badge artwork or text */}
                  <div className={`absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 ${cert.theme?.chipBg || 'bg-white/95'} ${cert.theme?.chipText || 'text-[#007aa6]'} border ${cert.theme?.chipBorder || 'border-sky-200'} text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs backdrop-blur-xs z-10`}>
                    <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified Badge
                  </div>

                  {/* Digital Badge Image - Prominently framed, large, crisp, and 100% unobstructed */}
                  <div className="relative z-0 flex items-center justify-center">
                    <img
                      src={cert.badgeUrl}
                      alt={`${cert.title} Digital Badge`}
                      className="w-36 h-36 sm:w-40 sm:h-40 max-w-[160px] sm:max-w-[170px] max-h-[160px] sm:max-h-[170px] object-contain drop-shadow-md group-hover/media:scale-105 group-hover/media:drop-shadow-xl transition-all duration-300"
                    />
                  </div>

                  {/* Gentle hover prompt pill at bottom - does not obscure the badge */}
                  <div className="absolute bottom-2 inset-x-2 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    <span className="bg-gray-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 backdrop-blur-xs">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View Badge & PDF
                    </span>
                  </div>
                </div>
              ) : cert.type === 'image' ? (
                <>
                  <img
                    src={cert.fileUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover sm:object-contain bg-gray-900 group-hover/media:scale-105 transition-transform duration-300"
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
                <div className="w-full h-full min-h-[140px] p-4 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center text-center group-hover/media:bg-blue-100/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white text-[#284bbe] shadow-xs flex items-center justify-center mb-2 group-hover/media:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">PDF Certificate</span>
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#284bbe] transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#284bbe] border border-blue-100">
                      {cert.issuer}
                    </span>
                    {cert.badgeUrl && (
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${cert.theme?.chipBg || 'bg-sky-50'} ${cert.theme?.chipText || 'text-[#007aa6]'} border ${cert.theme?.chipBorder || 'border-sky-200'}`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Digital Badge
                      </span>
                    )}
                    {cert.issueDate && (
                      <span className="text-xs text-gray-500">
                        {cert.issueDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Credential ID if present */}
              {cert.credentialId && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="text-gray-400 font-medium">Credential ID:</span>
                  <code className="text-[11px] font-mono bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded border border-gray-200 select-all">
                    {cert.credentialId}
                  </code>
                </div>
              )}

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-semibold">
                {cert.badgeUrl && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openCertificate(cert, 'badge');
                      }}
                      className="inline-flex items-center gap-1 hover:underline"
                      style={{ color: cert.theme?.accentColor || '#007aa6' }}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>View Badge</span>
                    </button>
                    <span className="text-gray-300">•</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openCertificate(cert, 'document');
                      }}
                      className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 hover:underline"
                    >
                      <span>View PDF Certificate</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {cert.verifyUrl && (
                  <>
                    {cert.badgeUrl && <span className="text-gray-300">•</span>}
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#284bbe] hover:text-[#1e3a8a] hover:underline"
                    >
                      <span>{cert.verifyLabel || 'Verify Credential'}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </>
                )}
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
            <div className="p-4 sm:p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{activeCertificate.title}</h3>
                <p className="text-xs text-gray-500">{activeCertificate.issuer}</p>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {/* Tabs if badge is available */}
                {activeCertificate.badgeUrl && (
                  <div className="inline-flex p-1 bg-gray-200/80 rounded-lg text-xs font-semibold mr-1">
                    <button
                      type="button"
                      onClick={() => setModalTab('badge')}
                      className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                        modalTab === 'badge'
                          ? 'bg-white shadow-xs font-bold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      style={modalTab === 'badge' ? { color: activeCertificate.theme?.accentColor || '#007aa6' } : {}}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Digital Badge
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalTab('document')}
                      className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                        modalTab === 'document'
                          ? 'bg-white text-gray-900 shadow-xs font-bold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Certificate PDF
                    </button>
                  </div>
                )}

                {/* Open file in new tab / download */}
                <a
                  href={activeCertificate.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                  title="Open file in new window"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex items-center justify-center bg-gray-950/5 min-h-[360px]">
              {activeCertificate.badgeUrl && modalTab === 'badge' ? (
                /* Prominent Badge Showcase View */
                <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 animate-fade-in">
                  <div className={`shrink-0 flex items-center justify-center p-4 bg-gradient-to-br ${activeCertificate.theme?.gradient || 'from-sky-50 to-blue-50/50'} rounded-2xl border ${activeCertificate.theme?.chipBorder || 'border-sky-200'} shadow-xs`}>
                    <img
                      src={activeCertificate.badgeUrl}
                      alt={`${activeCertificate.title} Badge`}
                      className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain drop-shadow-lg"
                    />
                  </div>

                  <div className="flex-1 space-y-4 text-center md:text-left w-full">
                    <div>
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${activeCertificate.theme?.chipBg || 'bg-sky-50'} ${activeCertificate.theme?.chipText || 'text-[#007aa6]'} border ${activeCertificate.theme?.chipBorder || 'border-sky-200'} mb-2`}>
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Official Digital Credential
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-950">{activeCertificate.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Issued by <strong className="text-gray-900">{activeCertificate.issuer}</strong>
                        {activeCertificate.issuerPartner ? ` • ${activeCertificate.issuerPartner}` : ''}
                      </p>
                      {activeCertificate.issueDate && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          Issued: <span className="font-medium text-gray-700">{activeCertificate.issueDate}</span>
                        </p>
                      )}
                    </div>

                    {activeCertificate.credentialId && (
                      <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">Credential ID</span>
                        <div className="flex items-center justify-between gap-2">
                          <code className="text-xs font-mono text-gray-800 break-all select-all">
                            {activeCertificate.credentialId}
                          </code>
                          <button
                            type="button"
                            onClick={() => handleCopyId(activeCertificate.credentialId!)}
                            className="shrink-0 px-2.5 py-1 text-xs font-semibold bg-white hover:bg-gray-100 text-gray-700 rounded border border-gray-200 shadow-2xs transition-colors cursor-pointer"
                          >
                            {copiedId ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
                      {activeCertificate.verifyUrl && (
                        <a
                          href={activeCertificate.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white rounded-lg shadow-xs transition-colors"
                          style={{ backgroundColor: activeCertificate.theme?.accentColor || '#007aa6' }}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{activeCertificate.verifyLabel || 'Verify Credential'}</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setModalTab('document')}
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>View Certificate PDF</span>
                      </button>
                      <a
                        href={activeCertificate.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 rounded-lg transition-colors"
                      >
                        <span>Open PDF</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) : activeCertificate.type === 'image' ? (
                <div className="w-full flex flex-col items-center gap-3">
                  <img
                    src={activeCertificate.fileUrl}
                    alt={activeCertificate.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
                  />
                  {activeCertificate.verifyUrl && (
                    <a
                      href={activeCertificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#284bbe] hover:underline"
                    >
                      <span>{activeCertificate.verifyLabel || 'Verify Credential on Issuer Site'}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center">
                  <iframe
                    src={activeCertificate.fileUrl}
                    title={activeCertificate.title}
                    className="w-full h-[65vh] rounded-lg border border-gray-200 shadow-md bg-white"
                  />
                  {activeCertificate.badgeUrl && (
                    <button
                      type="button"
                      onClick={() => setModalTab('badge')}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold hover:underline cursor-pointer"
                      style={{ color: activeCertificate.theme?.accentColor || '#007aa6' }}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Switch back to Digital Badge view
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

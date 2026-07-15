export default function Education() {
  return (
    <section id="education" className="space-y-6 pt-16 pb-24 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-[#284bbe]">Education</h3>
      <div className="space-y-4">
        {/* IIT */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg text-gray-900">Informatics Institute of Technology (IIT)</h4>
            <span className="text-sm text-gray-500 font-mono">2024 - Present</span>
          </div>
          <p className="text-gray-700 font-medium">BSc (Hons) Computer Science</p>
        </div>

        {/* Kingswood College Kandy */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg text-gray-900">Kingswood College Kandy</h4>
            <span className="text-sm text-gray-500 font-mono">2010 - 2023</span>
          </div>
          <p className="text-gray-700 font-medium">Primary & Secondary Education</p>
        </div>
      </div>
    </section>
  );
}
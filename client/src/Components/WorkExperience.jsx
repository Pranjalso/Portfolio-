import React, { useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCertificate,
  FaEye,
  FaDownload,
  FaTimes,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

// ============================================
// 📌 IMPORT YOUR CERTIFICATE IMAGES FROM src/assets/
// ============================================
import graphuraCert from "../assets/graphura-certificate.png"; // ✅ Make sure this path is correct
import astexaiCert from "../assets/astexai-certificate.png"; // ✅ Make sure this path is correct
import tenCert from "../assets/ten-certificate.png"; // ✅ Make sure this path is correct

const WorkExperience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "MERN Stack Developer Intern",
      company: "Graphura India Pvt. Ltd.",
      location: "India",
      period: "Jan 2026 - Apr 2026",
      project: "Shiv Ganga Hotel Website",
      description: [
        "Developed full-stack hotel website using MongoDB, Express.js, React.js, and Node.js with real-time features",
        "Built and integrated RESTful APIs with JWT Authentication for secure user and admin operations",
        "Collaborated with the team to debug issues, enhance features, and deliver a scalable production application",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      certificate: {
        title: "MERN Stack Development Internship",
        issuer: "Graphura India Pvt. Ltd.",
        issueDate: "April 2026",
        credentialId: "GRP-MERN-2026-001",
        image: graphuraCert, // ✅ Now properly imported
      },
    },
    {
      id: 2,
      title: "MERN Stack Developer Intern",
      company: "AstexAI",
      location: "India",
      period: "Jan 2026 - Mar 2026",
      project: "AI-Integrated Web Application",
      description: [
        "Contributed to AI-integrated web application development using MERN stack technologies",
        "Worked on building and optimizing React components and backend APIs",
        "Collaborated in an agile team environment to deliver features on time",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      certificate: {
        title: "AI & MERN Stack Internship",
        issuer: "AstexAI",
        issueDate: "March 2026",
        credentialId: "ASTX-AI-2026-042",
        image: astexaiCert, // ✅ Now properly imported
      },
    },
    {
      id: 3,
      title: "Intern",
      company: "TEN Entrepreneur Network",
      location: "India",
      period: "Dec 2025 - Mar 2026",
      project: "Web Development & Product Initiatives",
      description: [
        "Contributed to projects involving web development and entrepreneurial product initiatives",
        "Assisted in building responsive web interfaces and optimizing user experience",
        "Collaborated with cross-functional teams to deliver project milestones",
      ],
      technologies: ["Web Development", "UI/UX", "Collaboration Tools"],
      certificate: {
        title: "Entrepreneurship & Web Development",
        issuer: "TEN Entrepreneur Network",
        issueDate: "March 2026",
        credentialId: "TEN-WD-2025-089",
        image: tenCert, // ✅ Now properly imported
      },
    },
  ];

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <section
        id="work"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-4">
              <MdWorkOutline className="text-indigo-400 text-sm" />
              <span className="text-indigo-400 text-xs font-medium tracking-wide">
                PROFESSIONAL JOURNEY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Professional internships where I delivered real-world solutions
              and earned industry recognition
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-500/40 via-rose-500/40 to-indigo-500/40" />

            {/* Experience Cards */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className={`relative flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 ring-4 ring-indigo-500/20 z-10 top-8" />

                {/* Experience Card */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <FaCalendarAlt className="text-indigo-400 text-xs" />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center flex-wrap gap-2 text-gray-300 mb-3">
                      <FaBriefcase className="text-indigo-400 text-sm" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-gray-600">•</span>
                      <FaMapMarkerAlt className="text-rose-400 text-xs" />
                      <span className="text-gray-400 text-sm">{exp.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">
                      <span className="text-indigo-400 text-xs font-medium">
                        📁 {exp.project}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-400 text-sm">
                          <span className="text-indigo-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-700/50">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-700/50 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certificate Card */}
                <div className="lg:w-1/2">
                  <div
                    className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-dashed border-gray-600/40 hover:border-indigo-500/60 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    onClick={() => openCertificate(exp.certificate)}
                  >
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all duration-300">
                        <FaCertificate className="text-indigo-400 text-xl group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      {/* Certificate Preview Image */}
                      <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-800/50">
                        <img
                          src={exp.certificate.image}
                          alt={`${exp.company} Certificate`}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                          <FaEye className="text-white text-2xl opacity-70 group-hover:opacity-100" />
                        </div>
                      </div>

                      <h4 className="text-white font-semibold text-lg mb-1">
                        {exp.certificate.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{exp.certificate.issuer}</p>
                      <p className="text-gray-500 text-xs mt-1">
                        Issued: {exp.certificate.issueDate}
                      </p>

                      <button className="mt-4 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 text-sm font-medium flex items-center gap-2 group-hover:bg-indigo-500/20 transition-all duration-300">
                        <FaCertificate className="text-xs" />
                        View Certificate
                        <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-rose-500/0 group-hover:from-indigo-500/5 group-hover:via-transparent group-hover:to-rose-500/5 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12" data-aos="fade-up">
            <a
              href="https://www.linkedin.com/in/pranjalsoni-mernstack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl text-gray-300 text-sm font-medium transition-all duration-300 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/5"
            >
              View Full Resume on LinkedIn
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeCertificate}
        >
          <div
            className="relative max-w-2xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertificate}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-rose-500/80 transition-all duration-300"
            >
              <FaTimes className="text-white text-lg" />
            </button>

            <div className="relative h-64 sm:h-80">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-contain bg-gray-900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaCertificate className="text-indigo-400 text-2xl" />
                <h3 className="text-xl font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm">Issued By</span>
                  <span className="text-white font-medium">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm">Issue Date</span>
                  <span className="text-white font-medium">{selectedCert.issueDate}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400 text-sm">Credential ID</span>
                  <span className="text-indigo-400 font-mono text-sm">
                    {selectedCert.credentialId}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-indigo-400 font-medium flex items-center justify-center gap-2 hover:bg-indigo-500/30 transition-all duration-300"
                >
                  <FaDownload className="text-sm" />
                  Open Full Certificate
                </a>
                <button
                  onClick={closeCertificate}
                  className="flex-1 px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 font-medium hover:bg-gray-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkExperience;
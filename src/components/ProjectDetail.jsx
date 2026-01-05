import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  ExternalLink,
  Github,
  Star,
  Calendar,
  Code,
  Database,
  Palette,
  Globe,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { SkillTag } from "./SkillTag";

// Sample project data - in real app, this would come from a context or API
const projectsData = {
  "vehicle-management": {
    id: "vehicle-management",
    title: "Online Vehicle Management for Universal Leaf Philippines, Inc.",
    category: "Capstone Project",
    description:
      "Led the full-stack development of an Online Vehicle Management System capstone project, delivering a functional web application for efficient vehicle logistics and data management.",
    fullDescription:
      "This capstone project involved designing and implementing a comprehensive vehicle management system for Universal Leaf Philippines, Inc. The system streamlines vehicle logistics, maintenance scheduling, fuel tracking, and driver assignment through an intuitive web interface. Built with modern web technologies, it features role-based access control, real-time tracking, and automated reporting capabilities.",
    year: "2025",
    role: "Lead Developer & Project Manager",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Real-time vehicle tracking and monitoring",
      "Automated maintenance scheduling and alerts",
      "Fuel consumption tracking and reporting",
      "Driver assignment and management system",
      "Role-based access control (Admin, Manager, Staff)",
      "Automated report generation (PDF/Excel)",
    ],
    challenges: [
      "Integrating real-time GPS tracking with existing fleet systems",
      "Ensuring data security and user authentication",
      "Optimizing database queries for large datasets",
      "Creating responsive design for mobile field staff",
    ],
    outcomes: [
      "Reduced vehicle downtime by 30% through preventive maintenance",
      "Improved fuel efficiency tracking by 25%",
      "Streamlined reporting process from days to hours",
      "Enhanced data accuracy and accessibility",
    ],
    liveUrl: null,
    githubUrl: null,
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  "dental-records": {
    id: "dental-records",
    title: "Patient Dental Records Management System",
    category: "Web Application",
    description:
      "Led a project demonstrating advanced proficiency in full-stack web development to streamline patient data and treatment history.",
    fullDescription:
      "A comprehensive dental clinic management system designed to digitize patient records, appointment scheduling, and treatment history. The application features patient portals, dentist dashboards, and administrative controls to optimize clinic operations and improve patient care coordination.",
    year: "2024",
    role: "Full-Stack Developer",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Digital patient records with medical history",
      "Appointment scheduling and calendar management",
      "Treatment planning and progress tracking",
      "Billing and invoicing system",
      "Patient portal for appointment requests",
      "Dentist dashboard for patient management",
    ],
    challenges: [
      "Ensuring HIPAA-compliant data security",
      "Creating intuitive UI for non-technical medical staff",
      "Integrating calendar and scheduling features",
      "Managing complex patient-dentist relationships",
    ],
    outcomes: [
      "Reduced paper-based record keeping by 95%",
      "Improved appointment efficiency by 40%",
      "Enhanced patient satisfaction through portal access",
      "Streamlined billing and payment processes",
    ],
    liveUrl: null,
    githubUrl: null,
    images: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  spillthebeans: {
    id: "spillthebeans",
    title: "SpillTheBeans - Social Media Web App",
    category: "Full-Stack React Application",
    description:
      "A project demonstrating advanced proficiency in full-stack web development with React, Tailwind CSS, and Appwrite (BaaS).",
    fullDescription:
      "A modern social media platform for coffee enthusiasts to share reviews, discover cafes, and connect with fellow coffee lovers. Built with React for the frontend and Appwrite as a backend-as-a-service solution, featuring real-time updates, user authentication, and interactive cafe reviews.",
    year: "2024",
    role: "Full-Stack Developer",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Appwrite",
      "Node.js",
    ],
    features: [
      "User authentication and profile management",
      "Cafe discovery and review system",
      "Real-time notifications and updates",
      "Interactive rating and commenting system",
      "Mobile-responsive design",
      "Image upload and management",
    ],
    challenges: [
      "Implementing real-time features with Appwrite",
      "Creating responsive design for mobile users",
      "Managing user-generated content and reviews",
      "Optimizing performance with React hooks",
    ],
    outcomes: [
      "Successfully deployed full-stack application",
      "Implemented secure user authentication",
      "Created engaging user experience with animations",
      "Demonstrated proficiency in modern web technologies",
    ],
    liveUrl: null,
    githubUrl: null,
    images: [
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
  },
};

export function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate loading project data
    const loadedProject = projectsData[projectId];
    setProject(loadedProject);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-sm w-full">
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-black text-gray-700 mb-4">
            Project not found
          </h2>
          <Link
            to="/projects"
            className="text-black font-semibold hover:underline"
          >
            Browse all projects
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", name: "Overview", icon: <Globe className="w-4 h-4" /> },
    {
      id: "features",
      name: "Features",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      id: "technologies",
      name: "Technologies",
      icon: <Code className="w-4 h-4" />,
    },
    {
      id: "challenges",
      name: "Challenges",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Project Image */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-96 object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="pt-32 sm:pt-40 pb-8 sm:pb-12">
            <div className="mx-auto max-w-6xl">
              {/* Breadcrumb */}
              <nav className="hidden sm:flex mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link
                      to="/projects"
                      className="text-gray-700 hover:text-black font-medium transition-colors text-sm"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <ChevronRight size={15} />
                  </li>
                  <li className="text-black font-semibold text-sm truncate">
                    {project.title}
                  </li>
                </ol>
              </nav>

              {/* Project Header */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Project Image Gallery */}
                <div className="w-full lg:w-2/5">
                  <div className="bg-white rounded-3xl p-4 border-2 border-gray-100 shadow-lg">
                    <img
                      src={project.images[activeImageIndex]}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl mb-4"
                    />

                    {/* Thumbnail Gallery */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            activeImageIndex === idx
                              ? "border-black scale-105"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${project.title} view ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-3/5">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-gray-100 shadow-lg">
                    {/* Project Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full">
                            {project.category}
                          </span>
                          {project.year && (
                            <span className="flex items-center gap-1 text-gray-600 text-sm">
                              <Calendar className="w-4 h-4" />
                              {project.year}
                            </span>
                          )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
                          {project.title}
                        </h1>

                        <p className="text-gray-600 font-medium">
                          {project.role}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="font-semibold text-sm">
                              Live Demo
                            </span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 border-gray-200 text-black rounded-xl hover:border-black transition-all duration-300 flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            <span className="font-semibold text-sm">Code</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Short Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-lg font-black text-black mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <SkillTag
                            key={idx}
                            skill={tech}
                            type="technology"
                            showIcon={true}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-2xl border-2 border-gray-100 text-center">
                        <div className="text-2xl font-black text-black mb-1">
                          {project.technologies.length}
                        </div>
                        <div className="text-sm font-semibold text-gray-600">
                          Technologies
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-2xl border-2 border-gray-100 text-center">
                        <div className="text-2xl font-black text-black mb-1">
                          {project.features.length}
                        </div>
                        <div className="text-sm font-semibold text-gray-600">
                          Features
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-2xl border-2 border-gray-100 text-center">
                        <div className="text-2xl font-black text-black mb-1">
                          {project.category.includes("Capstone")
                            ? "Capstone"
                            : "Project"}
                        </div>
                        <div className="text-sm font-semibold text-gray-600">
                          Type
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-2xl border-2 border-gray-100 text-center">
                        <div className="text-2xl font-black text-black mb-1">
                          {project.year}
                        </div>
                        <div className="text-sm font-semibold text-gray-600">
                          Year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-t-2 border-b-2 border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 py-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex-shrink-0
                  ${
                    activeTab === tab.id
                      ? "bg-black text-white"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                <h3 className="text-2xl font-black text-black mb-4">
                  Project Overview
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-black text-black mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-black mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      My Role
                    </h4>
                    <p className="text-gray-700 mb-4">{project.role}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          Project Duration: {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Code className="w-4 h-4" />
                        <span className="font-medium">
                          Stack: {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                <h3 className="text-2xl font-black text-black mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="font-semibold text-gray-800">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === "technologies" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                <h3 className="text-2xl font-black text-black mb-4">
                  Technology Stack
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-black text-black mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Frontend Technologies
                    </h4>
                    <div className="space-y-3">
                      {project.technologies
                        .filter((tech) =>
                          [
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "React",
                            "Tailwind CSS",
                          ].includes(tech),
                        )
                        .map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                          >
                            <span className="font-semibold text-gray-800">
                              {tech}
                            </span>
                            <SkillTag skill={tech} type="technology" />
                          </div>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-black mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Backend & Database
                    </h4>
                    <div className="space-y-3">
                      {project.technologies
                        .filter((tech) =>
                          ["PHP", "MySQL", "Appwrite", "Node.js"].includes(
                            tech,
                          ),
                        )
                        .map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                          >
                            <span className="font-semibold text-gray-800">
                              {tech}
                            </span>
                            <SkillTag skill={tech} type="technology" />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === "challenges" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                <h3 className="text-2xl font-black text-black mb-4">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            Challenge {idx + 1}
                          </h4>
                          <p className="text-gray-700">{challenge}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-8 border-t-2 border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

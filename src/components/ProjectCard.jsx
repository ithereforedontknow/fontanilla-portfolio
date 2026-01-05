import { Link } from "react-router-dom";
import { ExternalLink, Star, TrendingUp, Code, Database } from "lucide-react";

export const ProjectCard = ({ project, index }) => {
  // Determine icon based on project type/tech
  const getProjectIcon = (tech) => {
    if (tech.includes("React") || tech.includes("JavaScript"))
      return <Code className="w-5 h-5" />;
    if (tech.includes("PHP") || tech.includes("MySQL"))
      return <Database className="w-5 h-5" />;
    return <ExternalLink className="w-5 h-5" />;
  };

  // Determine badge color based on project type
  const getProjectBadge = (title) => {
    if (title.includes("Vehicle"))
      return "bg-blue-100 text-blue-800 border-blue-200";
    if (title.includes("Dental"))
      return "bg-green-100 text-green-800 border-green-200";
    if (title.includes("SpillTheBeans"))
      return "bg-purple-100 text-purple-800 border-purple-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div
      className="group mb-8 last:mb-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-6 border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col gap-4">
          {/* Main Content - Icon and Info */}
          <div className="flex gap-4">
            {/* Project Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-white shadow-sm group-hover:bg-gray-200 transition-colors duration-300">
                <div className="text-black">
                  {getProjectIcon(project.technologies.join(", "))}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-1 sm:mb-2 group-hover:text-black transition-colors line-clamp-1">
                  {project.title}
                </h3>
                {/* Featured Badge for capstone project */}
                {project.title.includes("Vehicle Management") && (
                  <div className="flex items-center gap-1.5 bg-black text-white px-3 py-1 rounded-xl shadow-sm flex-shrink-0">
                    <Star className="w-3 h-3" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Capstone
                    </span>
                  </div>
                )}
              </div>

              {/* Project Type Badge */}
              <div className="mb-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getProjectBadge(project.title)}`}
                >
                  {project.category}
                </span>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-gray-100 text-gray-800 px-2 py-1 rounded-lg border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-xs font-semibold text-gray-500 px-2 py-1">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Role/Lead Badge */}
            {project.role === "Lead Developer" && (
              <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-2 rounded-xl border-2 border-gray-200">
                <TrendingUp className="w-4 h-4 text-gray-900" />
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  {project.role}
                </span>
              </div>
            )}

            {/* Full Stack Badge */}
            {project.stack === "Full-Stack" && (
              <div className="flex items-center gap-1.5 bg-black text-white px-3 py-2 rounded-xl shadow-lg">
                <Code className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Full-Stack
                </span>
              </div>
            )}
          </div>

          {/* View Details Button */}
          <div className="pt-3 border-t-2 border-gray-100">
            <Link
              to={`/projects/${project.id}`}
              className="block text-center sm:inline-block px-6 py-3 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              View Project Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example data structure for reference:
/*
const projectData = {
  id: "vehicle-management",
  title: "Online Vehicle Management for Universal Leaf Philippines, Inc.",
  category: "Web Application",
  description: "Led the full-stack development of an Online Vehicle Management System capstone project, delivering a functional web application for efficient vehicle logistics and data management.",
  technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  role: "Lead Developer",
  stack: "Full-Stack",
  year: "2025"
};
*/

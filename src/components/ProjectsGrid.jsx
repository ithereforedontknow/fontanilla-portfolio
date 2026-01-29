import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import {
  Search,
  Filter,
  Code,
  Database,
  Globe,
  TrendingUp,
} from "lucide-react";

// Sample projects data - in real app, this would come from context or API
const allProjects = [
  {
    id: "vehicle-management",
    title: "Online Vehicle Management for Universal Leaf Philippines, Inc.",
    category: "Capstone Project",
    description:
      "Led the full-stack development of an Online Vehicle Management System capstone project, delivering a functional web application for efficient vehicle logistics and data management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    role: "Lead Developer",
    stack: "Full-Stack",
    year: "2025",
    featured: true,
  },
  {
    id: "dental-records",
    title: "Patient Dental Records Management System",
    category: "Web Application",
    description:
      "Led a project demonstrating advanced proficiency in full-stack web development with HTML, CSS, JavaScript, PHP, and MySQL to streamline patient data and treatment history.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    role: "Lead Developer",
    stack: "Full-Stack",
    year: "2024",
    featured: false,
  },
  {
    id: "spillthebeans",
    title: "SpillTheBeans - Social Media Web App",
    category: "React Application",
    description:
      "A project demonstrating advanced proficiency in full-stack web development with React, Tailwind CSS, and Appwrite (BaaS).",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Appwrite"],
    role: "Full-Stack Developer",
    stack: "Full-Stack",
    year: "2025",
    featured: true,
  },
  {
    id: "music.me",
    title: "music.me - Music Recommendation App",
    category: "React Application",
    description:
      "A music recommendation app built with React, Tailwind CSS, and JavaScript.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    role: "Frontend Developer",
    stack: "Frontend",
    year: "2026",
    featured: true,
  },
];

export function ProjectsGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = allProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase()),
        ) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      switch (filterBy) {
        case "capstone":
          return matchesSearch && project.category === "Capstone Project";
        case "web-app":
          return matchesSearch && project.category === "Web Application";
        case "react":
          return matchesSearch && project.technologies.includes("React");
        case "fullstack":
          return matchesSearch && project.stack === "Full-Stack";
        default:
          return matchesSearch;
      }
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "year-newest":
          return b.year.localeCompare(a.year);
        case "year-oldest":
          return a.year.localeCompare(b.year);
        case "title":
          return a.title.localeCompare(b.title);
        case "featured":
        default:
          // Featured projects first, then by year (newest first)
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.year.localeCompare(a.year);
      }
    });

    return filtered;
  }, [searchQuery, sortBy, filterBy]);

  // Project statistics
  const projectStats = useMemo(() => {
    const total = allProjects.length;
    const capstoneCount = allProjects.filter(
      (p) => p.category === "Capstone Project",
    ).length;
    const webAppCount = allProjects.filter(
      (p) => p.category === "Web Application",
    ).length;
    const reactCount = allProjects.filter((p) =>
      p.technologies.includes("React"),
    ).length;
    const fullstackCount = allProjects.filter(
      (p) => p.stack === "Full-Stack",
    ).length;

    return {
      total,
      capstoneCount,
      webAppCount,
      reactCount,
      fullstackCount,
    };
  }, []);

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <div className="pt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4">
            My Projects
          </h1>
          <p className="text-center text-lg text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
            A collection of my full-stack web development projects showcasing
            different technologies and problem-solving approaches.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
              <div className="text-2xl font-black text-black mb-1">
                {projectStats.total}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                Total Projects
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
              <div className="text-2xl font-black text-black mb-1">
                {projectStats.capstoneCount}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                Capstone
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
              <div className="text-2xl font-black text-black mb-1">
                {projectStats.webAppCount}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                Web Apps
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
              <div className="text-2xl font-black text-black mb-1">
                {projectStats.reactCount}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                React Apps
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
              <div className="text-2xl font-black text-black mb-1">
                {projectStats.fullstackCount}
              </div>
              <div className="text-sm font-semibold text-gray-600">
                Full-Stack
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects by name, tech, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl bg-white text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors duration-300 font-medium"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Filter Dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Filter className="w-5 h-5 text-gray-400" />
                </div>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl bg-white text-black focus:border-black focus:outline-none transition-colors duration-300 font-semibold appearance-none cursor-pointer"
                >
                  <option value="all">All Projects</option>
                  <option value="capstone">Capstone Projects</option>
                  <option value="web-app">Web Applications</option>
                  <option value="react">React Projects</option>
                  <option value="fullstack">Full-Stack</option>
                </select>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl bg-white text-black focus:border-black focus:outline-none transition-colors duration-300 font-semibold appearance-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="year-newest">Newest First</option>
                  <option value="year-oldest">Oldest First</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Results Count and Active Filters */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-black font-medium">
                  Showing {filteredAndSortedProjects.length} project
                  {filteredAndSortedProjects.length !== 1 ? "s" : ""}
                  {searchQuery && ` matching "${searchQuery}"`}
                  {filterBy !== "all" && ` in ${filterBy.replace("-", " ")}`}
                </p>
              </div>

              {/* Active Filter Badges */}
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
                    Search: {searchQuery}
                    <button
                      onClick={() => setSearchQuery("")}
                      className="hover:text-gray-300"
                    >
                      ×
                    </button>
                  </span>
                )}

                {filterBy !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
                    {filterBy.replace("-", " ")}
                    <button
                      onClick={() => setFilterBy("all")}
                      className="hover:text-gray-600"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Projects List */}
          {filteredAndSortedProjects.length > 0 ? (
            <div className="space-y-8">
              {filteredAndSortedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 bg-white rounded-2xl border-2 border-gray-100">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-700 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-6">
                {searchQuery
                  ? `No projects match "${searchQuery}"`
                  : "No projects match your filters"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterBy("all");
                  setSortBy("featured");
                }}
                className="px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Technology Summary */}
          {filteredAndSortedProjects.length > 0 && (
            <div className="mt-16 bg-white rounded-2xl p-6 border-2 border-gray-100">
              <h3 className="text-xl font-black text-black mb-4 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Technologies Used Across Projects
              </h3>

              <div className="flex flex-wrap gap-3">
                {/* Get all unique technologies from filtered projects */}
                {Array.from(
                  new Set(
                    filteredAndSortedProjects.flatMap(
                      (project) => project.technologies,
                    ),
                  ),
                ).map((tech, idx) => {
                  const count = filteredAndSortedProjects.filter((project) =>
                    project.technologies.includes(tech),
                  ).length;

                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl border-2 border-gray-200"
                    >
                      <span className="font-semibold text-gray-800">
                        {tech}
                      </span>
                      <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-black mb-1">
                      {
                        filteredAndSortedProjects.filter(
                          (p) => p.stack === "Full-Stack",
                        ).length
                      }
                    </div>
                    <div className="text-sm font-semibold text-gray-600">
                      Full-Stack Projects
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-black text-black mb-1">
                      {
                        Array.from(
                          new Set(
                            filteredAndSortedProjects.flatMap(
                              (project) => project.technologies,
                            ),
                          ),
                        ).length
                      }
                    </div>
                    <div className="text-sm font-semibold text-gray-600">
                      Unique Technologies
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-black text-black mb-1">
                      {
                        new Set(
                          filteredAndSortedProjects.map(
                            (project) => project.year,
                          ),
                        ).size
                      }
                    </div>
                    <div className="text-sm font-semibold text-gray-600">
                      Years of Work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-4">Want to see more?</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Interested in my development process or want to discuss a
                potential project?
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

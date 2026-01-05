import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Database,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SkillTag } from "./SkillTag";
import HeroImage from "../assets/hero.jpg";

export function HeroSection() {
  const mainTechnologies = [
    { name: "React", type: "technology", level: "intermediate" },
    { name: "JavaScript", type: "technology", level: "intermediate" },
    { name: "PHP", type: "technology", level: "intermediate" },
    { name: "MySQL", type: "technology", level: "intermediate" },
    { name: "HTML/CSS", type: "technology", level: "expert" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Avatar & Personal Info */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
            {/* Avatar/Profile Image - Square with Rounded Corners */}
            <div className="relative mb-8 lg:mb-20">
              <div className="w-80 h-80 lg:w-90 lg:h-90 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={HeroImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-green-500 w-5 h-5 lg:w-6 lg:h-6 rounded-full border-4 border-white shadow-lg"></div>
            </div>

            {/* Contact Info Card - Hidden on Mobile, Visible on Large Screens */}
            <div className="hidden lg:block bg-white rounded-2xl p-6 border-2 border-gray-100 w-full max-w-sm">
              <h3 className="font-black text-black mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Contact Information
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-semibold text-black">
                      juleethan@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-semibold text-black">+639193694589</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-black">Agoo, La Union</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="w-full lg:w-3/5">
            {/* Introduction */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight mb-4">
                Jule Ethan E. Fontanilla
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-2xl mb-4">
                <Code className="w-5 h-5" />
                <span className="font-bold text-sm">
                  Full-Stack Web Developer
                </span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Information Technology graduate specializing in web development
                with expertise in JavaScript, PHP, MySQL, and HTML/CSS, skilled
                in building scalable full-stack applications and troubleshooting
                technical issues.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="mb-8">
              <h2 className="text-xl font-black text-black mb-4 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Core Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {mainTechnologies.map((tech, index) => (
                  <SkillTag
                    key={index}
                    skill={tech.name}
                    type={tech.type}
                    level={tech.level}
                    showIcon={true}
                  />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
                <div className="text-2xl font-black text-black mb-1">3+</div>
                <div className="text-sm font-semibold text-gray-600">
                  Projects
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
                <div className="text-2xl font-black text-black mb-1">1</div>
                <div className="text-sm font-semibold text-gray-600">
                  Internship
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
                <div className="text-2xl font-black text-black mb-1">6+</div>
                <div className="text-sm font-semibold text-gray-600">
                  Technologies
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 text-center">
                <div className="text-2xl font-black text-black mb-1">BS IT</div>
                <div className="text-sm font-semibold text-gray-600">
                  Graduate
                </div>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="group relative overflow-hidden px-8 py-4 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-black text-black font-bold rounded-2xl hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Education Badge */}
            <div className="mt-8 flex items-center gap-3 bg-white p-4 rounded-2xl border-2 border-gray-100">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Education</p>
                <p className="font-bold text-black">
                  Bachelor of Science in Information Technology
                </p>
                <p className="text-sm text-gray-600">
                  Saint Louis College • 2021-2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center animate-bounce">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-sm font-semibold text-gray-500">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

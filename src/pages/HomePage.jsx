import { HeroSection } from "../components/HeroSection";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SkillGroup } from "../components/SkillTag";
import { Footer } from "../components/Footer";

export function HomePage() {
  const technologies = [
    { name: "HTML", level: "expert" },
    { name: "CSS", level: "expert" },
    { name: "JavaScript", level: "intermediate" },
    { name: "PHP", level: "intermediate" },
    { name: "MySQL", level: "intermediate" },
    { name: "React", level: "intermediate" },
  ];

  const skills = [
    "Web Development",
    "Database Management",
    "Hardware Troubleshooting",
    "Technical Support",
    "Full-Stack Development",
    "Problem Solving",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Projects Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <SkillGroup
              title="Technologies"
              skills={technologies}
              type="technology"
              columns={2}
            />

            <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-gray-100">
              <h3 className="text-lg sm:text-xl font-black text-black mb-4 sm:mb-6">
                Skills & Expertise
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      {skill}
                    </span>
                    <div className="flex gap-1 flex-shrink-0 ml-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            i < 4 ? "bg-black" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

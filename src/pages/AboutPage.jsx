import { AboutSection } from "../components/AboutCard";
import { SkillGroup } from "../components/SkillTag";
import { Footer } from "../components/Footer";

export function AboutPage() {
  const educationItems = [
    {
      title: "Bachelor of Science in Information Technology",
      subtitle: "Saint Louis College",
      location: "La Union, Philippines",
      date: "2021 - 2025",
      description:
        "Specialized in web development with focus on full-stack applications, database management, and software engineering principles.",
      items: [
        "Graduated with honors",
        "Capstone project: Online Vehicle Management System",
        "Active member of IT student organization",
      ],
      tags: ["Web Development", "Database Management", "Software Engineering"],
    },
  ];

  const experienceItems = [
    {
      title: "Intern",
      subtitle: "COMELEC - Agoo",
      location: "Agoo, La Union",
      date: "Feb 2025 - May 2025",
      items: [
        "Created spreadsheets for data management using Microsoft Excel",
        "Performed hardware troubleshooting and repairs",
        "Managed data entry and document processing",
        "Assisted visitors and provided technical support",
      ],
      tags: [
        "Data Management",
        "Technical Support",
        "Hardware Troubleshooting",
      ],
    },
  ];

  const certifications = [
    "Certificate of Participation in the 'La Union Cybersecurity Conference X Chapter Activation'",
    "Certificate of Participation in the Personality Development Seminar",
    "Certificate of Participation in the Team Building Workshop",
    "Certificate of Participation in the Seminar Workshop in Office Productivity Tools",
    "Certificate of Participation in the Anti – Sexual Harassment Seminar",
  ];

  const technologies = [
    { name: "HTML", level: "expert" },
    { name: "CSS", level: "expert" },
    { name: "JavaScript", level: "intermediate" },
    { name: "PHP", level: "intermediate" },
    { name: "MySQL", level: "intermediate" },
    { name: "React", level: "intermediate" },
  ];

  const languages = [
    { name: "English", level: "fluent" },
    { name: "Tagalog", level: "native" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4">
              About Me
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Information Technology graduate specializing in web development
              with expertise in JavaScript, PHP, MySQL, and HTML/CSS.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education */}
        <AboutSection
          title="Education"
          items={educationItems}
          type="education"
        />

        {/* Experience */}
        <AboutSection
          title="Professional Experience"
          items={experienceItems}
          type="experience"
        />

        {/* Certifications */}
        <section className="py-8">
          <h2 className="text-3xl font-black text-black mb-6">
            Certifications
          </h2>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillGroup
              title="Technologies"
              skills={technologies}
              type="technology"
              columns={2}
            />

            <SkillGroup
              title="Languages"
              skills={languages}
              type="language"
              columns={1}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

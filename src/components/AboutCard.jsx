import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
} from "lucide-react";

export const AboutCard = ({
  type = "experience", // "experience", "education", "certification"
  title,
  subtitle,
  location,
  date,
  description,
  items = [], // Bullet points or key responsibilities
  tags = [], // Skills or technologies used
  icon,
  index = 0,
}) => {
  // Get appropriate icon based on type
  const getIcon = () => {
    if (icon) return icon;

    switch (type) {
      case "education":
        return <GraduationCap className="w-6 h-6" />;
      case "certification":
        return <Award className="w-6 h-6" />;
      case "experience":
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  // Get color scheme based on type
  const getColorClasses = () => {
    switch (type) {
      case "education":
        return {
          bg: "bg-blue-100",
          border: "border-blue-300",
          text: "text-blue-800",
          iconBg: "bg-blue-600",
        };
      case "certification":
        return {
          bg: "bg-purple-100",
          border: "border-purple-300",
          text: "text-purple-800",
          iconBg: "bg-purple-600",
        };
      case "experience":
      default:
        return {
          bg: "bg-gray-100",
          border: "border-gray-300",
          text: "text-gray-800",
          iconBg: "bg-gray-800",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div
      className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-black transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Icon and Date */}
        <div className="flex-shrink-0">
          <div
            className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-4 lg:mb-0`}
          >
            <div className="text-white">{getIcon()}</div>
          </div>

          {/* Date Badge - Desktop */}
          <div className="hidden lg:block mt-4">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${colors.bg} ${colors.border} border-2`}
            >
              <Calendar className="w-4 h-4" />
              <span className="font-semibold text-sm">{date}</span>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <h3 className="text-xl font-black text-black group-hover:text-gray-800 transition-colors">
                {title}
              </h3>

              {/* Date Badge - Mobile */}
              <div className="lg:hidden">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${colors.bg} ${colors.border} border`}
                >
                  <Calendar className="w-3 h-3" />
                  <span className="font-semibold text-xs">{date}</span>
                </div>
              </div>
            </div>

            {/* Subtitle and Location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
              {subtitle && (
                <p className="font-semibold text-gray-700">{subtitle}</p>
              )}

              {location && (
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {description}
              </p>
            )}
          </div>

          {/* Items/Bullet Points */}
          {items.length > 0 && (
            <div className="mb-4">
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags/Skills */}
          {tags.length > 0 && (
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Companion component for grouping AboutCards
export const AboutSection = ({
  title,
  subtitle,
  items,
  type = "experience",
  columns = 1,
}) => {
  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-black mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
      </div>

      <div className={`grid gap-6 ${columns === 2 ? "lg:grid-cols-2" : ""}`}>
        {items.map((item, index) => (
          <AboutCard
            key={index}
            type={type}
            title={item.title}
            subtitle={item.subtitle}
            location={item.location}
            date={item.date}
            description={item.description}
            items={item.items}
            tags={item.tags}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

// Usage examples:
/*
// Education Card
<AboutCard
  type="education"
  title="Bachelor of Science in Information Technology"
  subtitle="Saint Louis College"
  location="La Union, Philippines"
  date="2021 - 2025"
  description="Specialized in web development with focus on full-stack applications, database management, and software engineering principles."
  items={[
    "Graduated with honors",
    "Capstone project: Online Vehicle Management System",
    "Active member of IT student organization"
  ]}
  tags={["Web Development", "Database Management", "Software Engineering"]}
/>

// Experience Card
<AboutCard
  type="experience"
  title="Intern"
  subtitle="COMELEC - Agoo"
  location="Agoo, La Union"
  date="Feb 2025 - May 2025"
  items={[
    "Created spreadsheets for data management using Microsoft Excel",
    "Performed hardware troubleshooting and repairs",
    "Managed data entry and document processing",
    "Assisted visitors and provided technical support"
  ]}
  tags={["Data Management", "Technical Support", "Hardware Troubleshooting"]}
/>

// Certification Card
<AboutCard
  type="certification"
  title="La Union Cybersecurity Conference X"
  subtitle="Certificate of Participation"
  date="2024"
  description="Participated in cybersecurity conference covering latest threats and defense strategies."
/>

// Grouped Section
const educationItems = [
  {
    title: "BS in Information Technology",
    subtitle: "Saint Louis College",
    date: "2021 - 2025",
    items: ["Capstone project leader", "Web development focus", "Database management"]
  }
];

<AboutSection
  title="Education"
  subtitle="Academic background and achievements"
  items={educationItems}
  type="education"
/>
*/

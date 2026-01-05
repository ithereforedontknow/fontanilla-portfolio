import {
  Check,
  Star,
  Database,
  Code,
  Globe,
  Server,
  Palette,
  Shield,
} from "lucide-react";

export const SkillTag = ({
  skill,
  type = "skill",
  level = "intermediate",
  showIcon = true,
  clickable = false,
  onClick,
}) => {
  // Get icon based on skill type
  const getIcon = () => {
    if (type === "technology") {
      if (
        skill.includes("HTML") ||
        skill.includes("CSS") ||
        skill.includes("React")
      )
        return <Code className="w-4 h-4" />;
      if (
        skill.includes("PHP") ||
        skill.includes("MySQL") ||
        skill.includes("Database")
      )
        return <Database className="w-4 h-4" />;
      if (skill.includes("JavaScript")) return <Code className="w-4 h-4" />;
      return <Server className="w-4 h-4" />;
    }

    if (type === "language") {
      return <Globe className="w-4 h-4" />;
    }

    if (type === "certification") {
      return <Shield className="w-4 h-4" />;
    }

    return <Check className="w-4 h-4" />;
  };

  // Get color based on type and level
  const getColorClasses = () => {
    const baseClasses =
      "flex items-center gap-2 px-4 py-3 rounded-2xl border-2 font-semibold text-sm transition-all duration-300 ";

    if (clickable) {
      return baseClasses + "cursor-pointer hover:scale-105 ";
    }

    switch (type) {
      case "technology":
        switch (level) {
          case "expert":
            return baseClasses + "bg-blue-100 text-blue-800 border-blue-300 ";
          case "intermediate":
            return (
              baseClasses + "bg-indigo-100 text-indigo-800 border-indigo-300 "
            );
          case "beginner":
            return baseClasses + "bg-blue-50 text-blue-700 border-blue-200 ";
          default:
            return baseClasses + "bg-blue-100 text-blue-800 border-blue-300 ";
        }

      case "skill":
        return baseClasses + "bg-gray-100 text-gray-800 border-gray-300 ";

      case "language":
        return baseClasses + "bg-green-100 text-green-800 border-green-300 ";

      case "certification":
        return baseClasses + "bg-purple-100 text-purple-800 border-purple-300 ";

      default:
        return baseClasses + "bg-gray-100 text-gray-800 border-gray-300 ";
    }
  };

  // Get level indicator (stars)
  const getLevelIndicator = () => {
    if (!level || type !== "technology") return null;

    const stars =
      {
        expert: 3,
        intermediate: 2,
        beginner: 1,
      }[level] || 0;

    return (
      <div className="flex gap-0.5 ml-1">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-current" />
        ))}
      </div>
    );
  };

  return (
    <div
      className={getColorClasses()}
      onClick={onClick}
      role={clickable ? "button" : "presentation"}
      tabIndex={clickable ? 0 : -1}
    >
      {showIcon && getIcon()}
      <span className="font-medium">{skill}</span>
      {getLevelIndicator()}
    </div>
  );
};
export const SkillGroup = ({
  title,
  skills,
  type = "skill",
  columns = 2,
  showIcons = true,
}) => {
  const gridClasses =
    {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    }[columns] || "grid-cols-1 sm:grid-cols-2";

  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
      <h3 className="text-lg font-black text-black mb-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {title.charAt(0)}
          </span>
        </div>
        {title}
      </h3>

      <div className={`grid ${gridClasses} gap-3`}>
        {skills.map((skill, index) => (
          <SkillTag
            key={index}
            skill={typeof skill === "string" ? skill : skill.name}
            type={type}
            level={skill.level || "intermediate"}
            showIcon={showIcons}
          />
        ))}
      </div>
    </div>
  );
};
// Usage examples:
// Basic skill tag
// <SkillTag skill="Web Development" />;

// <SkillTag
//   skill="React"
//   type="technology"
//   level="intermediate"
// />

// // Language
// <SkillTag
//   skill="English"
//   type="language"
// />

// // Certification
// <SkillTag
//   skill="La Union Cybersecurity Conference"
//   type="certification"
// />

// <SkillTag
//   skill="Database Management"
//   clickable={true}
//   onClick={() => console.log('Clicked!')}
// />

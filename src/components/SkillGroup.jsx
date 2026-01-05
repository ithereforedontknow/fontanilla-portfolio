import { SkillTag } from "./SkillTag";

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

// Usage example:
/*
const technologies = [
  { name: "HTML", level: "expert" },
  { name: "CSS", level: "expert" },
  { name: "JavaScript", level: "intermediate" },
  { name: "PHP", level: "intermediate" },
  { name: "MySQL", level: "intermediate" },
  { name: "React", level: "intermediate" }
];

<SkillGroup
  title="Technologies"
  skills={technologies}
  type="technology"
  columns={3}
/>
*/

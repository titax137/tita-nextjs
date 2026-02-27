"use client";

const skills = [
  "Python", "SQL", "Tableau", "Google Data Studio",
  "Machine Learning", "TensorFlow", "RFM Analysis",
  "Data Visualization", "Deep Learning", "Statistical Analysis",
  "Customer Segmentation", "Pandas · NumPy",
];

export default function SkillTicker() {
  const doubled = [...skills, ...skills];
  return (
    <div className="skill-ticker">
      <div className="skill-track">
        {doubled.map((s, i) => (
          <span className="skill-item" key={i}>
            <span className="dot">◆</span>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

interface Props {
  num: string;
  tag: string;
  tagType: "ml" | "viz" | "seg";
  title: string;
  desc: string;
  href: string;
}

export default function ProjectCard({ num, tag, tagType, title, desc, href }: Props) {
  return (
    <a className="pcard" href={href} target="_blank" rel="noreferrer" data-num={num}>
      <span className={`ptag ${tagType}`}>{tag}</span>
      <div className="ptitle">{title}</div>
      <p className="pdesc">{desc}</p>
      <span className="plink">Read on Medium →</span>
    </a>
  );
}

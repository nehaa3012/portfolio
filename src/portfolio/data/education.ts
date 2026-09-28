export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  level?: string;
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Raj Kumar Goel Institute of Technology (RKGIT)",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2022 – 2026",
    grade: "CGPA: 7.5 / 10",
    level: "Undergraduate",
  },
  {
    institution: "Presidium School",
    degree: "Senior Secondary Education (CBSE)",
    period: "2022",
    grade: "77%",
    level: "Class XII",
  },
  {
    institution: "Mount Carmel School",
    degree: "Secondary Education (ICSE)",
    period: "2020",
    grade: "80%",
    level: "Class X",
  },
];

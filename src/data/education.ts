export interface Education {
  year: string;
  institution: string;
  degree: string;
  firstyear?: string;
  secondyear?: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "University of Cambridge",
    degree: "BA Natural Sciences",
    firstyear: "Class I in Part IA Chemistry, Materials Science, Biology of Cells, Mathematics",
    secondyear: "Class I in Part IB Physical & Theoretical Chemistry, Organic & Inorganic Chemistry, Mathematics",
    advisor: "",
  },
  {
    year: "2022—2024",
    institution: "AKS Lytham Sixth Form",
    degree: "A*A*A*A* in A-Level Biology, Chemistry, Mathematics, and Further Maths",
    thesis: "",
    // Optional links to thesis
    // thesisUrl: ""
  },
    {
    year: "2017—2022",
    institution: "AKS Lytham Senior School",
    degree: "Six 9s and three 8s at GCSE, alongside 9 in Level 2 Further Maths",
    thesis: "",
    // Optional links to thesis
    // thesisUrl: ""
  },
];

export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "",
    title: "Why I love reading in French: A case for reading in a foreign language",
    authors: "",
    paperUrl: "https://amelielawson.substack.com/p/why-i-love-reading-in-french-a-case?r=75xq8w&utm_campaign=post&utm_medium=web",
    codeUrl: "",
    //bibtex: "",
    tldr: "",
    imageUrl:
      "https://images.unsplash.com/photo-1787617512601-907bd2976cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMDAzMzh8MHwxfHNlYXJjaHwxMTV8fGhvbWUlMjBsaWJyYXJ5fGVufDB8fHx8MTc4OTE0MzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    award: "",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];

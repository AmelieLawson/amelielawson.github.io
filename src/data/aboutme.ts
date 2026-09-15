export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  substackUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Amelie Lawson",
  title: "Natural Sciences Undergraduate",
  institution: "University of Cambridge",
  // Note that links work in the description
  description:
    "I'm a final-year BA Natural Sciences student specialising in computational and theoretical chemistry. Beyond my degree I am interested in AI safety research and the use of machine learning for scientific discovery. In my free time, I most enjoy wakesurfing, padel, and skiing.",
  email: "amelierlawson@gmail.com",
  imageUrl:
    "",
  googleScholarUrl: "",
  githubUsername: "amelielawson",
  linkedinUsername: "amelielawson",
  substackUsername: "amelielawson",
  twitterUsername: "",
  blogUrl: "https://substack.com/@amelielawson",
  cvUrl: "",
  institutionUrl: "https://www.cam.ac.uk",
  // altName: "",
  // secretDescription: "I like dogs.",
};

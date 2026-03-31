// /lib/seo-config.ts
export const seoConfig = {
  title:
    "Tabe Rickson | Full Stack Developer, AI Developer, and Tech Enthusiast, UI/UX Designer, and Open Source Contributor, Mobile Developer",
  description:
    "Tabe Rickson is a Full-Stack Developer, AI Developer, and Tech Enthusiast with experience in building scalable web & mobile applications, creating stunning UI/UX, and contributing to open source projects. Skilled in Firebase, Supabase, and modern frameworks.",
  keywords: [
    "Tabe Rickson",
    "Full-Stack Developer",
    "AI Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Mobile Developer",
    "Best Developer in Cameroon and Africa",
    "UI/UX Designer",
    "Developer Portfolio in Cameroon, Buea",
    "Open Source Contributor",
    "Portfolio",
  ],
  author: { name: "Tabe Rickson", url: "https://tabe-rickson.vercel.app" },
  siteUrl: "https://tabe-rickson.vercel.app",
  social: {
    x: "@rickytabe",
    linkedin: "https://linkedin.com/in/rickytabe",
    github: "https://github.com/rickytabe",
  },
  image: "/main-photo.png",
};

// Structured data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tabe Rickson",
  url: "https://tabe-rickson.vercel.app",
  image: "/main-photo.png",
  sameAs: [
    "https://linkedin.com/in/rickytabe",
    "https://github.com/rickytabe",
    "https://x.com/rickytabe",
  ],
  jobTitle:
    "Full Stack Developer, AI Developer, and Tech Enthusiast, UI/UX Designer, and Open Source Contributor, Mobile Developer",
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tabe Rickson Portfolio",
  url: "https://tabe-rickson.vercel.app",
  description:
    "Portfolio website of Tabe Rickson – Full-Stack Developer, AI Developer, UI/UX Designer, Mobile Developer, and Open Source Contributor.",
};

export const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Tabe Rickson Portfolio",
  author: { "@type": "Person", name: "Tabe Rickson" },
  url: "https://tabe-rickson.vercel.app",
  image: "/main-photo.png",
};

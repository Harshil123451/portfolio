export const siteConfig = {
  name: "Krishi Chheda",
  title: "Krishi Chheda — Portfolio",
  githubUsername: "Harshil123451",
  email: "krishichheda38@gmail.com",
  location: "Melbourne, Australia",
  socials: {
    github: "https://github.com/Harshil123451",
    linkedin: "https://www.linkedin.com/in/your-handle/",
    x: "https://x.com/your-handle",
    resumeUrl: "/resume.pdf",
  },
  sections: {
    professional: {
      tagline: "I build practical AI, embedded systems, and student-first tools.",
      bio: "I'm a passionate developer focused on creating practical AI applications, working with embedded systems and FPGAs, and building tools that help students succeed. My work spans from medical tracking applications to student hubs and computer vision projects.",
      routes: ["/", "/projects", "/about", "/contact"],
    },
    photography: {
      tagline: "Capturing chill vibes and candid moments through my lens.",
      bio: "I love chasing light, exploring hidden corners of the city, and capturing those fleeting moments that tell a story. Photography is my way of slowing down and seeing the world differently.",
      routes: ["/photography", "/photography/about", "/photography/contact"],
    },
  },
  pinnedRepos: ["meditrack", "student-hub", "bp-face-app", "fpga-cnn"],
  topicsFilter: ["portfolio", "web", "ai", "fpga", "flutter"],
  skills: [
    { name: "AI/ML", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "JavaScript/TypeScript", level: "Advanced" },
    { name: "React/Next.js", level: "Advanced" },
    { name: "FPGA", level: "Intermediate" },
    { name: "Flutter", level: "Intermediate" },
    { name: "Embedded Systems", level: "Intermediate" },
    { name: "Computer Vision", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Git", level: "Advanced" },
  ],
  timeline: [
    {
      year: "2024",
      title: "MediTrack Development",
      description: "Built a comprehensive medical tracking application with AI-powered insights",
    },
    {
      year: "2023",
      title: "Student Hub Platform",
      description: "Created a centralized platform for student resources and collaboration",
    },
    {
      year: "2023",
      title: "FPGA CNN Implementation",
      description: "Implemented convolutional neural networks on FPGA for real-time image processing",
    },
    {
      year: "2022",
      title: "BP Face App",
      description: "Developed a blood pressure monitoring app with facial recognition features",
    },
  ],
  photos: [
    { 
      src: "/photos/_DSC0726.jpg", 
      alt: "Photography by Krishi", 
      caption: "Captured moments",
      quote: "Every frame tells a story"
    },
    { 
      src: "/photos/1680059131630.jpg", 
      alt: "Photography by Krishi", 
      caption: "Through my lens",
      quote: "Finding beauty in the ordinary"
    },
    { 
      src: "/photos/3.bmp", 
      alt: "Photography by Krishi", 
      caption: "Creative vision",
      quote: "Art is everywhere"
    },
    { 
      src: "/photos/DSC_0261.JPG", 
      alt: "Photography by Krishi", 
      caption: "Framed memories",
      quote: "Moments frozen in time"
    },
    { 
      src: "/photos/IMG_9201.jpg", 
      alt: "Photography by Krishi", 
      caption: "Personal collection",
      quote: "Life through a different angle"
    },
  ],
} as const;

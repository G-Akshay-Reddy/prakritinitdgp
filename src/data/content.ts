export const site = {
  name: "PRAKRITI",
  fullName: "PRAKRITI - The Techno Environmental Club of NIT Durgapur",
  subtitle: "The Techno Environmental Club of NIT Durgapur",
  tagline: "Engineering a Sustainable Future",
  campus: "National Institute of Technology Durgapur",
  location: "Durgapur, West Bengal",
  founded: "2008",
  description:
    "PRAKRITI is the techno-environmental club of NIT Durgapur, bringing environmental awareness, sustainable campus action, and green engineering projects into student life.",
  logo: "/media/logo.jpg",
  socialLinks: [
    {
      label: "Official Website",
      href: "https://www.prakritinitdgp.co.in/"
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/prakriti.nitdgp/"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/prakriti.nitdgp/"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/prakriti-nit-durgapu/"
    }
  ]
} as const;

export const impactStats = [
  { label: "Events", value: 10, suffix: "+" },
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Team Members", value: 60, suffix: "+" }
] as const;

export const aboutBlocks = [
  {
    title: "Mission",
    body:
      "PRAKRITI builds awareness and action among future engineers, encouraging them to design, communicate, and live with ecological responsibility."
  },
  {
    title: "Vision",
    body:
      "The club imagines a campus where technology and nature reinforce each other: cleaner systems, mindful habits, and engineers who treat sustainability as core infrastructure."
  },
  {
    title: "History",
    body:
      "Founded as the techno-environmental club of NIT Durgapur, PRAKRITI has grown through campus drives, public-facing events, student projects, and SHRISHTI, its environmental journal."
  }
] as const;

export const timeline = [
  {
    year: "2008",
    title: "Club Foundation",
    body: "PRAKRITI begins its work at NIT Durgapur as a student-led environmental and technology collective."
  },
  {
    year: "2020",
    title: "SHRISHTI Launch",
    body: "The official environmental journal of PRAKRITI launches in October 2020."
  },
  {
    year: "Present",
    title: "Nature Meets Future",
    body: "The club continues to combine awareness events, campus engagement, and hands-on green projects."
  }
] as const;

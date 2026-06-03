export interface SponsorRecord {
  slug: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
}

export const sponsors: SponsorRecord[] = [
  {
    slug: "fortune",
    name: "Fortune Park Pushpanjali",
    logo: "/media/Sponsors/fortune.png",
    description: "Fortune Park Pushpanjali is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  },
  {
    slug: "geeksforgeeks",
    name: "GeeksforGeeks",
    logo: "/media/Sponsors/geeksforgeeks.png",
    description: "GeeksforGeeks is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  },
  {
    slug: "lemon-grass",
    name: "Lemon Grass",
    logo: "/media/Sponsors/lemon grass-min.jpg",
    description: "Lemon Grass is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  },
  {
    slug: "arihant",
    name: "Orihant's Naturals",
    logo: "/media/Sponsors/arihant.jfif",
    description: "Orihant's Naturals is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  },
  {
    slug: "images",
    name: "PETA",
    logo: "/media/Sponsors/images.jfif",
    description: "PETA is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  },
  {
    slug: "pizza",
    name: "Pizza Hut",
    logo: "/media/Sponsors/pizza.png",
    description: "Pizza Hut is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  },
  {
    slug: "punjabi-masala",
    name: "Punjabi Masala",
    logo: "/media/Sponsors/punjabi masala.png",
    description: "Punjabi Masala is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  },
  {
    slug: "sub",
    name: "Subway",
    logo: "/media/Sponsors/sub.png",
    description: "Subway is part of the sponsor archive supplied for PRAKRITI.",
    category: "Sponsor"
  }
];

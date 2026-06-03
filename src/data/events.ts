export interface EventRecord {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: readonly string[];
  impact: readonly string[];
}

export const events: EventRecord[] = [
  {
    slug: "plantation-drive",
    title: "Plantation Drive",
    kicker: "Campus Greening",
    summary: "A monsoon-season campus plantation initiative that turns environmental care into direct student action.",
    description:
      "Plantation Drive brings students together to plant saplings across campus and strengthen everyday stewardship of the green spaces around NIT Durgapur.",
    coverImage: "/media/Events/Plantation4.jpg",
    gallery: ["/media/Events/Plantation4.jpg", "/media/Events/pp1-min.jpg"],
    impact: [
      "Supports campus greenery through hands-on participation.",
      "Introduces students to practical ecological responsibility.",
      "Connects seasonal campus activity with long-term care for planted spaces."
    ]
  },
  {
    slug: "runit",
    title: "RUNIT",
    kicker: "Run Today, Save Tomorrow",
    summary: "PRAKRITI's fitness-led environmental awareness run for the NIT Durgapur community.",
    description:
      "RUNIT uses the energy of a campus run to make sustainability visible, participatory, and memorable for students beyond classroom conversations.",
    coverImage: "/media/Events/Runit3.jpg",
    gallery: ["/media/Events/Runit3.jpg"],
    impact: [
      "Turns awareness into a high-participation campus experience.",
      "Links personal wellbeing with environmental responsibility.",
      "Creates an annual rallying point for sustainability conversations."
    ]
  },
  {
    slug: "village-trip",
    title: "Village Trip",
    kicker: "Community Outreach",
    summary: "An outreach visit focused on learning from and engaging with communities beyond the institute campus.",
    description:
      "Village Trip expands PRAKRITI's work beyond the campus, encouraging students to observe local realities and approach environmental questions with empathy.",
    coverImage: "/media/Events/villagetrip1-min.jpg",
    gallery: ["/media/Events/villagetrip1-min.jpg"],
    impact: [
      "Encourages community-facing environmental learning.",
      "Builds empathy around sustainability beyond campus infrastructure.",
      "Creates space for students to connect field observation with action."
    ]
  },
  {
    slug: "earth-hour",
    title: "Earth Hour",
    kicker: "Lights-Off Awareness",
    summary: "A symbolic climate-awareness event centered on collective commitment to the planet.",
    description:
      "Earth Hour gathers students around a visible act of care, using a lights-off moment and collective participation to highlight responsible energy use.",
    coverImage: "/media/Events/earthhour1-min.jpg",
    gallery: ["/media/Events/earthhour1-min.jpg"],
    impact: [
      "Makes energy awareness visible at campus scale.",
      "Invites students to participate in a global sustainability gesture.",
      "Keeps climate action present in everyday campus culture."
    ]
  },
  {
    slug: "nature-photography",
    title: "Nature Photography",
    kicker: "Environmental Storytelling",
    summary: "A visual storytelling event that asks students to notice and document nature through photography.",
    description:
      "Nature Photography turns the camera into an awareness tool, inviting students to observe biodiversity, landscapes, and fragile ecological details around them.",
    coverImage: "/media/Events/pp1-min.jpg",
    gallery: ["/media/Events/pp1-min.jpg"],
    impact: [
      "Encourages slow observation of natural spaces.",
      "Creates a visual archive for environmental communication.",
      "Helps students communicate care through imagery."
    ]
  },
  {
    slug: "green-diwali",
    title: "Green Diwali",
    kicker: "Responsible Celebration",
    summary: "A cultural event that reframes celebration through creativity, color, and ecological care.",
    description:
      "Green Diwali uses student creativity to celebrate while keeping environmental responsibility central to the festival experience.",
    coverImage: "/media/Events/greend1.jpg",
    gallery: ["/media/Events/greend1.jpg"],
    impact: [
      "Promotes mindful celebration on campus.",
      "Connects cultural expression with sustainability.",
      "Opens an accessible entry point for environmental awareness."
    ]
  },
  {
    slug: "treasure-hunt",
    title: "Treasure Hunt",
    kicker: "Interactive Learning",
    summary: "A game-led campus event that makes participation, curiosity, and teamwork part of environmental engagement.",
    description:
      "Treasure Hunt brings environmental themes into an interactive format, using clues and collaborative play to keep awareness active and memorable.",
    coverImage: "/media/Events/thunt-min.jpg",
    gallery: ["/media/Events/thunt-min.jpg"],
    impact: [
      "Makes awareness participatory and team-based.",
      "Uses campus exploration as a learning format.",
      "Creates a low-barrier way for more students to engage."
    ]
  },
  {
    slug: "envoice",
    title: "Envoice",
    kicker: "Speak for the Environment",
    summary: "A communication-focused event that gives students space to express environmental concerns and ideas.",
    description:
      "Envoice centers student expression, turning environmental issues into conversations, arguments, narratives, and public-facing communication.",
    coverImage: "/media/Events/envoice1-min.jpg",
    gallery: ["/media/Events/envoice1-min.jpg"],
    impact: [
      "Builds environmental communication skills.",
      "Encourages students to articulate solutions and concerns.",
      "Keeps sustainability visible through public expression."
    ]
  },
  {
    slug: "campus-campaign",
    title: "Campus Campaign",
    kicker: "Everyday Sustainability",
    summary: "A campus-facing awareness initiative rooted in the spaces students use every day.",
    description:
      "Campus Campaign focuses on habits, shared spaces, and small interventions that make ecological responsibility part of everyday institute life.",
    coverImage: "/media/Events/campus1-min.jpg",
    gallery: ["/media/Events/campus1-min.jpg"],
    impact: [
      "Connects sustainability to daily campus routines.",
      "Makes environmental action visible in familiar spaces.",
      "Supports ongoing student engagement beyond flagship events."
    ]
  }
];

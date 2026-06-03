export interface ProjectRecord {
  slug: string;
  title: string;
  type: string;
  summary: string;
  overview: string;
  objective: string;
  methodology: string;
  impact: string;
  image: string;
  gallery: readonly string[];
}

export const projects: ProjectRecord[] = [
  {
    slug: "mini-composting",
    title: "Mini Composting",
    type: "Waste Management",
    summary: "A compact composting project focused on organic waste conversion and campus-scale learning.",
    overview:
      "Mini Composting explores how biodegradable waste can be treated as a resource through a small, understandable system.",
    objective:
      "Demonstrate a practical, student-operable method for reducing organic waste and producing compost for green spaces.",
    methodology:
      "The project uses segregated biodegradable material, controlled aeration, and periodic monitoring to support decomposition.",
    impact:
      "It helps make waste segregation and circular resource use visible to students through a tangible campus project.",
    image: "/media/Projects/mini compostingll-min.jpg",
    gallery: ["/media/Projects/mini compostingll-min.jpg"]
  },
  {
    slug: "aquaponics",
    title: "Aquaponics",
    type: "Sustainable Food Systems",
    summary: "A symbiotic system combining aquaculture and hydroponics for low-waste food production.",
    overview:
      "Aquaponics demonstrates a closed-loop growing approach where aquatic life and plants support one another through circulating water.",
    objective:
      "Introduce students to integrated food systems that reduce waste and show how biological cycles can inform engineering design.",
    methodology:
      "Water circulation, biological filtration, and nutrient transfer are used to connect the fish tank and grow beds.",
    impact:
      "The project gives students a live model for resource-efficient urban farming and systems thinking.",
    image: "/media/Projects/acqua-min.jpg",
    gallery: ["/media/Projects/acqua-min.jpg"]
  },
  {
    slug: "clay-incinerator",
    title: "Clay Incinerator",
    type: "Sanitation",
    summary: "A disposal-focused project addressing sanitary waste through a compact clay incineration setup.",
    overview:
      "Clay Incinerator responds to the need for safer sanitary waste disposal with an accessible, low-cost material approach.",
    objective:
      "Reduce unsafe disposal practices by demonstrating a controlled system for sanitary waste treatment.",
    methodology:
      "The project uses a clay-based chamber concept to contain disposal, heat, and residue in a compact form.",
    impact:
      "It frames sanitation as both a health and environmental responsibility, especially in shared campus contexts.",
    image: "/media/Projects/Clay-Incinerators-min.jpg",
    gallery: ["/media/Projects/Clay-Incinerators-min.jpg"]
  },
  {
    slug: "mini-water-cooler",
    title: "Mini Water Cooler",
    type: "Resource Efficiency",
    summary: "A compact cooling prototype that makes efficient everyday utility systems easier to discuss and test.",
    overview:
      "Mini Water Cooler documents a student-scale build for thinking about cooling, utility design, and efficient resource use.",
    objective:
      "Prototype an approachable cooling system that can be examined, improved, and discussed by students.",
    methodology:
      "The project is developed as a small physical build, keeping the system visible enough for demonstration and iteration.",
    impact:
      "It brings sustainability into everyday infrastructure by connecting comfort, efficiency, and engineering craft.",
    image: "/media/Projects/MiniWaterCooler-min.jpg",
    gallery: ["/media/Projects/MiniWaterCooler-min.jpg"]
  },
  {
    slug: "thermoelectric-phone-charger",
    title: "Thermoelectric Phone Charger",
    type: "Energy Prototype",
    summary: "A heat-to-electricity prototype shown charging a phone through a compact experimental setup.",
    overview:
      "This prototype explores how heat can be converted into useful electrical output through a small demonstrator.",
    objective:
      "Showcase alternative energy conversion as an approachable student project and spark discussion around clean power ideas.",
    methodology:
      "The setup uses a heat source, heat sink assembly, and charging circuit to demonstrate energy transfer in a visible way.",
    impact:
      "It makes renewable and alternative energy concepts concrete for students through an observable working model.",
    image: "/media/Projects/maxresdefault-min.jpg",
    gallery: ["/media/Projects/maxresdefault-min.jpg"]
  }
];

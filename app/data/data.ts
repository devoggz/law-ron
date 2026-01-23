export interface PartnerExperience {
  name: string;
  description: string;
}

export interface Partner {
  slug: string;
  image: string;
  name: string;
  title: string;
  practice: string;
  email: string;
  mobile: string;
  focus: string;
  cvUrl?: string;

  bio: string[];
  experience: PartnerExperience[];
  recognition: {
    title: string;
    logo: string;
  }[];
  qualifications: {
    institution: string;
    logo: string;
    detail: string;
  }[];
}

export const partners: Partner[] = [
  {
    slug: "anthony-njogu",
    image: "/images/anthony.jpeg",
    name: "Anthony Njogu",
    title: "Managing Partner",
    practice: "Dispute Resolution",
    email: "anthony.njogu@ronn.law",
    mobile: "+254 722 348 260",
    focus: "Corporate, Intellectual Property, Media and Telecoms’ disputes",
    cvUrl: "/cvs/anthony-njogu.pdf",
    bio: [
      "Anthony is a responsive, thorough and intuitive dispute resolution lawyer who has worked on several prominent and groundbreaking cases across Kenya’s legal landscape.",
      "In both arbitration and litigation, clients value his sharp legal mind, commercial awareness and ability to quickly grasp complex disputes. He is known for being efficient, accessible and meticulously prepared.",
      "Anthony works with multinational clients ranging from banks and media companies to pharmaceutical firms on constitutional, insolvency, intellectual property, tax and public procurement matters."
    ],
    experience: [
      {
        name: "A leading Kenyan supermarket chain",
        description:
          "Successfully challenged a retroactive tax claim by the Kenya Revenue Authority worth over KES 100 million (USD 1 million).",
      },
      {
        name: "A State Client",
        description:
          "Successful defence in a major international commercial arbitration where the claim exceeds USD 600 million.",
      },
      {
        name: "One of the Big Four professional services firms",
        description:
          "Procurement proceedings relating to the Standard Gauge Railway project, with an estimated USD 3.8 billion value for the Mombasa – Nairobi phase.",
      },
      {
        name: "A Danish company",
        description:
          "Procurement appeal over a KES 7.9 billion claim relating to construction of a greenfield aviation fuel depot at Jomo Kenyatta International Airport.",
      },
      {
        name: "MultiChoice Africa and GOtv",
        description:
          "Constitutional proceedings seeking to halt migration from analogue to digital broadcasting in Kenya.",
      },
      {
        name: "Uber",
        description:
          "Court proceedings filed by a group representing over 800 drivers in Kenya challenging contractual terms.",
      },
      {
        name: "MultiChoice Africa",
        description:
          "Competition matters before the Competition Authority of Kenya.",
      },
      {
        name: "Japan Export Vehicle Inspection Centre",
        description:
          "Judicial review and administrative law remedies related to procurement proceedings by Kenya Bureau of Standards.",
      },
      {
        name: "East African Breweries",
        description:
          "Dispute over the Smirnoff Black Ice with Guarana product.",
      },
      {
        name: "A leading global pharmaceutical manufacturer",
        description:
          "Landmark constitutional proceedings dealing with property rights in pharmaceutical products.",
      },
    ],
    recognition: [
      {
        title: "Chambers and Partners 2020: Band 3 | Dispute Resolution",
        logo: "/images/chambers.png",
      },
      {
        title: "Chambers and Partners 2019: Band 3 | Dispute Resolution",
        logo: "/images/chambers.png",
      },
      {
        title: "Chambers and Partners 2018: Band 4 | Dispute Resolution",
        logo: "/images/chambers.png",
      },
      {
        title: "Legal 500 2017 Recommended | Dispute Resolution",
        logo: "/images/legal500.webp",
      },
    ],
    qualifications: [
      {
        institution: "University of Nairobi",
        logo: "/images/uon.jpeg",
        detail: "LLB",
      },
      {
        institution: "Kenya School of Law",
        logo: "/images/ksl.jpg",
        detail: "Postgraduate Diploma",
      },
      {
        institution: "Chartered Institute of Arbitrators",
        logo: "/images/chatterd.jpg",
        detail: "Member",
      },
      {
        institution: "High Court of Kenya",
        logo: "/images/judiciary.jpeg",
        detail: "Advocate",
      },
    ],
  },

  {
    slug: "njau-makuha",
    image: "/images/njau.jpeg",
    name: "Njau Makuha",
    title: "Partner",
    practice: "Projects",
    email: "njau.mukuha@ronn.law",
    mobile: "+254 721 683 882",
    focus: "Energy, Infrastructure and Natural Resources",
    cvUrl: "/cvs/njau-makuha.pdf",
    bio: [
      "Njau is a top-rated projects lawyer advising on energy, infrastructure, natural resources, project finance and public-private partnerships across Kenya and the region.",
      "He has significant experience in energy M&A and large-scale investment projects, working closely with developers, lenders and governments on complex, capital-intensive transactions.",
      "Njau’s work spans railways, highways, ports and power projects, with particular strength in negotiating O&M contracts, concession agreements and power purchase agreements."
    ],
    experience: [
      {
        name: "A leading Chinese Infrastructure Developer",
        description:
          "Advised on PPP structuring and negotiations for major road concessions under Kenya’s Roads 10,000 Annuities programme.",
      },
      {
        name: "China Road and Bridge Corporation",
        description:
          "Advised on project agreement with Kenya Railways Corporation for Standard Gauge Railway operations.",
      },
    ],
    recognition: [
      {
        title: "Chambers and Partners 2020: Band 3 | Projects and Energy",
        logo: "/images/chambers.png",
      },
      {
        title: "IFLR1000 2019: Highly Regarded Lawyer | Project Finance",
        logo: "/images/iflr100.png",
      },
    ],
    qualifications: [
      {
        institution: "University of Warwick",
        logo: "/images/warwick.jpeg",
        detail: "Masters | International Economic Law",
      },
      {
        institution: "High Court of Kenya",
        logo: "/images/judiciary.jpeg",
        detail: "Advocate",
      },
    ],
  },

  {
    slug: "sean-omondi",
    image: "/images/sean.jpeg",
    name: "Sean Omondi",
    title: "Partner",
    practice: "Dispute Resolution",
    email: "sean.omondi@ronn.law",
    mobile: "+254 722 443 058",
    focus: "Employee Disputes and Union matters",
    cvUrl: "/cvs/sean-omondi.pdf",
    bio: [
      "Sean is an innovative, strategic and razor-sharp litigator with deep experience in corporate and employment disputes.",
      "He is particularly recognised for complex, high-value employment litigation involving senior executives, unions and large organisations.",
      "Sean advises corporates and NGOs on collective bargaining, employment policies, performance management, separations and unionisation matters."
    ],
    experience: [],
    recognition: [
      {
        title: "Legal 500 2020: Leading Individual | Employment",
        logo: "/images/legal500.webp",
      },
    ],
    qualifications: [
      {
        institution: "University of Nairobi",
        logo: "/images/uon.jpeg",
        detail: "LLB",
      },
      {
        institution: "High Court of Kenya",
        logo: "/images/judiciary.jpeg",
        detail: "Advocate",
      },
    ],
  },

  {
    slug: "muthoni-runji-pertet",
    image: "/images/muthoni.jpeg",
    name: "Muthoni Runji-Pertet",
    title: "Partner",
    practice: "Real Estate and Finance",
    email: "muthoni.runji@ronn.law",
    mobile: "+254 722 639 739",
    focus: "Real Estate, Banking, Finance",
    cvUrl: "/cvs/muthoni-runji.pdf",
    bio: [
      "Muthoni is a real estate and finance lawyer known for balancing precision with practical, commercially minded advice.",
      "She advises on complex real estate developments, project structuring, commercial sales and leasing transactions.",
      "Her finance practice focuses on debt, securities and banking transactions for Kenyan, Pan-African and multinational clients."
    ],
    experience: [],
    recognition: [],
    qualifications: [
      {
        institution: "University of Nairobi",
        logo: "/images/uon.jpeg",
        detail: "LLB",
      },
      {
        institution: "High Court of Kenya",
        logo: "/images/judiciary.jpeg",
        detail: "Advocate",
      },
    ],
  },

  {
    slug: "mwangi-mbogo",
    image: "/images/mwangi.jpeg",
    name: "Mwangi Mbogo",
    title: "Partner",
    practice: "Dispute Resolution & Real Estate Banking",
    email: "mwangi.mbogo@ronn.law",
    mobile: "+254 722 443 058",
    focus:
      "Corporate M&A, Commercial law, Corporate Governance, Risk management and Compliance",
    cvUrl: "/cvs/mwangi-mbogo.pdf",
    bio: [
      "Mwangi is an experienced corporate and commercial lawyer with over 20 years advising on finance, banking and securities regulation.",
      "His work spans capital markets, mergers and acquisitions, joint ventures and large-scale real estate and infrastructure projects.",
      "Mwangi advises clients on governance, risk management and compliance across financial services, manufacturing and real estate sectors."
    ],
    experience: [],
    recognition: [],
    qualifications: [
      {
        institution: "University of Nairobi",
        logo: "/images/uon.jpeg",
        detail: "LLB (Hons)",
      },
      {
        institution: "University of Reading",
        logo: "/images/reading.png",
        detail: "MSc | Capital Markets & Compliance",
      },
      {
        institution: "High Court of Kenya",
        logo: "/images/judiciary.jpeg",
        detail: "Advocate",
      },
    ],
  },
];
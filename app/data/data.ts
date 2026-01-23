// data/partners.ts

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

  bio: string;
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
    bio: `Anthony is a responsive, thorough and intuitive dispute resolution lawyer who has worked on several prominent and groundbreaking cases. In both arbitration and litigation, clients know him for his good legal mind and understanding of commercial disputes. He is also known for being efficient, available and prepared. He has great business acumen and is highly regarded for his ability to translate business information into a legal argument. He works with multinational clients ranging from banks and media companies to pharmaceutical companies on their constitutional, insolvency, IP, tax and public procurement matters.`,
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
          "Judicial review and administrative law remedies related to procurement proceedings by Kenya Bureau of Standards and before the Public Procurement Regulatory Authority.",
      },
      {
        name: "East African Breweries",
        description:
          "Dispute over the Smirnoff Black Ice with Guarana product.",
      },
      {
        name: "A leading global manufacturer of pharmaceutical products",
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
        title: "Chambers Global 2017 & 2016: Recognised | Dispute Resolution",
        logo: "/images/chambers.png",
      },
      {
        title: "Legal 500 2017 Recommended | Dispute Resolution",
        logo: "/images/legal500.webp",
      },
      {
        title: "Business Daily’s Top 40 under 40 2014",
        logo: "/images/sun.png",
      },
      {
        title: "IP Stars 2016: Recognised | Notable Practitioner",
        logo: "/images/sun.png",
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
      {
        institution: "Kenya Industrial Property Institute",
        logo: "/images/kipi.png",
        detail: "Patent Agent",
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

    bio: `Njau is a top-rated projects lawyer who advises on energy, infrastructure, natural resources, project finance and PPPs. He has significant experience advising companies in energy M&A transactions. He works with a wide range of clients including developers, energy companies and lenders in large scale Kenyan and cross-border projects. 
He has a deep understanding of large projects and investment projects in Kenya and has been recognised several times for his work. His projects experience includes railways, highways and ports. 

In energy, he has acted for clients with a particular emphasis on preparing and negotiating O&M contracts, concession agreements and PPAs. Aside from energy and projects, Njau also advises businesses on joint ventures, IP and employment law issues.`,

    experience: [
      {
        name: "A leading Chinese Infrastructure Developer",
        description:
          "on the proposed PPP structure for the Lot 10 concession to finance, build, operate and maintain the Nanyuki – Gwa Kungu (B22) Road and Laisamis – Ngurunit–Nursery (South Horr) (B74) Roads (254 km) by the Kenya National Highway Authority (KeNHA) as part of Kenya’s Roads 10,000 Annuities programme. Leading negotiations on the Project Agreement and also advising on the GOK Letter of Support, the finance agreements, construction and operational phase sub-contracts and various other material contracts.",
      },
      {
        name: "A leading Kenyan Construction Company",
        description:
          "on the proposed PPP structure for Lot 33 for a concession to finance, build, operate and maintain a 93 km road from Ngong–Kiserian to Isinya and Kajiado–Imaroro Road under the Kenya Rural Roads Authority “Kenya’s Roads 10,000 Annuities programme”. Led negotiations on the Project Agreement.",
      },
      {
        name: "China Road and Bridge Corporation",
        description:
          "on its project agreement with the Kenya Railways Corporation concerning its operations of the Standard Gauge Railway.",
      },
      {
        name: "Trademark East Africa, Kenya Ports Authority and the Kenya Railways Corporation",
        description:
          "on a PPP feasibility study to optimise the movement of freight from the port of Mombasa to the Inland Container Depot in Nairobi on the Standard Gauge Railway.",
      },
      {
        name: "IFC and the Kenyan Ministry of Health",
        description:
          "on a feasibility study for the construction of 4 regional cancer centres across Kenya on a PPP basis.",
      },
      {
        name: "The Port of Singapore Authority",
        description:
          "on a bid for the operation of the second terminal at Mombasa Port.",
      },
      {
        name: "Infrastructure Leasing and Financial Services Limited",
        description:
          "on an RFP issued by the Kenya Rural Roads Authority and the Kenya National Highways Authority for the Government of Kenya's Roads 10,000 Annuities program.",
      },
      {
        name: "Aeolus Kenya Ltd (BVI)",
        description:
          "on negotiations for a framework agreement with the Kenyan Government for a 6-phase project in the LAPSSET Corridor which will include a port, LNG plant, desalination plant, pipeline and airport.",
      },
    ],

    recognition: [
      {
        title: "Chambers and Partners 2020: Band 3 | Projects and Energy",
        logo: "/images/chambers.png",
      },
      {
        title: "Chambers and Partners 2019: Band 3 | Projects and Energy",
        logo: "/images/chambers.png",
      },
      {
        title:
          "IFLR1000’s 2019 Financial and Corporate Guide: Highly Regarded Lawyer | Energy and Infrastructure, Project Finance.",
        logo: "/images/iflr100.png",
      },
      {
        title: "Chambers and Partners 2018: Band 3 | Projects and Energy.",
        logo: "/images/chambers.png",
      },
      {
        title:
          "IFLR1000’s 2018 Financial and Corporate Guide: Highly Regarded Lawyer | Energy and Infrastructure, Project Finance.",
        logo: "/images/iflr100.png",
      },
      {
        title: "Chambers and Partners 2017: Band 3 | Projects and Energy",
        logo: "/images/chambers.png",
      },
      {
        title: "Legal 500 2017: Recommended Lawyer | Projects and Energy.",
        logo: "/images/legal500.webp",
      },
      {
        title: "Chambers Global, 2016 | Rising Star",
        logo: "/images/chambers.png",
      },
      {
        title: "IFLR1000 2016: Leading Lawyer",
        logo: "/images/iflr100.png",
      },
    ],

    qualifications: [
      {
        institution: "University of Warwick",
        logo: "/images/warwick.jpeg",
        detail: "English Solicitors Legal Practice",
      },
      {
        institution: "University of Warwick",
        logo: "/images/warwick.jpeg",
        detail: "Masters | International Economic Law (Merit).",
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
    bio: `An innovative, strategic, efficient and razor-sharp litigator, Sean helps clients with both corporate and employment disputes. He is recognised for complex, high-value employment litigation and advising large corporates, NGOs and senior executives on collective bargaining, employment policies and procedures, performance management, separations, staff contracting and unionization.`,
    experience: [
      {
        name: "Emirates National Oil Company Singapore Pte. Ltd",
        description:
          "Successful representation in international arbitration against Kenya Pipeline Company for recovery of lost stocks of petroleum products.",
      },
      {
        name: "Centric Energy (Kenya) Limited",
        description:
          "Various judicial review proceedings and appeals before the Court of Appeal concerning oil exploration rights in Turkana.",
      },
      {
        name: "BOC Kenya Limited",
        description:
          "Challenged decisions and directives issued by the Capital Markets Authority relating to a 2005 merger with Carbacid Investments Limited.",
      },
      {
        name: "An NGO",
        description:
          "Suit filed by former employee seeking relief for salary underpayment, unlawful termination, constructive dismissal and unpaid terminal dues.",
      },
      {
        name: "An insurance company",
        description:
          "Advice on employee redundancies, preparation of all documents issued during the process.",
      },
      {
        name: "Ol Pejeta Ranching Limited",
        description:
          "Appeal at the Court of Appeal against an employment award made in favour of a former senior manager, setting authority for pay discrimination in Kenya.",
      },
    ],
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
      {
        institution: "Commissioner for Oaths & Notary Public",
        logo: "/images/commisioner.jpeg",
        detail: "Certified Company Secretary",
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
    bio: `Muthoni is a real estate & finance lawyer who balances detail-orientation with creative advice. She works on complex real estate developments, project structuring, commercial sales and leasing, and advises Kenyan, Pan-African and multinational businesses on finance matters with a focus on debt and securities.`,
    experience: [
      {
        name: "A leading pan-African property company",
        description:
          "Purchase of property within Nairobi valued at over USD 32 million and advising on sale and leaseback transactions.",
      },
      {
        name: "A private owner",
        description:
          "Sale of land in Nairobi valued over KES 1 billion for construction of new offices for the International Committee of the Red Cross.",
      },
      {
        name: "Commercial Leasing",
        description:
          "Acting for various developers in negotiation, drafting and registration of commercial leases including Yaya Centre and The Pavilion.",
      },
      {
        name: "Telecommunications Companies",
        description:
          "Acquisition, negotiation, drafting and registration of commercial leases for base transceiver and broadcasting sites including Safaricom and GOtv Kenya Limited.",
      },
      {
        name: "Leading private developer",
        description:
          "Purchase of properties in Nairobi for commercial development, including sale agreement, transaction structuring, change of user and regulatory approvals.",
      },
      {
        name: "Copia Kenya",
        description:
          "Lease of warehouse premises at ALP Logistics Park in Tatu City, advising on structuring and negotiating terms.",
      },
      {
        name: "Freight Forwarders Solutions Limited",
        description:
          "Lease of warehouse premises at ALP Logistics Park, including structuring and negotiating terms.",
      },
      {
        name: "An American private equity fund",
        description:
          "Drafting a commercial lease in Eldama Park, conducting due diligence and negotiating terms.",
      },
      {
        name: "UBS Foundation",
        description:
          "Social impact loans to entities in Kenya including limited due diligence on local entities and review of loan agreements.",
      },
      {
        name: "I&M Bank Limited",
        description:
          "Lending of over USD 20 million to a local borrower including due diligence, advising on security structure and preparation of principal security documents.",
      },
      {
        name: "Various local banks",
        description:
          "Preparation and registration of securities including NCBA, Standard Chartered, and Stanbic Bank Limited.",
      },
    ],
    recognition: [],
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
        institution: "High Court of Kenya",
        logo: "/images/judiciary.jpeg",
        detail: "Advocate",
      },
      {
        institution: "Commissioner for Oaths & Notary Public",
        logo: "/images/commisioner.jpeg",
        detail: "Certified Public Secretary & Governance Auditor",
      },
    ],
  },
  {
    slug: "mwangi-mbogo",
    image: "/images/mwangi.jpeg",
    name: "Mwangi Mbogo",
    title: "Partner",
    practice: "Dispute Resolution & Real Estate Banking",
    cvUrl: "/cvs/mwangi-mbogo.pdf",
    email: "mwangi.mbogo@ronn.law",
    mobile: "+254 722 443 058",
    focus:
      "Corporate M&A, Commercial law, Corporate Governance, Risk management and Compliance",
    bio: `Mwangi is an experienced corporate and commercial lawyer with over 20 years advising on corporate finance, banking and securities regulation, capital markets, mergers and acquisitions, joint ventures, real estate projects, governance, risk management and compliance. His clients include companies in financial services, manufacturing, distribution, retail, construction, real estate investments, and projects.`,
    experience: [
      {
        name: "Leading East African investment company",
        description:
          "Co-ordinated completion process of a US$195M cross-border M&A transaction involving sale of a stake in two Coca-Cola bottling companies.",
      },
      {
        name: "Leading East African investment company",
        description:
          "Coordinated documentation and completion of USD 7M convertible loan agreement between a leading power company in Nairobi and an energy financier investing in commercial solar energy.",
      },
      {
        name: "Corporate client acquisition",
        description:
          "Advised on 100% acquisition of a manufacturing company for USD 6.9 million, including financing, share purchase agreement, and competition law advisory.",
      },
      {
        name: "Automotive joint venture",
        description:
          "Structured a EUR 2.9 million joint venture between Kenyan and Portuguese corporate entities, including shareholders agreement, allotments, and ongoing advisory.",
      },
      {
        name: "Private equity fund",
        description:
          "Advised on setup of a US$500M private equity fund, including stress-testing for international investor attractiveness.",
      },
    ],
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
        detail: "MSc in Capital Markets, Regulation and Compliance",
      },
      {
        institution: "High Court of Kenya",
        logo: "/images/judiciary.jpeg",
        detail: "Advocate",
      },
      {
        institution: "Institute of Certified Secretaries of Kenya",
        logo: "/images/secretaries_logo.jpeg",
        detail: "Member",
      },
    ],
  },
];

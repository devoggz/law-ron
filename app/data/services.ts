// data/services.ts

export interface ServiceExperience {
  name: string;
  description: string;
}

export interface KeyContact {
  name: string;
  email: string;
  mobile: string;
  image: string;
}

export interface Service {
  slug: string;
  name: string;
  image: string;
  overview: string;
  experience: ServiceExperience[];
  keyContact: KeyContact;
}

export const services: Service[] = [
  {
    slug: "dispute-resolution",
    name: "Dispute Resolution",
    image: "/images/handshake.jpg",
    overview: `Our dispute resolution lawyers are highly regarded in handling contentious matters in various industries, including banking, communication, insurance, technology, media and entertainment. We represent corporate clients, private individuals and state corporations in high-value complex disputes including commercial litigation and shareholder disputes. We are also experts in alternative dispute resolution, including mediation and arbitration. Our team has international experience providing insights into best practices and emerging trends.`,
    experience: [
      {
        name: "A Danish company",
        description:
          "Procurement appeal over a KES 7.9 billion claim relating to a greenfield aviation fuel depot at Jomo Kenyatta International Airport.",
      },
      {
        name: "A State Client",
        description:
          "Successful defence in a major international commercial arbitration where the claim exceeds USD 600 million.",
      },
      {
        name: "An International Construction firm",
        description:
          "Constitutional and judicial proceedings against the Kenya Revenue Authority.",
      },
      {
        name: "MultiChoice Africa and GOtv",
        description:
          "Constitutional proceedings seeking to halt the migration from analogue to digital broadcasting.",
      },
      {
        name: "Emirates National Oil Company",
        description:
          "International arbitration against Kenya Pipeline Company for recovery of lost petroleum stocks.",
      },
      {
        name: "Centric Energy (Kenya)",
        description:
          "Judicial review proceedings concerning oil exploration rights in Turkana.",
      },
      {
        name: "Directors of East Africa Portland Cement",
        description:
          "Judicial review claim against the Government following interference in board constitution.",
      },
      {
        name: "Ol Pejeta Ranching",
        description:
          "Appeal at the Court of Appeal against an employment award; became authority on pay discrimination.",
      },
      {
        name: "A leading Kenyan supermarket chain",
        description:
          "Successfully challenged retroactive tax claim worth over KES 100 million.",
      },
      {
        name: "Uber",
        description:
          "Court proceedings filed by 800+ drivers challenging contractual terms.",
      },
      {
        name: "One of the Big Four professional services firms",
        description:
          "Procurement proceedings for Standard Gauge Railway project valued at USD 3.8 billion.",
      },
      {
        name: "MultiChoice Africa",
        description:
          "Competition matters before the Competition Authority of Kenya.",
      },
      {
        name: "Japan Export Vehicle Inspection Centre",
        description:
          "Judicial review and administrative law remedies related to procurement proceedings.",
      },
      {
        name: "East African Breweries",
        description: "Dispute over Smirnoff Black Ice with Guarana product.",
      },
      {
        name: "A leading global manufacturer of pharmaceutical products",
        description: "Landmark constitutional proceedings on property rights.",
      },
      {
        name: "BOC Kenya Limited",
        description:
          "Challenge against CMA directives for 2005 merger with Carbacid Investments.",
      },
    ],
    keyContact: {
      name: "Anthony Njogu",
      email: "anthony.njogu@ronn.law",
      mobile: "+254 722 348 260",
      image: "/images/anthony.jpeg",
    },
  },
  {
    slug: "employment",
    name: "Employment",
    image: "/images/construction.jpg",
    overview: `We are one of Kenya’s go-to employment firms because of our team’s track record and strategic, collaborative approach. We advise and represent corporates, executive-level staff, and NGOs in employment or labour disputes, disciplinary action, collective bargaining agreements and trade union matters. We also review HR manuals, contracts, performance management, termination, dismissal, and redundancy processes.`,
    experience: [
      {
        name: "Safaricom Limited",
        description:
          "Reviewed HR policies, employment forms, and contracts ensuring compliance with Kenyan law.",
      },
      {
        name: "NIC Group",
        description:
          "Advised on employee transfer during NIC Bank and CBA merger.",
      },
      {
        name: "C Square Limited",
        description:
          "Drafted HR policy manual, advised on redundancy, termination, and labour law compliance.",
      },
      {
        name: "Mastercard International Inc.",
        description:
          "Provided advice on Kenyan employment and labour laws for reorganization.",
      },
      {
        name: "Andela Kenya",
        description:
          "Advised on several redundancy processes including contract coordination and termination.",
      },
      {
        name: "Sanlam",
        description:
          "Reviewed HR policies and contracts; advised on voluntary early retirement and redundancy processes.",
      },
      {
        name: "UAP Old Mutual Group",
        description: "Advised on redundancy and termination processes.",
      },
      {
        name: "Liberty Life Assurance and Heritage Insurance",
        description:
          "Advised on redundancy, termination, and contract coordination.",
      },
      {
        name: "Aramex Kenya Limited",
        description:
          "Collective bargaining dispute with Transport Workers Union; reviewed employment policies.",
      },
      {
        name: "Kenya Orient",
        description:
          "Advised on redundancy, termination, and contract coordination.",
      },
      {
        name: "Acumen Fund",
        description:
          "Reviewed HR policies and employment contracts ensuring compliance with law.",
      },
      {
        name: "Senior executives of AMREF Health Africa",
        description: "Challenged two unfair termination claims successfully.",
      },
      {
        name: "An NGO",
        description:
          "Suit filed by former employee for salary underpayment, unlawful termination, constructive dismissal, and unpaid dues.",
      },
      {
        name: "An insurance company",
        description: "Advised on redundancies and prepared all documentation.",
      },
    ],
    keyContact: {
      name: "Sean Omondi",
      image: "/images/sean.jpeg",
      email: "sean.omondi@ronn.law",
      mobile: "+254 722 443 058",
    },
  },
  {
    slug: "real-estate-finance",
    name: "Real Estate & Finance",
    image: "/images/real-estate.jpg",
    overview: `We help with real estate purchase, sale, financing, and high-value financing transactions. Our lawyers have acted for commercial banks and private clients in property acquisition, project development, construction, leasing, logistics, land use, telecommunications base stations, and security transactions.`,
    experience: [
      {
        name: "UBS Foundation",
        description:
          "Social impact loans to entities in Kenya including due diligence and review of loan agreements.",
      },
      {
        name: "I&M Bank Limited",
        description:
          "Lending over USD 20 million to local borrower including security structure and principal documentation.",
      },
      {
        name: "Various local banks",
        description:
          "Preparation and registration of securities including NCBA, Standard Chartered, and Stanbic.",
      },
      {
        name: "Leading pan-African property company",
        description:
          "Purchase of property through shares in property holding company valued at USD 32 million; sale and leaseback advisory.",
      },
      {
        name: "Private owner",
        description:
          "Sale of land in Nairobi valued over KES 1 billion for new offices for International Committee of Red Cross.",
      },
      {
        name: "Commercial Leasing",
        description:
          "Negotiation, drafting, and registration of commercial leases including Yaya Centre and The Pavilion.",
      },
      {
        name: "Telecom Companies",
        description:
          "Acquisition, negotiation, drafting, and registration of commercial leases for base transceiver and broadcasting sites including Safaricom and GOtv.",
      },
      {
        name: "Leading private developer",
        description:
          "Purchase of properties in Nairobi including sale agreement, structuring, regulatory approvals, and construction agreements.",
      },
      {
        name: "Copia Kenya",
        description:
          "Lease of warehouse premises in Tatu City; transaction structuring and terms negotiation.",
      },
      {
        name: "Freight Forwarders Solutions Ltd",
        description:
          "Lease of warehouse premises in Tatu City including transaction structuring and terms negotiation.",
      },
      {
        name: "American private equity fund",
        description:
          "Drafting commercial lease in Eldama Park, due diligence and negotiation of terms.",
      },
    ],
    keyContact: {
      name: "Muthoni Runji-Pertet",
      image: "/images/muthoni.jpeg",
      email: "muthoni.runji@ronn.law",
      mobile: "+254 722 639 739",
    },
  },
  {
    slug: "energy-infrastructure-natural-resources",
    name: "Energy, Infrastructure & Natural Resources",
    image: "/images/energy.jpg",
    overview: `From energy M&A and O&M contracts to concession agreements and PPAs, we provide clients with insights and clarity. We act for private developers, financiers, government, DFIs, exploration companies, and regulators. Our team has in-depth knowledge of infrastructure and energy projects, led by Njau Mukuha, recognized as one of Kenya's top projects lawyers.`,
    experience: [
      {
        name: "Leading Chinese Infrastructure Developer",
        description:
          "PPP structure for Lot 10 concession: finance, build, operate, maintain roads under Kenya’s Roads 10,000 Annuities programme.",
      },
      {
        name: "Leading Kenyan Construction Company",
        description:
          "PPP structure for Lot 33: finance, build, operate, maintain 93 km road under Kenya Rural Roads Authority.",
      },
      {
        name: "China Road and Bridge Corporation",
        description:
          "Project agreement with Kenya Railways Corporation for Standard Gauge Railway operations.",
      },
      {
        name: "Port of Singapore Authority",
        description: "Bid for operation of second terminal at Mombasa Port.",
      },
      {
        name: "Infrastructure Leasing and Financial Services Ltd",
        description:
          "RFP issued by Kenyan Roads Authorities for Roads 10,000 Annuities programme.",
      },
      {
        name: "Aeolus Kenya Ltd",
        description:
          "Negotiated framework agreement for 6-phase LAPSSET Corridor project.",
      },
      {
        name: "African Development Bank",
        description:
          "Partial risk guarantee for 105 MW geothermal plant in Menengai.",
      },
      {
        name: "Aperture Green Power",
        description:
          "Development of 50 MW power plant in Limuru including PPA negotiations.",
      },
      {
        name: "Leading French Developer",
        description:
          "50 MW solar project; reviewed PPA, negotiated government support and generation license.",
      },
      {
        name: "IDEA Power",
        description: "40 MW solar plant in Malindi; PPA negotiations.",
      },
      {
        name: "Enel Green s.p.a",
        description: "Solar powered microgrid in Nyamira and Kisii.",
      },
      {
        name: "Renewable Energy Performance Platform",
        description:
          "Acquisition of stake in Kleen Energy Limited, including EPC, O&M, land rights, and PPA advisory.",
      },
      {
        name: "Trademark East Africa, Kenya Ports Authority & Kenya Railways Corporation",
        description:
          "PPP feasibility study for freight movement optimization from Mombasa Port to Nairobi Inland Container Depot.",
      },
      {
        name: "IFC & Kenyan Ministry of Health",
        description:
          "Feasibility study for 4 regional cancer centres across Kenya on PPP basis.",
      },
    ],
    keyContact: {
      name: "Njau Mukuha",
      image: "/images/njau.jpeg",
      email: "njau.mukua@ronn.law",
      mobile: "+254 721 683 882",
    },
  },
];

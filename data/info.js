// ============================================================
// PORTFOLIO DATA — edit this file to update your entire site
// ============================================================

const INFO = {

  // ----------------------------------------------------------
  // PERSONAL
  // ----------------------------------------------------------
  name: "Dr. Avan Kumar",
  shortName: "Dr. Kumar",           // shown in navbar
  title: "Postdoctoral Researcher",
  institution: "Arizona State University  ",
  department: "School of Sustainability",
  location: "Tempe, Arizona 85288",
  email: "akuma469@asu.edu",
  mobile: "+1 602358----",
  lastUpdated: "May 2026",

  // ----------------------------------------------------------
  // MISSION
  // ----------------------------------------------------------
  mission: "Advancing sustainable and circular systems through trustworthy AI, data-driven engineering, and intelligent decision-making.",

  // ----------------------------------------------------------
  // PROFILE PHOTO
  // Replace with a direct URL or a relative path like "assets/img/photo.jpg"
  // ----------------------------------------------------------
  photo: "./assets/Avan_pic.JPG",

  // ----------------------------------------------------------
  // KEYWORD TAGS shown in the hero section
  // ----------------------------------------------------------
  researchTags: [
    "AI for Sustainable Process Systems Engineering",
    "AI for Circular Systems",
    "Product and Process Design",
    "Life Cycle Assessment",
    "Product End-of-life Modeling",
    "Optimization"
    
    
  ],

  // ----------------------------------------------------------
  // BIO — array of paragraphs shown in the About section
  // ----------------------------------------------------------
  bio: [
    "I am working as a <strong>Postdoctoral Researcher</strong> at the <strong>School of Sustainability, Arizona State University</strong>. I develop frameworks to solve sustainability challenges using generative artificial intelligence (Gen AI) tools that support the global industrial systems transition toward net zero. My research focuses on leveraging large language models (LLMs), deep learning, and life cycle assessment (LCA) tools to enable data-driven discovery and optimization of sustainable processes.",
    "I have developed and applied domain-specific LLM frameworks such as Ex-SciBERT, H2-BERT, Recycle-BERT, and CCU-LLaMA for extracting structured knowledge from scientific literature across areas, including carbon capture, hydrogen production, and plastic recycling. My work also combines explainable AI and multi-objective optimization (e.g., Bayesian optimization with interpretable deep learning models) to design efficient and sustainable chemical systems. ",
    "My recent work includes AI-enabled frameworks for life cycle and environmental impact inventory development, circular pathway discovery, and sustainable-by-design materials, along with industrial collaborations in bioprocess optimization and direct air capture (DAC) systems. ",
    "I have authored 14 peer-reviewed publications in leading journals and contributed to international conferences (PSE, AIChE, ACLCA, ESCAPE), along with 2 book chapters, while also mentoring graduate and undergraduate researchers across interdisciplinary projects.",
    "My broader goal is to bridge cutting-edge AI methodologies with sustainability challenges, building intelligent systems that enable scalable, circular, and net-zero solutions for the chemical and materials industry."
  ],

  // ----------------------------------------------------------
  // EXTERNAL LINKS — set to null to hide a button
  // ----------------------------------------------------------
  links: {
    email:       "akuma469@asu.edu",
    cv:          "./assets/CV_Dr__Avan_Kumar.pdf",               // or a URL
    scholar:     "https://scholar.google.com/citations?user=vbz3EDQAAAAJ&hl=en&oi=ao",
    github:      "https://github.com/avanscholar",
    linkedin:    "https://www.linkedin.com/in/avan-k-a5651bba/",
    twitter:     null,                          // set null to hide
    orcid:       "https://orcid.org/my-orcid?orcid=0009-0008-6071-6816",
    researchgate: null,
  },

  // ----------------------------------------------------------
  // RESEARCH INTERESTS
  // icon: any emoji or short text. description: 1-2 sentences.
  // ----------------------------------------------------------
  research: [
  {
    icon: "♻️",
    title: "AI for Product End-of-Life Modeling",
    description:
      "Developing AI-driven frameworks to identify, compare, and optimize recycling, reuse, recovery, and disposal pathways for products and materials.",
  },
  {
    icon: "⚙️",
    title: "Explainable AI for Process Modeling",
    description:
      "Building interpretable machine-learning models that predict process performance, identify influential operating variables, and support transparent process optimization.",
  },
  {
    icon: "🤖",
    title: "AI for Sustainable and Circular Systems Engineering",
    description:
      "Integrating AI, thermodynamic modeling, superstructure generation, and multi-objective optimization to discover profitable, circular, and net-zero process pathways.",
  },
  {
    icon: "📚",
    title: "AI- and Literature-Driven Scientific Data Curation",
    description:
      "Using domain-adapted language models, ontologies, and knowledge graphs to transform scientific literature into structured, traceable process and sustainability data.",
  },
  {
    icon: "🏭",
    title: "Bridging Knowledge Gaps Between Academia and Industry",
    description:
      "Translating laboratory research into pilot- and industrial-scale solutions through process simulation, experimental validation, optimization, and sustainability assessment.",
  },
],

  // ----------------------------------------------------------
  // PUBLICATIONS
  // type: "conference" | "journal" | "workshop" | "preprint"
  // featured: true → shows a "Featured" badge and accent border
  // links: any subset of { paper, code, project, poster, slides, data }
  // ----------------------------------------------------------
  publications: [
    {
    title: "Integrated Retrosynthesis and Large Language Modeling for Chemistry-Informed Circular Chemical Reaction Networks",
    authors: "Sunghoon Kim, <strong>Avan Kumar</strong>, Kodamana, Hariprasad, Ramteke, Manojkumar, Bakshi R. Bhavik,",
    venue: "ACS Sustainable Chemistry & Engineering",
    year: 2026,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1021/acssuschemeng.6c06648",
      // code: "#",
      // project: "#",
    },
    tags: ["AI-driven Network Generation", "Retrosynthesis Tool", "Circular Systems"],
  },


    {
    title: "A Knowledge Graph-Embedded Large Language Model to Strategize Battery Recycling Technology Selection (Accepted)",
    authors: "Shubham Garampalli, <strong>Avan Kumar</strong>, Bakshi, Bhavik, Kodamana, Hariprasad, Ramteke, Manojkumar",
    venue: "Computers & Chemical Engineering",
    year: 2026,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.compchemeng.2026.109837",
      // code: "#",
      // project: "#",
    },
    tags: ["Battery Recycling", "Multiobjective Optimization", "Battery-LLaMA"],
  },
    {
    title: "Sustainable Agricultural Residue Management in the Indo-Gangetic Plains for Cost-Effective Climate and Water Resilience",
    authors: "Sharma, Shobhita, <strong>Avan Kumar</strong>, Bakshi, Bhavik, Kodamana, Hariprasad, Ramteke, Manojkumar",
    venue: "Industrial & Engineering Chemistry Research",
    year: 2026,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1021/acs.iecr.5c05209",
      // code: "#",
      // project: "#",
    },
    tags: ["Agricultural Waste Management", "Multiobjective Optimization", "Climate-Impact"],
  },
     {
    title: "Data-driven optimization of catalyst composition and reaction temperature for hydrogen-rich syngas yield from biomass gasification: Experimental validation and characterization",
    authors: "Kaushik Kundu, <strong>Avan Kumar</strong>, Hariprasad Kodamana, Kamal K Pant",
    venue: "Energy Conversion and Management",
    year: 2026,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.enconman.2026.121243",
      // code: "#",
      // project: "#",
    },
    tags: ["Machine Learning", "Biomass Gasification", "Hydrogen"],
  },
     {
    title: "Role of artificial intelligence in the chemical industry transition to a sustainable, circular, and net-zero future",
    authors: "<strong>Avan Kumar </strong>, Sunghoon Kim, Bhavik R Bakshi",
    venue: "Current Opinion in Chemical Engineering",
    year: 2026,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.coche.2026.101234",
      // code: "#",
      // project: "#",
    },
    tags: ["Artificial Intelligence", "Sustainability", "Chemical Engineering"],
  }, 

  {
    title: "A Large Language Model-based Framework to Retrieve Life Cycle Inventory and Environmental Impact Data from Scientific Literature",
    authors: "<strong>Avan Kumar </strong>, Farshid Nazemi, Hariprasad Kodamana, Manojkumar Ramteke, Bhavik R Bakshi",
    venue: "Environmental Science & Technology",
    year: 2025,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1021/acs.est.5c05955",
      // code: "#",
      // project: "#",
    },
    tags: ["LLM", "Life Cycle Assessment", "Environmental Impact"],
  },

  {
    title: "An evolutionary study on technologies for polyethylene terephthalate waste recycling using natural language processing",
    authors: "<strong>Avan Kumar </strong>, Harshitha Chandra Jami, Bhavik R Bakshi, Manojkumar Ramteke, Hariprasad Kodamana",
    venue: "Computers & Chemical Engineering",
    year: 2025,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.compchemeng.2025.109011",
      // code: "#",
      // project: "#",
    },
    tags: ["NLP", "PET Recycling", "Waste Management"],
  },
  {
    title: "Process Modeling and Optimal Evaluation Analysis for Direct CO2 Conversion to Methanol",
    authors: "<strong>Avan Kumar </strong>, Hariprasad Kodamana",
    venue: "Comprehensive Methanol Science: Production, Applications, and Emerging Technologies",
    year: 2025,
    type: "Book Chapter",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/B978-0-443-15740-0.00113-0",
      // code: "#",
      // project: "#",
    },
    tags: ["LLM", "Hydrogen Production", "Catalyst & Process"],
  },

  {
    title: "CCU-Llama: A Knowledge Extraction LLM for Carbon Capture and Utilization by Mining Scientific Literature Data",
    authors: "Harshitha Chandra Jami, Pushp Raj Singh, <strong>Avan Kumar </strong>, Bhavik R Bakshi, Manojkumar Ramteke, Hariprasad Kodamana",
    venue: "Industrial & Engineering Chemistry Research",
    year: 2024,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10. 1021/acs.iecr.4c01656",
      // code: "#",
      // project: "#",
    },
    tags: ["LLM", "Carbon Capture", "Knowledge Extraction"],
  },

  {
    title: "Obtaining high H2-rich syngas yield and carbon conversion efficiency from biomass gasification: From characterization to process optimization using machine learning with experimental validation",
    authors: "Kaushik Kundu, <strong>Avan Kumar </strong>, Hariprasad Kodamana, Kamal K Pant",
    venue: "Fuel",
    year: 2024,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.fuel.2024.132931",
      // code: "#",
      // project: "#",
    },
    tags: ["Biomass Gasification", "Machine Learning", "Syngas"],
  },

  {
    title: "Recycle-BERT: extracting knowledge about plastic waste recycling by natural language processing",
    authors: "<strong>Avan Kumar </strong>, Bhavik R Bakshi, Manojkumar Ramteke, Hariprasad Kodamana",
    venue: "ACS Sustainable Chemistry & Engineering",
    year: 2023,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1021/acssuschemeng.3c03162",
      // code: "#",
      // project: "#",
    },
    tags: ["BERT", "Plastic Recycling", "NLP"],
  },

  {
    title: "A Convolutional Neural Network-based gradient boosting framework for prediction of the band gap of photo-active catalysts",
    authors: "<strong>Avan Kumar </strong>, Sreedevi Upadhyayula, Hariprasad Kodamana",
    venue: "Digital Chemical Engineering",
    year: 2023,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.dche.2023.100109",
      // code: "#",
      // project: "#",
    },
    tags: ["CNN", "Catalysts", "Band Gap Prediction"],
  },
  {
    title: "An NLP-based framework for extracting the catalysts involved in Hydrogen production from scientific literature",
    authors: "<strong>Avan Kumar </strong>, Hariprasad Kodamana",
    venue: "Computer Aided Chemical Engineering",
    year: 2023,
    type: "book Chapter",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    tags: ["LLM", "Hydrogen Production", "Catalyst & Process"],
  },

  {
    title: "A text mining framework for screening catalysts and critical process parameters from scientific literature-A study on Hydrogen production from alcohol",
    authors: "<strong>Avan Kumar </strong>, Swathi Ganesh, Divyanshi Gupta, Hariprasad Kodamana",
    venue: "Chemical Engineering Research and Design",
    year: 2022,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.cherd.2022.05.018",
      // code: "#",
      // project: "#",
    },
    tags: ["Text Mining", "Hydrogen Production", "Catalysts"],
  },

  {
    title: "Multiobjective Bayesian optimization framework for the synthesis of methanol from syngas using interpretable Gaussian process models",
    authors: "<strong>Avan Kumar </strong>, Kamal K Pant, Sreedevi Upadhyayula, Hariprasad Kodamana",
    venue: "ACS Omega",
    year: 2022,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1021/acsomega.2c04919",
      // code: "#",
      // project: "#",
    },
    tags: ["Bayesian Optimization", "Methanol Synthesis", "Gaussian Processes"],
  },

  {
    title: "Luminescent down shifting natural dyes to enhance photovoltaic efficiency of multicrystalline silicon solar module",
    authors: "Juhi Singh,  <strong>Avan Kumar </strong>, Anubha Jaiswal, Swati Suman, Ravi P Jaiswal",
    venue: "Solar Energy",
    year: 2020,
    type: "journal",
    featured: false,
    links: {
      paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },

  {
    title: "Ontology-Informed Knowledge Database and Large Language Model Development: A Case Study on Battery Recycling",
    authors: "Kumar, Avan, George Stephanopoulos, and Bhavik R. Bakshi",
    venue: "AIChE Annual Meeting at Boston",
    year: 2026,
    type: "conference",
    featured: false,
    links: {
      // paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    // tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },

  {
    title: "A Customized Large Language Model for Creating Circular Reaction Networks for Discovering Sustainable Chemical Processes",
    authors: "Kumar, Avan, Sunghoon Kim, George Stephanopoulos, and Bhavik R. Bakshi",
    venue: "AIChE Annual Meeting at Boston",
    year: 2025,
    type: "conference",
    featured: false,
    links: {
      // paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    // tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },

  {
    title: "Sustain-GPT: A Large Language Model for Creating a Structured Database from Unstructured Text Resources to Develop Life Cycle Inventories",
    authors: "Kumar, Avan, Amrita Sen, and Bhavik R. Bakshi",
    venue: "AIChE Annual Meeting at San Diego",
    year: 2024,
    type: "conference",
    featured: false,
    links: {
      // paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    // tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },

   {
    title: "Developing a Life Cycle Inventory Database for Plastic Packaging End of Life Technologies Using Customized Large Language Models",
    authors: "Kumar, Avan, Farshid Nazemi, and Bhavik R. Bakshi",
    venue: "ACLCA at Snowbird, Utah",
    year: 2024,
    type: "conference",
    featured: false,
    links: {
      // paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    // tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },
 
     {
    title: "A Neural Network Framework for Material Selection Based on Band Gap Using Chemical Embedding",
    authors: "Kumar, Avan, and Hariprasad Kodamana",
    venue: "European Congress of Applied Biotechnology at the City Cube in Berlin, Germany",
    year: 2023,
    type: "conference",
    featured: false,
    links: {
      // paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    // tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },

  {
    title: "An NLP-based framework for extracting the catalysts involved in hydrogen production from scientific literature",
    authors: "Kumar, Avan, and Hariprasad Kodamana",
    venue: "33rd European Symposium on Computer-Aided Process Engineering (ESCAPE-33) at Athens, Greece",
    year: 2023,
    type: "conference",
    featured: false,
    links: {
      // paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    // tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },

  {
    title: "A deep learning framework for prediction of the band gap photoactive catalyst",
    authors: "Kumar, Avan, Sreedevi Upadhyayula, and Hariprasad Kodamana",
    venue: "10th Asian Symposium on Process Systems Engineering: Systems Engineering for the Digitalization Era at IIT Madras",
    year: 2022,
    type: "conference",
    featured: false,
    links: {
      // paper: "https://doi.org/10.1016/j.solener.2020.05.067",
      // code: "#",
      // project: "#",
    },
    // tags: ["Solar Energy", "Photovoltaics", "Natural Dyes"],
  },
  ],

  // ----------------------------------------------------------
  // AWARDS & HONORS
  // ----------------------------------------------------------
  awards: [
    {
      year: 2026,
      title: "Early Career Editoral Board",
      organization: "Data, MPDI",
      description: null,
    },
    {
      year: 2025,
      title: "Reviewer Membership",
      organization: " Environmental Science & Technology, Digital Discovery, Digital Chemical Engineering, Sustainable Energy and Fuels, Chem Circularity, Clean Technologies and Environmental Policy, Applied Engineering, Process Engineering for Sustainable Development, International Journal of Greenhouse Gas Control",
      description: null,
    },
    {
      year: 2023,
      title: "Research Excellence Travel Award (RETA)",
      organization: "Indian Institute of Technology Delhi",
      description: null,
    },
     {
      year: 2023,
      title: "Researcher Scholar Travel Award (RSTA)",
      organization: "Indian Institute of Technology Delhi",
      description: null,
    },
    {
      year: 2022,
      title: "Nucleus OCS PhD Coordinator",
      organization: "At Chemical Engineering in the Indian Institute of Technology Delhi",
      description: null,
    },
    // {
    //   year: 2016,
    //   title: "Class Representative (CR)",
    //   organization: "At Chemical Engineering Indian Institute of Technology BHU",
    //   description: null,
    // },
     {
      year: 2016,
      title: "Head of Polymer Clay Event",
      organization: "In Tatva, the technical fest at Delhi Technology University",
      description: null,
    },
  ],

  // ----------------------------------------------------------
  // WORK EXPERIENCE
  // ----------------------------------------------------------
  workExperience: [
    {
      role: "Postdoctoral Researcher",
      organization: "Arizona State University",
      department: "School of Sustainability",
      location: "Tempe, AZ",
      period: "Dec 2023 – Present",
      description: "Ongoing AI-enabled Projects for Achieving Net-Zero in the Chemical and Materials Industry:",
      highlights: [
        "Ontology-Informed Large Language Model Development for Discovering Novel and Sustainable Chemical System Pathways: A Battery Recycling Case Study",
        "Generative AI Models and Frameworks for Sustainable-by-Design Materials and Processes",
        "An Automated LLM-Driven Framework for Discovering Sustainable Circular Pathways for Chemicals and Polymers (Completed)",
        "Developing Life Cycle Inventory and Environmental Impact Databases Using the Customized Sustain-LLaMA Framework (Completed)",
      ],
    },
       
    {
      role: "Independent Consultant",
      organization: "DeepPro",
      department: "Part-time",
      location: "Huazkhas, New Delhi",
      period: "July 2023- August 2024",
      description: "AI/ML-based Modelling, Optimization and Variability Identification of Trastuzumab Upstream Cell Culture Process.",
      highlights: [
        "Developed a predictive model to assess the impact of potential variations in process parameters on the product and critical quality attributes.",
        "Optimized the process to intensify product output beyond the average of the current process while also impacting product quality attributes.",
        "Analyzed the impact of all monitored process parameters on the product and its associated critical quality attributes.",
        // "Developed an ensemble method to predict the outcome for a driver during a race. The framework achieved an efficacy of 95\%."
      ],
    },
    {
      role: "Research Collaborator",
      organization: "Unleashed Racing",
      department: "Part-time",
      location: "Huazkhas, New Delhi",
      period: "July 2022- August 2023",
      description: "Predicting the Performance of a Driver in a Racing Simulator for Racing Unleashed AG.",
      highlights: [
        "Developed a framework for identifying the top drivers across a completed race using statistical approaches.",
        "A convolutional neural network (CNN)-based approach was developed to separate the top drivers from the rest based on various attributes. The approach achieved 98\% accuracy in its predictions.",
        "An autoencoder was used to calculate the reconstruction error across various deciles and to predict a driver's performance during a race.",
        "Developed an ensemble method to predict the outcome for a driver during a race. The framework achieved an efficacy of 95\%."
      ],
    },
    {
      role: "Training placement representative",
      organization: "Indian Institute of Technology, Delhi",
      department: "Chemical Engineering Department",
      location: "Huazkhas, New Delhi",
      period: "August 2022 – July 2023",
      
    },
    {
      role: "Research And Teaching Assistant",
      organization: "Indian Institute of Technology, Delhi",
      department: "Chemical Engineering",
      location: "Huazkhas, New Delhi",
      period: "January 2020- August 2023",
      // description: "AI/ML-based Modelling, Optimization and Variability Identification of Trastuzumab Upstream Cell Culture Process.",
      // highlights: [
      //   "Developed a predictive model to assess the impact of potential variations in process parameters on the product and critical quality attributes.",
      //   "Optimized the process to intensify product output beyond the average of the current process while also impacting product quality attributes.",
      //   "Analyzed the impact of all monitored process parameters on the product and its associated critical quality attributes.",
      //   // "Developed an ensemble method to predict the outcome for a driver during a race. The framework achieved an efficacy of 95\%."
      // ],
    },
      {
      role: "Teaching Assistant",
      organization: "Indian Institute of Technology, BHU",
      department: "Chemical Engineering",
      location: "Varanasi, Uttar Pradesh",
      period: "June 2018- May 2019",
      // description: "AI/ML-based Modelling, Optimization and Variability Identification of Trastuzumab Upstream Cell Culture Process.",
      // highlights: [
      //   "Developed a predictive model to assess the impact of potential variations in process parameters on the product and critical quality attributes.",
      //   "Optimized the process to intensify product output beyond the average of the current process while also impacting product quality attributes.",
      //   "Analyzed the impact of all monitored process parameters on the product and its associated critical quality attributes.",
      //   // "Developed an ensemble method to predict the outcome for a driver during a race. The framework achieved an efficacy of 95\%."
      // ],
    },

    {
      role: "Summer Internship",
      organization: "Delhi Jal Board (DJB)",
      // department: "Chemical Engineering",
      location: "North Delhi, Delhi",
      period: "Summer 2016",
      description: "Worked with sewage water and river water treatment plants, checked the quality of cleaned water, and made reports.",
      // highlights: [
      //   "Developed a predictive model to assess the impact of potential variations in process parameters on the product and critical quality attributes.",
      //   "Optimized the process to intensify product output beyond the average of the current process while also impacting product quality attributes.",
      //   "Analyzed the impact of all monitored process parameters on the product and its associated critical quality attributes.",
      //   // "Developed an ensemble method to predict the outcome for a driver during a race. The framework achieved an efficacy of 95\%."
      // ],
    },

    {
      role: "Winter Intern",
      organization: "Tirupati Structural Limited",
      // department: "Chemical Engineering",
      location: "Ghaziabad, Uttar Pradesh",
      period: "Winter 2015",
      description: "As a quality analyst at this company, I worked on plastic products like PVC pipes, PVC sheets, HDPE pipes, and LDPE pipes.",
      // highlights: [
      //   "Developed a predictive model to assess the impact of potential variations in process parameters on the product and critical quality attributes.",
      //   "Optimized the process to intensify product output beyond the average of the current process while also impacting product quality attributes.",
      //   "Analyzed the impact of all monitored process parameters on the product and its associated critical quality attributes.",
      //   // "Developed an ensemble method to predict the outcome for a driver during a race. The framework achieved an efficacy of 95\%."
      // ],
    },
  ],

  // ----------------------------------------------------------
  // RESEARCH PROJECTS
  // Each project: title, image (URL or path), description,
  // status ("Ongoing" | "Completed"), tags, links
  // ----------------------------------------------------------
  // researchProjects: [
  //   {
  //     title: "Real-Time Motor BCI with Transformer Architectures",
  //     image: "https://picsum.photos/seed/proj01/800/450",
  //     description: "Developing scalable transformer models for real-time decoding of motor cortex activity to drive assistive robotic devices for individuals with paralysis. The system runs at <20 ms latency on embedded hardware.",
  //     status: "Ongoing",
  //     tags: ["BCI", "Transformers", "Motor Cortex", "Real-Time"],
  //     links: {
  //       paper: "https://arxiv.org",
  //       code: "https://github.com",
  //       project: "#",
  //     },
  //   },
  //   {
  //     title: "Disentangled Latent Representations in Motor Planning",
  //     image: "https://picsum.photos/seed/proj02/800/450",
  //     description: "Investigating the geometric structure of neural population activity during motor planning in primate PMd using variational autoencoders and latent variable models. Published in Nature Neuroscience (2024).",
  //     status: "Completed",
  //     tags: ["Latent Variables", "Primate Electrophysiology", "Motor Planning", "VAE"],
  //     links: {
  //       paper: "https://nature.com",
  //       code: "https://github.com",
  //     },
  //   },
  //   {
  //     title: "Robust Spike Sorting under Chronic Electrode Drift",
  //     image: "https://picsum.photos/seed/proj03/800/450",
  //     description: "Creating adaptive algorithms for reliable spike sorting in long-term implanted electrodes that experience gradual drift and signal degradation over months-long recording sessions.",
  //     status: "Ongoing",
  //     tags: ["Spike Sorting", "Signal Processing", "Electrophysiology", "Adaptive Algorithms"],
  //     links: {
  //       paper: "https://arxiv.org",
  //       code: "https://github.com",
  //     },
  //   },
  //   {
  //     title: "Population Geometry and Neural Decoder Generalization",
  //     image: "https://picsum.photos/seed/proj04/800/450",
  //     description: "Exploring how the intrinsic geometry of neural population manifolds determines the generalization capability of downstream linear and nonlinear decoders across behavioral conditions.",
  //     status: "Completed",
  //     tags: ["Neural Geometry", "Generalization", "Population Coding"],
  //     links: {
  //       paper: "https://arxiv.org",
  //       poster: "#",
  //     },
  //   },
  // ],

  software: [
    {
      title: "Battery Recycling Intelligence",
      description: "An interactive decision-support platform for exploring battery recycling knowledge and comparing candidate recycling pathways. The tool organizes literature-derived information on battery inputs, recycling methodologies, chemicals, recovered critical materials, recovery performance, and sustainability indicators to support evidence-based recycling technology selection.",
      tags: ["Battery Recycling", "Knowledge Graph", "AI", "Decision Support", "Sustainability"],
      links: {
        software: "https://battery-recycling.devspaced.app/"
      }
    }
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree: "Ph.D. in Chemical Engineering",
      institution: "Indian Institute of Technology Delhi",
      year: "July 2019 – May 2024",
      advisor: "Prof. Hariprasad Kodamana",
      thesis: "Application of Deep Learning and Natural Language Processing for Sustainable Process Development",
      honors: null,
    },
    {
      degree: "M.Tech. in Chemical Engineering",
      institution: "Indian Institute of Technology BHU",
      year: "July 2017 – May 2019",
      advisor: "Prof. Ravi P. Jaiswal",
      thesis: "Luminescent Downshifting Natural Dyes to Enhance Light Harvesting Efficiency of mc-Silicon Solar Module",
      honors: null,
    },
    {
      degree: "B.Tech. in Polymer Science and Chemical Technology",
      institution: "Delhi Technology University",
      year: "August 2013 – May 2017",
      advisor: null,
      thesis: null,
      honors: "First Class Division",
    },
    {
      degree: "12th in Science Stream",
      institution: "Commercial Senior Secondary School, Daryaganj, New Delhi",
      year: "Completed in May 2013",
      advisor: null,
      thesis: null,
      // honors: "First Class Division",
    },
    {
      degree: "High School",
      institution: "Govt Boys Senior Secondary School, Sonia Vihar, Delhi",
      year: "Completed in May 2011",
      advisor: null,
      thesis: null,
      // honors: "First Class Division",
    },
  ],

  // ----------------------------------------------------------
  // NEWS — remove items or set to [] to hide the section
  // ----------------------------------------------------------
  news: [
    {
      date: "April 2026",
      text: "Invited talk at <strong>the AI for Sustainability (AI4S) Seminar Series at Cornell University</strong> — \"AI-driven Frameworks to Assist the Transition of the Chemical and Materials Industry Toward Net Zero\"",
    },
    {
      date: "January 2025",
      text: "A collaborative talk with Prof. Bhavik R. Bakshi for <strong> Amazon's Sustainability Speaker Series</strong> on \"Sustainable Transformation of the Chemicals and Materials Industry to Net-Zero Emissions\"",
    },
    {
      date: "November 2024",
      text: "Invited talk at <strong>International Industrial Ecology Day 2024 </strong> — \"Sustain-Gpt: A Large Language Model for Creating a Structured Database from Unstructured Text Resources to Develop Life Cycle Inventories\"",
    },
   
  ],

  // ----------------------------------------------------------
  // GALLERY
  // Each item: url (full-size for lightbox), thumb (for grid),
  // caption, category (used for filter chips).
  // Use any direct image URL or a relative path like "assets/img/photo.jpg"
  // ----------------------------------------------------------
  gallery: [
    {
      url:     "../assets/Avan_pic.JPG",
      thumb:   "../assets/Avan_pic.JPG",
      caption: "Annual lab retreat — Lake Tahoe, August 2024",
      category: "Lab Life",
    },
    {
      url:     "https://picsum.photos/seed/conf01/1200/800",
      thumb:   "https://picsum.photos/seed/conf01/600/450",
      caption: "Presenting at NeurIPS 2024 in Vancouver, Canada",
      category: "Conferences",
    },
    {
      url:     "https://picsum.photos/seed/lab02/1200/800",
      thumb:   "https://picsum.photos/seed/lab02/600/450",
      caption: "Weekly lab meeting — Neural Computation & Interfaces Lab",
      category: "Lab Life",
    },
    {
      url:     "https://picsum.photos/seed/conf02/1200/800",
      thumb:   "https://picsum.photos/seed/conf02/600/450",
      caption: "Poster session at COSYNE 2025, Montreal",
      category: "Conferences",
    },
    {
      url:     "https://picsum.photos/seed/field01/1200/800",
      thumb:   "https://picsum.photos/seed/field01/600/450",
      caption: "ECoG recording surgery preparation in the OR",
      category: "Research",
    },
    {
      url:     "https://picsum.photos/seed/award01/1200/800",
      thumb:   "https://picsum.photos/seed/award01/600/450",
      caption: "Receiving the Outstanding Paper Award — NeurIPS 2024",
      category: "Awards",
    },
    {
      url:     "https://picsum.photos/seed/lab03/1200/800",
      thumb:   "https://picsum.photos/seed/lab03/600/450",
      caption: "Holiday dinner with the research group, December 2024",
      category: "Lab Life",
    },
    {
      url:     "https://picsum.photos/seed/talk01/1200/800",
      thumb:   "https://picsum.photos/seed/talk01/600/450",
      caption: "Invited talk at FENS Forum 2024, Vienna",
      category: "Conferences",
    },
    {
      url:     "https://picsum.photos/seed/field02/1200/800",
      thumb:   "https://picsum.photos/seed/field02/600/450",
      caption: "BCI system demo for paralysis patients at UCSF Medical Center",
      category: "Research",
    },
    {
      url:     "https://picsum.photos/seed/lab04/1200/800",
      thumb:   "https://picsum.photos/seed/lab04/600/450",
      caption: "Celebrating paper acceptance — Nature Neuroscience, October 2024",
      category: "Lab Life",
    },
    {
      url:     "https://picsum.photos/seed/conf03/1200/800",
      thumb:   "https://picsum.photos/seed/conf03/600/450",
      caption: "Panel discussion at ICLR 2023, Kigali",
      category: "Conferences",
    },
    {
      url:     "https://picsum.photos/seed/field03/1200/800",
      thumb:   "https://picsum.photos/seed/field03/600/450",
      caption: "Electrode array characterization in the clean room",
      category: "Research",
    },
  ],

};

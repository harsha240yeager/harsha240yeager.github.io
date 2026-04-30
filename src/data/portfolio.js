export const profile = {
  name: 'Harshavardhan Reddy Narra',
  shortName: 'Harshavardhan',
  initials: 'HN',
  title: 'Graduate Researcher · VLSI & Computer Architecture',
  subtitle: 'M.S. Electrical Engineering · University of Southern California',
  tagline: 'Hardware accelerators, microarchitecture, full-custom VLSI',
  status: 'Open for research collaborations in RTL/DV, microarchitecture & hardware accelerators',
  location: 'Los Angeles, California, USA',
  email: 'hnarra@usc.edu',
  resume: '/resume.pdf',
  photo: '/profile.jpg',
  affiliations: [
    { label: 'USC · M.S. EE', tone: 'violet' },
    { label: 'IIT Bhubaneswar · Research Intern', tone: 'cyan' },
    { label: 'IEEE HiPC 2024 Author', tone: 'indigo' },
    { label: 'DVCON India 2024 · 1st Runner-Up', tone: 'fuchsia' },
  ],
  socials: {
    linkedin: 'https://linkedin.com/in/harsha240',
    github: 'https://github.com/harsha240yeager',
    email: 'mailto:hnarra@usc.edu',
    scholar: 'https://ieeexplore.ieee.org/author/10898880',
    googleScholar: '',
    orcid: '',
  },
  acknowledgments:
    'Thanks to my advisors and mentors — Prof. Gandhi Puvvada, Prof. Shahin Nazarian (USC), and Mr. Kunal Ghosh (VSD) — for shaping my path through computer architecture and full-custom VLSI.',
  about: `I'm an M.S. Electrical Engineering researcher at USC focused on hardware acceleration for machine-learning workloads, microarchitecture, and full-custom VLSI. My research spans RTL design and verification of pipelined processors, custom CNN/ViT accelerators on FPGA, hyperdimensional-computing datapaths, and transistor-level layout in Cadence Virtuoso. I'm an IEEE-published author (HiPC 2024) and the First Runner-Up of the DVCON India 2024 Design Contest. I enjoy taking ideas from architectural specification, through RTL and verification, all the way down to silicon.`,
  bioShort: `I research hardware accelerators for ML, microarchitecture, and full-custom VLSI — taking ideas from architectural specification, through RTL and verification, down to silicon. IEEE HiPC 2024 author and DVCON India 2024 First Runner-Up.`,
  interests: [
    'ML accelerator microarchitecture — systolic-array CNN engines and ViT feature extractors integrated over AXI4',
    'Pipelined RISC-V cores (RV64I + Zba) — hazard resolution, forwarding, early-branch prediction, SVA-driven verification',
    'Full-custom datapath VLSI — Booth multipliers, 3:2/6:2 compressor trees, sparse Kogge-Stone CLAs in Cadence Virtuoso',
    'Synthesizable RTL for emerging compute — hyperdimensional-computing pipelines with valid/ready handshakes',
    'PPA-driven physical design — DRC/LVS/PEX, post-layout timing, RCX-aware closure',
    'FPGA prototyping & SoC integration — Genesys 2 (Kintex-7) with RISC-V softcores',
  ],
  highlights: [
    { value: '116', suffix: ' GOP/s', label: 'CNN-accelerator throughput on Genesys-2 FPGA' },
    { value: '2.8', suffix: '×', label: 'ViT feature-extraction speedup vs. CPU baseline' },
    { value: '833', suffix: ' MHz', label: 'Full-custom 16-bit MAC clock target' },
    { value: '1024', suffix: '-bit', label: 'HDC XOR-permute datapath in SystemVerilog' },
  ],
};

export const news = [
  {
    date: 'Apr 2026',
    type: 'New',
    text: 'Earned the Cadence SystemVerilog for Design and Verification (v25.03) certification.',
    accent: 'cyan',
  },
  {
    date: 'Jan 2026',
    type: 'Joined',
    text: 'Joined IIT Bhubaneswar as a Research Intern — building a synthesizable 1024-bit HDC XOR-permute pipeline in SystemVerilog.',
    accent: 'violet',
  },
  {
    date: 'Dec 2025',
    type: 'Honor',
    text: 'Ranked #1 team in EE477 (MOS VLSI Circuit Design) for our full-custom 16-bit MAC unit (Booth + Kogge-Stone) at USC.',
    accent: 'indigo',
  },
  {
    date: 'Aug 2025',
    type: 'Started',
    text: 'Started M.S. in Electrical Engineering (VLSI & Computer Architecture) at the University of Southern California.',
    accent: 'violet',
  },
  {
    date: 'Dec 2024',
    type: 'Paper',
    text: 'Presented "Efficient Feature Extraction for ViT Model using Custom CNN Accelerator" at IEEE HiPC 2024 (ROCS Workshop).',
    accent: 'cyan',
  },
  {
    date: 'Sep 2024',
    type: 'Award',
    text: 'First Runner-Up at DVCON India 2024 Design Contest for the ViT/CNN accelerator project.',
    accent: 'fuchsia',
  },
];

export const researchFocus = [
  {
    icon: 'BrainCircuit',
    title: 'Hardware accelerators for ML',
    description:
      'Custom CNN / Vision-Transformer accelerators integrated with RISC-V cores over AXI4 — exploring systolic-array topologies, dataflow, and PPA trade-offs on FPGA.',
    keywords: ['CNN', 'Vision Transformer', 'Systolic Array', 'Dataflow'],
  },
  {
    icon: 'Cpu',
    title: 'Microarchitecture & RTL',
    description:
      'Pipelined RISC-V cores (RV64I + Zba) with hazard resolution, forwarding, branch prediction, and self-checking SystemVerilog testbenches with assertion-based verification.',
    keywords: ['RISC-V', 'Pipelining', 'Hazards', 'SVA'],
  },
  {
    icon: 'CircuitBoard',
    title: 'Full-custom VLSI',
    description:
      'Schematic-to-layout in Cadence Virtuoso — Booth multipliers, compressor trees, sparse Kogge-Stone CLAs — with DRC/LVS/PEX and corner timing analysis.',
    keywords: ['Cadence', 'Booth + KSA', 'DRC/LVS', 'Timing'],
  },
  {
    icon: 'Sparkles',
    title: 'Emerging compute',
    description:
      'Synthesizable RTL pipelines for hyperdimensional computing (HDC) — parameterized 1024-bit XOR-plus-permute datapaths with valid/ready handshake.',
    keywords: ['HDC', 'In-Memory Compute', 'Brain-Inspired'],
  },
];

export const experience = [
  {
    role: 'Research Intern',
    company: 'Indian Institute of Technology (IIT) Bhubaneswar',
    location: 'Odisha, India',
    period: 'Jan 2026 – Present',
    accent: 'violet',
    bullets: [
      'Designing a synthesizable SystemVerilog RTL pipeline for Hyperdimensional Computing (HDC) — a 1024-bit XOR-plus-permute datapath with configurable permutation modes (word reversal, per-word rotation, full-vector rotation).',
      'Built a parameterized, modular architecture (WORDS × BITS_PER_WORD) with valid/ready handshake signaling and registered pipeline stages for clean timing closure.',
      'Developed a self-checking SystemVerilog testbench with golden-model verification covering all permutation modes, boundary rotation values, and output backpressure stall scenarios.',
    ],
    tags: ['SystemVerilog', 'HDC', 'RTL', 'Verification'],
  },
  {
    role: 'Research Intern',
    company: 'VLSI System Design (VSD)',
    location: 'Remote',
    period: 'Apr 2024 – May 2024',
    accent: 'cyan',
    bullets: [
      'Worked on the VSDSquadron Mini board powered by the CH32V003F4U6 chip with a 32-bit RISC-V core (RV32EC ISA).',
      'Followed end-to-end chip design flow: chip specifications → ASIC design → tape-out.',
      'Debugged and tested a full subtractor to validate correct board operation. Mentor: Mr. Kunal Ghosh.',
    ],
    tags: ['RISC-V', 'ASIC', 'Tape-out'],
  },
  {
    role: 'Summer Research Intern',
    company: 'Indian Institute of Technology (IIT) BHU, Varanasi',
    location: 'Uttar Pradesh, India',
    period: 'May 2023 – Jul 2023',
    accent: 'violet',
    bullets: [
      'Developed an IoT-based wearable health-monitoring device on ESP32-WROOM with integrated PPG, ECG, temperature, and gas sensors — supporting real-time signal processing and wireless telemetry.',
      'Improved diagnostic accuracy by 8% for aerospace-medicine applications, working in a team of six.',
    ],
    tags: ['ESP32', 'Embedded HW', 'Signal Processing'],
  },
];

export const education = [
  {
    school: 'University of Southern California',
    degree: 'M.S. in Electrical Engineering — VLSI & Computer Architecture',
    period: 'Aug 2025 – Present',
    location: 'Los Angeles, California, USA',
    coursework: [
      'EE457 — Computer Systems Organization (Prof. Gandhi Puvvada)',
      'EE477 — MOS VLSI Circuit Design (Prof. Shahin Nazarian)',
    ],
    accent: 'violet',
  },
  {
    school: 'Jawaharlal Nehru Technological University, Hyderabad',
    degree: 'B.Tech in Electrical and Electronics Engineering',
    period: 'Aug 2021 – May 2025',
    location: 'Hyderabad, India',
    coursework: [
      'Computer Organization',
      'Digital Electronics',
      'Computer Arithmetic',
      'Microprocessor & Microcontroller',
    ],
    accent: 'cyan',
  },
];

export const skills = [
  {
    group: 'Architecture / Modeling',
    icon: 'Cpu',
    items: ['Computer Architecture', 'Microarchitecture', 'Performance Modeling', 'Pipelining', 'Memory Hierarchy', 'AXI4'],
  },
  {
    group: 'RTL / EDA',
    icon: 'CircuitBoard',
    items: ['Verilog', 'SystemVerilog', 'RTL Design', 'Cadence Virtuoso', 'QuestaSim', 'Vivado', 'ModelSim', 'DRC/LVS/PEX'],
  },
  {
    group: 'Software',
    icon: 'Code2',
    items: ['C++', 'Python', 'TCL', 'Linux', 'Git', 'Bash'],
  },
  {
    group: 'Hardware Platforms',
    icon: 'HardDrive',
    items: ['Genesys 2 FPGA (Kintex-7)', 'Vega AS1061 RISC-V', 'VSDSquadron Mini', 'ESP32-WROOM'],
  },
];

export const projects = [
  {
    id: 'vit-cnn',
    title: 'Custom CNN Accelerator for Vision-Transformer Feature Extraction',
    period: 'IEEE HiPC 2024 · DVCON India 2024',
    accent: 'violet',
    featured: true,
    badge: '1st Runner-Up · DVCON India 2024',
    diagram: 'CNNAccelerator',
    description:
      'A LeNet-5–inspired CNN accelerator IP integrated with the Vega AS1061 RISC-V processor over AXI4, deployed on a Digilent Genesys 2 FPGA (Kintex-7, XC7K325T-2FFG900C). Built to accelerate the front-end feature-extraction stage of a Vision-Transformer–based malware-detection pipeline. Reduced feature-extraction latency by 2.8× over CPU baseline while preserving end-to-end ViT accuracy. Earned the First Runner-Up at DVCON India 2024 and a peer-reviewed paper at IEEE HiPC 2024 (ROCS Workshop).',
    metrics: [
      { label: 'Throughput', value: '116 GOP/s' },
      { label: 'Frequency', value: '200 MHz' },
      { label: 'Power', value: '2.498 W' },
      { label: 'LUT util.', value: '65%' },
      { label: 'BRAM', value: '18%' },
      { label: 'DSP', value: '11.5%' },
    ],
    tags: ['Verilog', 'Systolic Array', 'AXI4', 'RISC-V', 'CNN', 'ViT', 'FPGA'],
    links: [
      { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/10898880' },
      { label: 'DOI', href: 'https://doi.org/10.1109/HiPCW63042.2024.00016' },
    ],
  },
  {
    id: 'rv64i',
    title: '5-Stage Pipelined RISC-V RV64I Processor (+ Zba)',
    period: 'LFX Mentorship Coding Challenge',
    accent: 'cyan',
    diagram: 'Pipeline',
    description:
      'A 5-stage in-order RV64I processor in SystemVerilog with the Zba address-generation extension (SH1ADD, SH2ADD, SH3ADD). Implements full hazard resolution — data-forwarding, ID-bypass, load-use stall, and early-branch prediction with dual forwarding units (HDU_Br, FU_Br). Validated with directed and corner-case testbenches, including SVA assertions for ALU/lw/sw/beq under hazards.',
    metrics: [
      { label: 'ISA', value: 'RV64I + Zba' },
      { label: 'Stages', value: '5' },
      { label: 'Hazards', value: 'Forward + Stall' },
      { label: 'Verif.', value: 'SVA + ModelSim' },
    ],
    tags: ['SystemVerilog', 'RISC-V', 'Pipelining', 'SVA', 'LFX'],
    links: [
      { label: 'GitHub', href: 'https://github.com/harsha240yeager/5-stage-pipelined-RISC-V-RV64I-processor' },
    ],
  },
  {
    id: 'mac',
    title: 'Full-Custom 16-bit MAC Unit',
    period: 'EE477 · Cadence Virtuoso · Ranked #1 in class',
    accent: 'violet',
    diagram: 'MAC',
    description:
      'A full-custom 16-bit Multiply-Accumulate unit using radix-4 Booth encoders, a 3:2 / 6:2 compressor tree, and a sparse-4 Kogge-Stone CLA. Schematic-to-layout in Cadence Virtuoso with end-to-end DRC/LVS, RCX parasitic extraction, and hierarchical post-layout timing characterization. Optimized power-distribution networks for signal integrity and PAD efficiency. Ranked #1 team in the course for design excellence.',
    metrics: [
      { label: 'Frequency', value: '~833 MHz' },
      { label: 'Period', value: '1.2 ns' },
      { label: 'Power', value: '577.3 µW' },
      { label: 'Area', value: '2041 λ²' },
    ],
    tags: ['Cadence', 'Full-Custom', 'Booth', 'Kogge-Stone', 'DRC/LVS', 'RCX'],
    links: [],
  },
  {
    id: 'hdc',
    title: '1024-bit HDC XOR-Permute Pipeline',
    period: 'IIT Bhubaneswar · Ongoing',
    accent: 'cyan',
    diagram: 'HDC',
    description:
      'A synthesizable SystemVerilog RTL pipeline for Hyperdimensional Computing — a 1024-bit XOR-plus-permute datapath with configurable permutation modes (word reversal, per-word rotation, full-vector rotation). Parameterized as WORDS × BITS_PER_WORD with valid/ready handshake signaling, registered pipeline stages, and a self-checking testbench with golden-model verification across boundary rotations and backpressure-stall scenarios.',
    metrics: [
      { label: 'Width', value: '1024-bit' },
      { label: 'Modes', value: '3 permutations' },
      { label: 'Handshake', value: 'valid/ready' },
      { label: 'Verif.', value: 'Golden model' },
    ],
    tags: ['SystemVerilog', 'HDC', 'Pipeline', 'Parameterized'],
    links: [
      { label: 'GitHub', href: 'https://github.com/harsha240yeager/hdc-xor-permute-systemverilog' },
    ],
  },
  {
    id: 'cnn-systolic',
    title: '5×6 Systolic-Array CNN Accelerator (LeNet-5)',
    period: 'Verilog · Genesys 2 FPGA',
    accent: 'violet',
    diagram: 'CNNAccelerator',
    description:
      'Underlying systolic-array engine for the ViT feature-extractor — a 5×6 PE-array implementing convolution, pooling, and activation in Verilog, integrated over AXI4 with the Vega AS1061 RISC-V softcore on Genesys 2 FPGA (Kintex-7).',
    metrics: [
      { label: 'PE array', value: '5 × 6' },
      { label: 'Throughput', value: '116 GOP/s' },
      { label: 'Frequency', value: '200 MHz' },
    ],
    tags: ['Verilog', 'Systolic Array', 'CNN', 'AXI4', 'RISC-V'],
    links: [
      { label: 'Linked work', href: 'https://ieeexplore.ieee.org/document/10898880' },
    ],
  },
  {
    id: 'vsd',
    title: 'VSDSquadron Mini — RISC-V Tape-Out Flow',
    period: 'VSD Internship · CH32V003F4U6 (RV32EC)',
    accent: 'cyan',
    diagram: null,
    description:
      'End-to-end ASIC chip-design exposure on the VSDSquadron Mini board — chip specifications → ASIC design → tape-out — under the mentorship of Mr. Kunal Ghosh. Validated board functionality with a full-subtractor test design.',
    metrics: [
      { label: 'Core', value: 'RV32EC' },
      { label: 'Flow', value: 'Spec → Tape-out' },
      { label: 'Test', value: 'Full Subtractor' },
    ],
    tags: ['RISC-V', 'ASIC', 'VSD'],
    links: [
      { label: 'GitHub', href: 'https://github.com/harsha240yeager/VSDSquadron_miniInternship' },
    ],
  },
];

export const certifications = [
  {
    name: 'SystemVerilog for Design and Verification (v25.03)',
    issuer: 'Cadence',
    year: 'Apr 2026',
    note: 'Industry-recognized exam covering SystemVerilog RTL design and verification methodology — directly aligned with my core RTL/DV work.',
    link: 'https://linkedin.com/in/harsha240',
    linkLabel: 'view on LinkedIn',
    featured: true,
  },
  {
    name: 'LFX Mentorship Coding Challenge — RISC-V',
    issuer: 'Linux Foundation · LFX',
    year: '2026',
    note: 'Participated in the LFX Mentorship coding challenge that produced the 5-stage pipelined RV64I + Zba processor.',
    link: 'https://github.com/harsha240yeager/5-stage-pipelined-RISC-V-RV64I-processor',
  },
  {
    name: 'Analog Circuits',
    issuer: 'NPTEL',
    year: '2023',
    note: 'Foundational analog electronics — relevant to MOS-level VLSI design.',
    link: null,
  },
  {
    name: 'Simulink Onramp',
    issuer: 'MathWorks',
    year: '2023',
    note: 'Model-based design fundamentals used for hardware modeling.',
    link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=bcc122bd-179d-4a5c-9174-8b39fe5f4907',
  },
];

export const publications = [
  {
    title: 'Efficient Feature Extraction for ViT Model using Custom CNN Accelerator',
    authors: 'H. R. Narra, et al.',
    venue: 'IEEE International Conference on High Performance Computing, Data, and Analytics Workshops (HiPCW), ROCS Workshop',
    date: 'December 2024',
    doi: '10.1109/HiPCW63042.2024.00016',
    link: 'https://ieeexplore.ieee.org/document/10898880',
    bibtex: `@inproceedings{narra2024vit,
  author    = {H. R. Narra and others},
  title     = {Efficient Feature Extraction for {ViT} Model using Custom {CNN} Accelerator},
  booktitle = {Proc. IEEE Int'l Conf. on High Performance Computing, Data, and Analytics Workshops (HiPCW)},
  series    = {ROCS Workshop},
  year      = {2024},
  doi       = {10.1109/HiPCW63042.2024.00016},
}`,
  },
];

export const achievements = [
  {
    kind: 'Award',
    title: 'First Runner-Up — DVCON India 2024 Design Contest',
    org: 'DVCon India · Bengaluru',
    date: 'September 2024',
    description:
      'Recognized for "Efficient Feature Extraction for ViT Model Using a Custom CNN Accelerator IP" — a LeNet-5–based CNN accelerator integrated with the Vega AS1061 RISC-V processor over AXI4, deployed on a Genesys 2 FPGA.',
    accent: 'violet',
    icon: 'Trophy',
    link: 'https://linkedin.com/in/harsha240',
    linkLabel: 'View on LinkedIn',
  },
  {
    kind: 'Publication',
    title: 'Efficient Feature Extraction for ViT Model using Custom CNN Accelerator',
    org: 'IEEE HiPC 2024 · ROCS Workshop',
    date: 'December 2024',
    description:
      'Peer-reviewed paper at the IEEE International Conference on High Performance Computing, Data, and Analytics. DOI: 10.1109/HiPCW63042.2024.00016',
    accent: 'cyan',
    icon: 'BookOpen',
    link: 'https://ieeexplore.ieee.org/document/10898880',
    linkLabel: 'Read on IEEE Xplore',
  },
  {
    kind: 'Honor',
    title: 'Ranked #1 Team — EE477 Full-Custom MAC Design',
    org: 'University of Southern California',
    date: 'December 2025',
    description:
      'Top-ranked team in the EE477 cohort for a full-custom 16-bit MAC unit (Booth + compressor tree + sparse-4 Kogge-Stone), judged on PPA, layout quality, and post-layout timing.',
    accent: 'violet',
    icon: 'Medal',
    link: 'https://linkedin.com/in/harsha240',
    linkLabel: 'View on LinkedIn',
  },
];

export const talks = [
  {
    title: 'Efficient Feature Extraction for ViT Model using Custom CNN Accelerator',
    venue: 'IEEE HiPC 2024 · ROCS Workshop',
    location: 'Bengaluru, India',
    date: 'Dec 2024',
    type: 'Paper',
    summary:
      'Presented our peer-reviewed paper on a LeNet-5–inspired CNN accelerator integrated with a RISC-V softcore over AXI4, used as the front-end feature extractor for a Vision-Transformer malware-detection pipeline.',
    accent: 'cyan',
    link: 'https://ieeexplore.ieee.org/document/10898880',
    linkLabel: 'IEEE Xplore',
  },
  {
    title: 'CNN Accelerator IP — Architecture, RTL, and FPGA Mapping',
    venue: 'DVCON India 2024 · Design Contest',
    location: 'Bengaluru, India',
    date: 'Sep 2024',
    type: 'Pitch',
    award: '1st Runner-Up',
    summary:
      'Pitched the end-to-end design of our CNN-accelerator IP — architecture, RTL, AXI integration with the Vega AS1061 RISC-V processor, and Genesys 2 FPGA mapping — to industry judges.',
    accent: 'violet',
    link: 'https://linkedin.com/in/harsha240',
    linkLabel: 'LinkedIn post',
  },
];

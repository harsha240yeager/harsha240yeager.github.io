// Resume-based results retain their workload context. Research interests supplied by Harsha.
export const profile = {
  name: "Harshavardhan Reddy Narra",
  shortName: "Harsha",
  initials: "HN",
  title: "Hardware researcher & engineer",
  subtitle: "M.S. Electrical & Computer Engineering · USC",
  location: "Los Angeles, CA",
  email: "hnarra@usc.edu",
  resume: "/resume.pdf",
  cvPath: "/cv.html",
  photo: "/profile.jpg",
  status: "Open to research collaborations",
  socials: {
    github: "https://github.com/harsha240yeager",
    linkedin: "https://linkedin.com/in/harsha240",
    email: "mailto:hnarra@usc.edu",
  },
  about:
    "I’m Harsha, a graduate student at the University of Southern California. I design hardware that makes demanding computation more efficient—from brain-inspired classifiers and ML accelerators to pipelined processors and transistor-level layouts.",
  philosophy:
    "I like working across the boundaries: understanding the algorithm, shaping the architecture, writing the RTL, and seeing it run on real hardware. The most interesting part is finding out where an elegant idea meets a practical constraint.",
};
export const researchInterests = [
  {
    id: "efficient-architecture",
    number: "01",
    icon: "architecture",
    title: "Energy-Efficient Computer Architecture and AI Accelerators",
    description:
      "Designing computing architectures that improve the performance and energy efficiency of AI inference.",
    themes: ["AI inference", "Energy efficiency", "Architecture"],
  },
  {
    id: "memory-dataflow",
    number: "02",
    icon: "memory",
    title: "Memory Systems and Dataflow Optimization",
    description:
      "Exploring memory hierarchies, data reuse, and scheduling techniques to reduce data movement and execution costs.",
    themes: ["Memory hierarchy", "Data reuse", "Scheduling"],
  },
  {
    id: "hardware-software",
    number: "03",
    icon: "codesign",
    title: "Hardware–Software Co-Design and FPGA Acceleration",
    description:
      "Optimizing algorithms and hardware together, using FPGA prototypes to implement and evaluate architectural ideas.",
    themes: ["Co-design", "FPGA prototyping", "Evaluation"],
  },
  {
    id: "embedded-ai",
    number: "04",
    icon: "robotics",
    title: "Embedded AI for Robotics and Autonomous Systems",
    description:
      "Exploring how efficient onboard computing can support perception and intelligent behavior under memory, power, and timing constraints.",
    themes: ["Onboard computing", "Perception", "Real-time constraints"],
  },
];
export const projects = [
  {
    id: "hdc",
    number: "01",
    category: "Accelerators",
    kind: "Ongoing research · IIT Bhubaneswar",
    title: "Brain-inspired compute. Hardware-proven.",
    shortTitle: "Streaming HDC accelerator",
    subtitle: "A 1024-bit hyperdimensional computing classifier on Zynq-7020.",
    description:
      "A streaming, synthesizable SystemVerilog accelerator that takes hyperdimensional classification from a Python golden model to measured FPGA performance.",
    visual: "hdc",
    featured: true,
    tags: ["SystemVerilog", "Zynq-7020", "AXI DMA", "Python"],
    metrics: [
      { value: "~177×", label: "faster than ARM" },
      { value: "4.63 μs", label: "latency / window" },
      { value: "~174×", label: "energy efficiency" },
    ],
    challenge:
      "Run a complete hyperdimensional computing classifier efficiently on an FPGA, while keeping its outputs bit-exact with a software reference and sustaining a continuous stream of input windows.",
    approach: [
      "Built a 1024-bit datapath for XOR binding, permutation, bundling, and Hamming-distance / population-count classification in synthesizable SystemVerilog.",
      "Validated hardware outputs against a Python golden model on a Zynq-7020 running at 100 MHz.",
      "Brought up scatter-gather DMA from DDR at approximately 216k windows per second, removing processor copies from each transfer.",
    ],
    result:
      "Measured 493,512 EMG windows: 72.78% classification accuracy, 4.63 μs and 12.0 μJ per window. The ARM baseline measured 818 μs and 2.09 mJ per window—approximately 177× faster and 174× more energy-efficient for this workload.",
    note: "Research with Prof. Srinivas Boppu at IIT Bhubaneswar. Performance comparisons apply to the measured EMG workload and ARM baseline.",
    links: [
      {
        label: "View RTL repository",
        href: "https://github.com/harsha240yeager/hdc-xor-permute-systemverilog",
      },
    ],
  },
  {
    id: "vit-cnn",
    number: "02",
    category: "Accelerators",
    kind: "IEEE HiPC 2024 · DVCon India",
    title: "A faster front end for vision transformers.",
    shortTitle: "Systolic CNN accelerator",
    subtitle: "Custom CNN IP for Vision Transformer feature extraction.",
    description:
      "A 5 × 6 systolic processing array, integrated with a RISC-V host over AXI4. Published at IEEE HiPC and awarded at DVCon India.",
    visual: "systolic",
    tags: ["Verilog", "Kintex-7", "RISC-V", "AXI4"],
    metrics: [
      { value: "116", unit: "GOP/s", label: "throughput" },
      { value: "2.8×", label: "lower stage latency" },
      { value: "200 MHz", label: "frequency" },
    ],
    challenge:
      "Reduce the cost of CNN-based feature extraction in a Vision Transformer pipeline by mapping its compute-intensive stages onto a custom FPGA accelerator.",
    approach: [
      "Designed a 5 × 6 systolic PE array for convolution, pooling, and activation as a custom CNN IP.",
      "Connected the accelerator to a Vega AS1061 RISC-V host over AXI4 on the Genesys 2 Kintex-7 FPGA.",
      "Mapped the Vision Transformer feature-extraction stage onto the array and compared stage latency against software.",
    ],
    result:
      "Achieved 116 GOP/s at 200 MHz and 2.8× lower feature-extraction stage latency versus software, at 2.498 W on Genesys 2. The three-person team earned First Runner-Up at the DVCon India 2024 Design Contest.",
    note: "Published at IEEE HiPC 2024, ROCS Workshop. The speedup describes feature extraction, not the entire Vision Transformer model. Source code is available on request.",
    links: [
      {
        label: "Read the IEEE paper",
        href: "https://ieeexplore.ieee.org/document/10898880",
      },
      {
        label: "Publication DOI",
        href: "https://doi.org/10.1109/HiPCW63042.2024.00016",
      },
    ],
  },
  {
    id: "rv64i",
    number: "03",
    category: "Architecture",
    kind: "LFX mentorship coding challenge",
    title: "Five stages. Every hazard accounted for.",
    shortTitle: "Pipelined RISC-V processor",
    subtitle: "An in-order RV64I + Zba Harvard pipeline.",
    description:
      "A five-stage processor with forwarding, load-use stalls, branch flushes, and a self-checking testbench driven by compiled C.",
    visual: "pipeline",
    tags: ["SystemVerilog", "RV64I + Zba", "Verification"],
    metrics: [
      { value: "5", label: "pipeline stages" },
      { value: "RV64I", label: "+ Zba extension" },
    ],
    challenge:
      "Implement a correct, pipelined RISC-V processor that handles the dependencies and control-flow changes of compiled programs.",
    approach: [
      "Implemented a five-stage, in-order Harvard pipeline in SystemVerilog with RV64I and the Zba address-generation extension.",
      "Added data forwarding, load-use stalls, and branch flushes to resolve pipeline hazards.",
      "Validated behavior using a self-checking testbench driven by compiled C programs.",
    ],
    result:
      "An implemented RV64I + Zba pipeline and verification environment, submitted for the LFX Mentorship coding challenge.",
    note: "Open-source processor project. No frequency or benchmark-throughput claim is made.",
    links: [
      {
        label: "Explore the source",
        href: "https://github.com/harsha240yeager/5-stage-pipelined-RISC-V-RV64I-processor",
      },
    ],
  },
  {
    id: "mac",
    number: "04",
    category: "VLSI",
    kind: "USC · EE477 · #1 team",
    title: "From logic to layout.",
    shortTitle: "Full-custom 16-bit MAC",
    subtitle: "A multiply-accumulate unit, designed down to the transistor.",
    description:
      "Radix-4 Booth encoding, a compressor tree, and a sparse Kogge–Stone adder. Taken through layout and post-extraction timing in Cadence Virtuoso.",
    visual: "layout",
    tags: ["Cadence Virtuoso", "Full-custom", "DRC / LVS"],
    metrics: [
      { value: "16-bit", label: "MAC datapath" },
      { value: "#1", label: "team in EE477" },
    ],
    challenge:
      "Design a full-custom multiply-accumulate unit and balance power, performance, and area through schematic and physical design.",
    approach: [
      "Combined radix-4 Booth encoders, a compressor tree, and a sparse-4 Kogge–Stone carry-lookahead adder.",
      "Completed schematic capture and custom layout in Cadence Virtuoso.",
      "Performed DRC/LVS verification, parasitic extraction, and post-layout timing characterization.",
    ],
    result: "Ranked #1 team in USC’s EE477 MOS VLSI Circuit Design course.",
    note: "Academic team project. The layout illustration is a conceptual drawing, not a foundry layout.",
    links: [],
  },
  {
    id: "branch-prediction",
    number: "05",
    category: "Architecture",
    kind: "USC · EE557 · Fall 2026",
    title: "Predicting the next branch.",
    shortTitle: "Branch prediction with Intel Pin",
    subtitle: "Four predictors, evaluated on 9.70 million branches.",
    description:
      "Instrumented real execution with C++ and Intel Pin to compare always-taken, global, bimodal, and correlated branch predictors.",
    visual: "branches",
    tags: ["C++", "Intel Pin", "Microarchitecture"],
    metrics: [
      { value: "82.1%", label: "correlated accuracy" },
      { value: "9.70M", label: "branches evaluated" },
    ],
    challenge:
      "Measure how branch-history information changes prediction accuracy on the same dynamic instruction stream.",
    approach: [
      "Implemented always-taken, 2-bit global, and 2-bit bimodal predictors indexed by PC[4:0].",
      "Built a 2-bit correlated predictor with a 4-bit global history register and PC[3:0].",
      "Instrumented tar with Intel Pin and evaluated all four predictors over 9.70 million branches.",
    ],
    result:
      "Prediction accuracy on this trace: 74.3% always-taken, 79.3% global, 80.0% bimodal, and 82.1% correlated.",
    note: "EE557 coursework. Accuracy is specific to the measured tar trace and predictor configurations.",
    links: [],
  },
  {
    id: "lenet",
    number: "06",
    category: "Accelerators",
    kind: "USC · EE511 · Fall 2026",
    title: "Less data. More possibility.",
    shortTitle: "LeNet-5 & activation compression",
    subtitle: "Understanding the model before building the accelerator.",
    description:
      "LeNet-5 from primitive PyTorch layers, with a layer-wise compute analysis and PCA/SVD experiments for a smaller hardware footprint.",
    visual: "compression",
    tags: ["PyTorch", "Python", "PCA / SVD"],
    metrics: [
      { value: "99.06%", label: "MNIST test accuracy" },
      { value: "~80%", label: "C5/F6 weight reduction" },
    ],
    challenge:
      "Understand a CNN’s compute and storage requirements, then investigate low-rank compression without a large accuracy penalty.",
    approach: [
      "Implemented LeNet-5 from primitive layers without a model zoo and trained on MNIST and Fashion-MNIST.",
      "Built a layer-wise MAC, parameter, and arithmetic-intensity table.",
      "Implemented PCA/SVD from scratch on activations and evaluated rank-16 SVD on C5/F6.",
    ],
    result:
      "Reached 99.06% test accuracy on MNIST and 89.58% on Fashion-MNIST. Rank-16 SVD reduced approximately 80% of the C5/F6 weights while remaining within one percentage point of the uncompressed baseline.",
    note: "EE511 coursework. Weight reduction applies to C5/F6, not the complete model; these are software experiments, not measured FPGA results.",
    links: [],
  },
];
export const experience = [
  {
    role: "Teaching Assistant",
    company: "University of Southern California",
    shortCompany: "USC",
    period: "Aug 2026 — Present",
    current: true,
    detail: "TAC 348: Making Smart Devices · Prof. Rob Parke",
    description:
      "Helping students turn circuits and code into connected devices. Leading embedded-systems labs and mentoring firmware, sensor integration, wireless communication, and hardware debugging.",
    tags: ["Particle Photon 2", "Embedded systems", "IoT"],
  },
  {
    role: "Research Intern",
    company: "IIT Bhubaneswar",
    shortCompany: "IIT BBS",
    period: "Jan 2026 — Present",
    current: true,
    detail: "Computer architecture · Prof. Srinivas Boppu",
    description:
      "Building and measuring a streaming 1024-bit hyperdimensional computing accelerator—from synthesizable RTL and a Python golden model to FPGA bring-up and scatter-gather DMA.",
    tags: ["SystemVerilog", "HDC", "FPGA"],
  },
  {
    role: "Research Intern",
    company: "VLSI System Design",
    shortCompany: "VSD",
    period: "Apr — May 2024",
    detail: "RISC-V & ASIC design · Kunal Ghosh",
    description:
      "Explored the chip design flow and validated a full-subtractor design on the RISC-V-based VSDSquadron Mini platform.",
    tags: ["RISC-V", "ASIC flow"],
  },
  {
    role: "Summer Research Intern",
    company: "IIT BHU, Varanasi",
    shortCompany: "IIT BHU",
    period: "May — Jul 2023",
    detail: "Embedded hardware & sensing",
    description:
      "Worked with a six-person team on an ESP32 wearable health-monitoring prototype, integrating PPG, ECG, temperature, and gas sensors with wireless telemetry.",
    tags: ["ESP32", "Signal processing"],
  },
];
export const education = [
  {
    school: "University of Southern California",
    degree: "M.S. Electrical & Computer Engineering",
    focus: "VLSI & Computer Architecture",
    period: "2025 — 2027 (expected)",
    coursework: [
      { code: "EE457", title: "Computer Systems Organization" },
      { code: "EE477", title: "MOS VLSI Circuit Design" },
      { code: "EE557", title: "Computer Systems Architecture" },
      { code: "EE511", title: "Machine Learning Hardware Accelerators" },
    ],
  },
  {
    school: "JNTU Hyderabad",
    degree: "B.Tech. Electrical & Electronics Engineering",
    period: "2021 — 2025",
    coursework: [],
  },
];
export const skills = [
  {
    number: "01",
    group: "Architecture & design",
    items: [
      "RISC-V",
      "Microarchitecture",
      "Systolic arrays",
      "Branch prediction",
      "AMBA AXI4",
      "GPU architecture",
    ],
  },
  {
    number: "02",
    group: "RTL & verification",
    items: [
      "Verilog",
      "SystemVerilog",
      "QuestaSim",
      "ModelSim",
      "Vivado",
      "Vitis HLS",
    ],
  },
  {
    number: "03",
    group: "Software & modeling",
    items: [
      "C / C++",
      "Python",
      "CUDA",
      "PyTorch",
      "NumPy",
      "Intel Pin",
      "TCL",
    ],
  },
  {
    number: "04",
    group: "Silicon & systems",
    items: [
      "Cadence Virtuoso",
      "DRC / LVS",
      "Full-custom VLSI",
      "Zynq-7020",
      "Kintex-7",
      "Linux / Git",
    ],
  },
];
export const publications = [
  {
    title:
      "Efficient Feature Extraction for ViT Model using Custom CNN Accelerator",
    venue: "IEEE HiPC 2024 · ROCS Workshop",
    date: "December 2024",
    description:
      "Custom CNN acceleration for the feature-extraction stage of a Vision Transformer pipeline.",
    doi: "10.1109/HiPCW63042.2024.00016",
    link: "https://ieeexplore.ieee.org/document/10898880",
  },
];
export const recognition = [
  {
    title: "First Runner-Up",
    organization: "DVCon India 2024",
    description: "Design contest · CNN accelerator · Team of 3",
    year: "2024",
  },
  {
    title: "#1 course team",
    organization: "USC · EE477",
    description: "MOS VLSI Circuit Design · Full-custom MAC",
    year: "2025",
  },
];
export const certifications = [
  {
    name: "SystemVerilog for Design and Verification",
    issuer: "Cadence · v25.03",
    year: "Apr 2026",
    link: "https://www.credly.com/badges/ca72d8e8-ae25-4b64-85f1-7ef5c7532ec2/linked_in_profile",
  },
  {
    name: "Essential SystemVerilog for UVM",
    issuer: "Cadence",
    year: "May 2026",
  },
  {
    name: "Analog Circuits · Elite",
    issuer: "NPTEL · IIT Bombay",
    year: "2023",
    link: "/credentials/nptel-analog-circuits.png",
  },
  {
    name: "MATLAB Onramp",
    issuer: "MathWorks",
    year: "2023",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=f8c9a0f1-314f-44de-b478-b73048e61a47",
  },
  {
    name: "MATLAB App Designer Onramp",
    issuer: "MathWorks",
    year: "2023",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=4d0b56ca-fa08-40f0-8c1c-d3a2691bf3f8",
  },
];

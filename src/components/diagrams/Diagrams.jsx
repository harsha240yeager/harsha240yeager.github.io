// Inline SVG architecture diagrams for the projects.
// Designed to look like clean academic block diagrams — annotated, on-theme.

const VIOLET = '#a78bfa';
const VIOLET_DEEP = '#6d28d9';
const CYAN = '#67e8f9';
const TEXT = '#e5e7eb';
const SUBTLE = 'rgba(255,255,255,0.18)';
const FILL = 'rgba(139, 92, 246, 0.08)';

function Block({ x, y, w, h, label, sub, stroke = VIOLET, fill = FILL, textColor = TEXT, dashed = false }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        ry={6}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.2}
        strokeDasharray={dashed ? '4 4' : '0'}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize={11}
        fontWeight={600}
        fill={textColor}
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 11}
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize={8.5}
          fill="rgba(255,255,255,0.55)"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, label, color = SUBTLE, strokeWidth = 1.2, dashed = false }) {
  return (
    <g>
      <defs>
        <marker
          id={`arrow-${color.replace(/[^a-z0-9]/gi, '')}`}
          viewBox="0 0 10 10"
          refX={9}
          refY={5}
          markerWidth={6}
          markerHeight={6}
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={color} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? '4 3' : '0'}
        markerEnd={`url(#arrow-${color.replace(/[^a-z0-9]/gi, '')})`}
      />
      {label ? (
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 4}
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize={8.5}
          fill="rgba(255,255,255,0.55)"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

export function PipelineDiagram() {
  const stages = ['IF', 'ID', 'EX', 'MEM', 'WB'];
  const W = 64;
  const H = 38;
  const gap = 18;
  const startX = 36;
  const y = 60;
  return (
    <svg viewBox="0 0 480 230" className="w-full h-auto">
      <text x={20} y={22} fontFamily="JetBrains Mono, monospace" fontSize={10} fill={CYAN}>
        // 5-stage pipeline · RV64I + Zba
      </text>

      {stages.map((s, i) => {
        const x = startX + i * (W + gap);
        return (
          <g key={s}>
            <Block x={x} y={y} w={W} h={H} label={s} stroke={VIOLET} />
            {i < stages.length - 1 ? (
              <Arrow x1={x + W} y1={y + H / 2} x2={x + W + gap} y2={y + H / 2} color={VIOLET} />
            ) : null}
          </g>
        );
      })}

      {/* Forwarding paths (back-arrows) */}
      <path
        d={`M ${startX + 4 * (W + gap) + W / 2} ${y - 6} C ${startX + 3 * (W + gap)} ${y - 38}, ${startX + 2 * (W + gap)} ${y - 38}, ${startX + 2 * (W + gap) + W / 2} ${y - 6}`}
        fill="none"
        stroke={CYAN}
        strokeWidth={1.2}
        strokeDasharray="4 3"
        markerEnd={`url(#arrow-${CYAN.replace(/[^a-z0-9]/gi, '')})`}
      />
      <text
        x={startX + 3 * (W + gap)}
        y={y - 30}
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize={9}
        fill={CYAN}
      >
        forwarding (FU / FU_Br)
      </text>

      {/* Hazard / Control logic blocks */}
      <Block x={36} y={150} w={120} h={32} label="Hazard Detection Unit" sub="HDU + load-use stall" stroke={CYAN} />
      <Block x={170} y={150} w={130} h={32} label="Branch Resolution" sub="early-branch + HDU_Br" stroke={CYAN} />
      <Block x={314} y={150} w={120} h={32} label="Self-checking TB" sub="SVA + ModelSim" stroke={CYAN} />

      {/* Connectors */}
      <Arrow x1={startX + W / 2 + 12} y1={y + H} x2={startX + 36} y2={150} color={SUBTLE} />
      <Arrow x1={startX + 2 * (W + gap)} y1={y + H} x2={startX + 2 * (W + gap)} y2={150} color={SUBTLE} />

      <text x={20} y={210} fontFamily="JetBrains Mono, monospace" fontSize={9} fill="rgba(255,255,255,0.45)">
        Verified with directed + corner-case testbenches · ModelSim waveform analysis
      </text>
    </svg>
  );
}

export function CNNAcceleratorDiagram() {
  return (
    <svg viewBox="0 0 480 230" className="w-full h-auto">
      <text x={20} y={22} fontFamily="JetBrains Mono, monospace" fontSize={10} fill={CYAN}>
        // CNN accelerator IP · LeNet-5 · Genesys 2 · 116 GOP/s
      </text>

      {/* Host / RISC-V */}
      <Block x={20} y={50} w={110} h={48} label="Vega AS1061" sub="RISC-V softcore" stroke={VIOLET} />

      {/* AXI4 bus */}
      <Arrow x1={130} y1={74} x2={170} y2={74} color={CYAN} label="AXI4" />

      {/* Accelerator container */}
      <rect x={170} y={42} width={290} height={150} rx={8} ry={8} fill="rgba(34,211,238,0.04)" stroke={SUBTLE} />
      <text x={180} y={56} fontFamily="JetBrains Mono, monospace" fontSize={9} fill={CYAN}>
        custom CNN accelerator IP (Verilog)
      </text>

      {/* Pipeline: Conv → Pool → Activation */}
      <Block x={185} y={68} w={64} h={36} label="Conv" sub="3×3 / 5×5" />
      <Arrow x1={249} y1={86} x2={262} y2={86} color={VIOLET} />
      <Block x={263} y={68} w={64} h={36} label="Pool" sub="2×2 max" />
      <Arrow x1={327} y1={86} x2={340} y2={86} color={VIOLET} />
      <Block x={341} y={68} w={100} h={36} label="Activation" sub="ReLU / sigmoid" />

      {/* Systolic array */}
      <rect x={185} y={120} width={256} height={56} rx={6} fill={FILL} stroke={VIOLET} />
      <text x={313} y={138} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={11} fontWeight={600} fill={TEXT}>
        5 × 6 Systolic PE Array
      </text>
      {/* PE grid */}
      {Array.from({ length: 5 }).map((_, c) =>
        Array.from({ length: 3 }).map((_, r) => (
          <rect
            key={`${c}-${r}`}
            x={200 + c * 16}
            y={148 + r * 8}
            width={8}
            height={5}
            rx={1}
            fill="rgba(167,139,250,0.65)"
          />
        ))
      )}
      <text x={420} y={170} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize={8.5} fill="rgba(255,255,255,0.55)">
        weight + activation flow
      </text>

      {/* FPGA label */}
      <Block x={185} y={196} w={256} h={26} label="Genesys 2 · Kintex-7 XC7K325T-2FFG900C" stroke={SUBTLE} fill="transparent" textColor="rgba(255,255,255,0.65)" />
    </svg>
  );
}

export function MACDiagram() {
  return (
    <svg viewBox="0 0 480 230" className="w-full h-auto">
      <text x={20} y={22} fontFamily="JetBrains Mono, monospace" fontSize={10} fill={CYAN}>
        // 16-bit MAC · full-custom · ~833 MHz · 577 µW
      </text>

      <Block x={40} y={48} w={70} h={32} label="A [15:0]" stroke={VIOLET} fill="transparent" />
      <Block x={130} y={48} w={70} h={32} label="B [15:0]" stroke={VIOLET} fill="transparent" />

      <Arrow x1={75} y1={80} x2={120} y2={104} color={VIOLET} />
      <Arrow x1={165} y1={80} x2={120} y2={104} color={VIOLET} />

      <Block x={45} y={104} w={150} h={36} label="Radix-4 Booth Encoder" sub="signed partial products" stroke={VIOLET} />

      <Arrow x1={120} y1={140} x2={120} y2={158} color={VIOLET} />

      <Block x={45} y={158} w={150} h={36} label="Compressor Tree" sub="3:2 + 6:2 stages" stroke={VIOLET} />

      <Arrow x1={195} y1={176} x2={230} y2={176} color={VIOLET} />

      <Block x={230} y={158} w={155} h={36} label="Sparse-4 Kogge-Stone CLA" sub="prefix carry-lookahead" stroke={CYAN} />

      <Arrow x1={307} y1={158} x2={307} y2={140} color={VIOLET} />

      <Block x={232} y={104} w={150} h={36} label="Accumulator Reg" sub="DFF + clk-gating" stroke={VIOLET} />

      <Arrow x1={307} y1={104} x2={307} y2={86} color={VIOLET} />

      <Block x={232} y={50} w={150} h={32} label="Sum [31:0]" stroke={CYAN} fill="transparent" />

      <text x={395} y={120} fontFamily="JetBrains Mono, monospace" fontSize={9} fill="rgba(255,255,255,0.55)">
        post-layout
      </text>
      <text x={395} y={134} fontFamily="JetBrains Mono, monospace" fontSize={9} fill="rgba(255,255,255,0.55)">
        DRC ✓ LVS ✓ RCX
      </text>
      <text x={395} y={148} fontFamily="JetBrains Mono, monospace" fontSize={9} fill="rgba(255,255,255,0.55)">
        Cadence Virtuoso
      </text>
    </svg>
  );
}

export function HDCDiagram() {
  return (
    <svg viewBox="0 0 480 230" className="w-full h-auto">
      <text x={20} y={22} fontFamily="JetBrains Mono, monospace" fontSize={10} fill={CYAN}>
        // 1024-bit HDC pipeline · XOR + permute · valid/ready
      </text>

      <Block x={20} y={48} w={110} h={36} label="Hypervector A" sub="1024 bits" stroke={VIOLET} />
      <Block x={20} y={92} w={110} h={36} label="Hypervector B" sub="1024 bits" stroke={VIOLET} />

      <Arrow x1={130} y1={66} x2={166} y2={86} color={VIOLET} />
      <Arrow x1={130} y1={110} x2={166} y2={86} color={VIOLET} />

      <Block x={166} y={68} w={86} h={36} label="XOR" sub="bitwise" stroke={CYAN} />
      <Arrow x1={252} y1={86} x2={282} y2={86} color={VIOLET} />

      <Block x={282} y={48} w={170} h={84} label="Permute Unit" stroke={CYAN} />
      {/* Three modes */}
      <text x={367} y={72} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={8.5} fill="rgba(231,231,255,0.85)">
        word-reverse
      </text>
      <text x={367} y={94} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={8.5} fill="rgba(231,231,255,0.85)">
        per-word rotate
      </text>
      <text x={367} y={116} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={8.5} fill="rgba(231,231,255,0.85)">
        full-vector rotate
      </text>

      <Arrow x1={367} y1={132} x2={367} y2={154} color={VIOLET} />

      <Block x={282} y={154} w={170} h={36} label="Pipeline Reg → Output" sub="valid / ready handshake" stroke={VIOLET} />

      {/* Param annotation */}
      <Block x={20} y={154} w={216} h={36} label="WORDS × BITS_PER_WORD" sub="parameterized · synthesizable" stroke={SUBTLE} fill="transparent" textColor="rgba(255,255,255,0.65)" dashed />

      <text x={20} y={210} fontFamily="JetBrains Mono, monospace" fontSize={9} fill="rgba(255,255,255,0.45)">
        Self-checking SystemVerilog TB · golden-model verification · backpressure stall coverage
      </text>
    </svg>
  );
}

export function Diagram({ kind }) {
  switch (kind) {
    case 'Pipeline':
      return <PipelineDiagram />;
    case 'CNNAccelerator':
      return <CNNAcceleratorDiagram />;
    case 'MAC':
      return <MACDiagram />;
    case 'HDC':
      return <HDCDiagram />;
    default:
      return null;
  }
}

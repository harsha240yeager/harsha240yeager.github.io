import { useId } from "react";

export default function ProjectArtwork({ type }) {
  const gridId = useId();
  return (
    <svg
      viewBox="0 0 600 290"
      className={"project-art art-" + type}
      role="img"
      aria-label={labels[type]}
    >
      <defs>
        <pattern
          id={gridId}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0H0V24"
            fill="none"
            stroke="currentColor"
            strokeWidth=".5"
            opacity=".13"
          />
        </pattern>
      </defs>
      <rect width="600" height="290" fill={"url(#" + gridId + ")"} />
      {type === "hdc" && (
        <g>
          <g
            className="flow-lines"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity=".5"
          >
            <path d="M45 146h510M110 81v130M490 81v130" />
            {[0, 1, 2].map((i) => (
              <path key={i} d={`M70 ${95 + i * 50}h40M490 ${95 + i * 50}h40`} />
            ))}
          </g>
          {[
            ["BIND", "XOR"],
            ["PERMUTE", "ROT"],
            ["BUNDLE", "Σ"],
            ["128-BIT AM", "HAM"],
          ].map(([label, op], i) => (
            <g key={label} transform={`translate(${128 + i * 91} 100)`}>
              <rect
                width="74"
                height="92"
                rx="3"
                fill={i === 1 ? "#d8ebaa" : "#283d34"}
                stroke="#8da989"
                strokeWidth=".7"
              />
              <text
                x="37"
                y="44"
                textAnchor="middle"
                fill={i === 1 ? "#243b30" : "#d8ebaa"}
                fontSize="22"
                fontFamily="monospace"
              >
                {op}
              </text>
              <text
                x="37"
                y="71"
                textAnchor="middle"
                fill={i === 1 ? "#243b30" : "#b9c8b7"}
                fontSize="8"
                fontFamily="monospace"
              >
                {label}
              </text>
            </g>
          ))}
          <text
            x="300"
            y="65"
            textAnchor="middle"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="2"
          >
            1024-BIT ENCODER → 128-BIT ASSOCIATIVE MEMORY
          </text>
          <text
            x="300"
            y="239"
            textAnchor="middle"
            fontSize="10"
            fontFamily="monospace"
          >
            DDR → DMA → SELECTED BIT POSITIONS → CLASSIFICATION
          </text>
        </g>
      )}
      {type === "systolic" && (
        <g transform="translate(165 34)">
          {Array.from({ length: 30 }, (_, i) => (
            <g
              key={i}
              transform={`translate(${(i % 6) * 47} ${Math.floor(i / 6) * 43})`}
            >
              <path d="M-12 17H46M17-10V44" stroke="#bd926c" strokeWidth="1" />
              <rect
                width="34"
                height="34"
                rx="2"
                fill={(i + Math.floor(i / 6)) % 4 === 0 ? "#b6502d" : "#f1dec6"}
                stroke="#bd926c"
              />
              <text
                x="17"
                y="22"
                textAnchor="middle"
                fontSize="9"
                fontFamily="monospace"
                fill={(i + Math.floor(i / 6)) % 4 === 0 ? "#fff6e8" : "#805b43"}
              >
                PE
              </text>
            </g>
          ))}
          <text
            x="-34"
            y="117"
            transform="rotate(-90 -34 117)"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="2"
          >
            ACTIVATIONS →
          </text>
          <text
            x="125"
            y="244"
            textAnchor="middle"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="2"
          >
            5 × 6 SYSTOLIC ARRAY
          </text>
        </g>
      )}
      {type === "pipeline" && (
        <g>
          <path
            d="M60 140H540M120 169v51H395v-51M210 169v34H480v-34"
            fill="none"
            stroke="#7b8f9e"
          />
          {["IF", "ID", "EX", "MEM", "WB"].map((stage, i) => (
            <g key={stage}>
              <rect
                x={62 + i * 98}
                y="105"
                width="82"
                height="66"
                rx="3"
                fill={i === 2 ? "#44667a" : "#e8eef0"}
                stroke="#8298a5"
              />
              <text
                x={103 + i * 98}
                y="143"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="18"
                fill={i === 2 ? "#fff" : "#3f5e70"}
              >
                {stage}
              </text>
            </g>
          ))}
          <text
            x="300"
            y="66"
            textAnchor="middle"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="2"
          >
            RV64I + Zba
          </text>
          <text
            x="300"
            y="252"
            textAnchor="middle"
            fontSize="9"
            fontFamily="monospace"
            letterSpacing="2"
          >
            FORWARDING / STALL / FLUSH
          </text>
        </g>
      )}
      {type === "layout" && (
        <g transform="translate(152 29)">
          <rect width="296" height="230" fill="#30372f" stroke="#8c9b79" />
          {Array.from({ length: 13 }, (_, i) => (
            <g key={i}>
              <path
                d={`M8 ${12 + i * 17}H288`}
                stroke={i % 3 === 0 ? "#cda874" : "#648477"}
                strokeWidth={i % 3 === 0 ? 3 : 1}
              />
              {Array.from({ length: 10 }, (_, j) => (
                <rect
                  key={j}
                  x={12 + j * 28}
                  y={17 + i * 15}
                  width={j % 3 === 0 ? 17 : 10}
                  height="8"
                  fill="none"
                  stroke={j % 2 ? "#ab9263" : "#8a9c7b"}
                  strokeWidth="1"
                />
              ))}
            </g>
          ))}
          <path
            d="M70 8V222M140 8V222M224 8V222"
            stroke="#b18466"
            strokeWidth="3"
            opacity=".8"
          />
          <text
            x="148"
            y="248"
            textAnchor="middle"
            fontSize="8"
            fontFamily="monospace"
          >
            CONCEPTUAL FLOORPLAN · 16-BIT MAC
          </text>
        </g>
      )}
      {type === "branches" && (
        <g>
          {[
            ["Always-taken", 74.3],
            ["Global", 79.3],
            ["Bimodal", 80],
            ["Correlated", 82.1],
          ].map(([name, value], i) => (
            <g key={name}>
              <text
                x="159"
                y={68 + i * 49}
                textAnchor="end"
                fontFamily="monospace"
                fontSize="11"
              >
                {name}
              </text>
              <rect
                x="179"
                y={51 + i * 49}
                width={value * 3.6}
                height="25"
                rx="1"
                fill={i === 3 ? "#b54d31" : "#ccb7a8"}
              />
              <text
                x={190 + value * 3.6}
                y={68 + i * 49}
                fontFamily="monospace"
                fontSize="11"
              >
                {value.toFixed(1)}%
              </text>
            </g>
          ))}
          <text
            x="300"
            y="265"
            textAnchor="middle"
            fontSize="9"
            fontFamily="monospace"
          >
            PREDICTION ACCURACY · tar · 9.70M BRANCHES · AXIS: 0–100%
          </text>
        </g>
      )}
      {type === "compression" && (
        <g>
          {Array.from({ length: 64 }, (_, i) => (
            <rect
              key={i}
              x={110 + (i % 8) * 20}
              y={53 + Math.floor(i / 8) * 20}
              width="15"
              height="15"
              fill={(i * 7) % 5 < 2 ? "#657a61" : "#acb9a1"}
            />
          ))}
          <path
            d="M300 131h49m-9-9 12 9-12 9"
            stroke="#66725f"
            fill="none"
            strokeWidth="2"
          />
          {Array.from({ length: 16 }, (_, i) => (
            <rect
              key={i}
              x={390 + (i % 2) * 20}
              y={53 + Math.floor(i / 2) * 20}
              width="15"
              height="15"
              fill={i % 3 === 0 ? "#536e4c" : "#a6b894"}
            />
          ))}
          <text
            x="185"
            y="244"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
          >
            DENSE WEIGHTS
          </text>
          <text
            x="410"
            y="244"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="10"
          >
            LOW RANK
          </text>
          <text
            x="300"
            y="279"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="8"
          >
            CONCEPTUAL COMPRESSION VIEW
          </text>
        </g>
      )}
    </svg>
  );
}
const labels = {
  hdc: "Conceptual HDC pipeline from a 1024-bit encoder to a 128-bit associative memory",
  systolic: "Five by six systolic processing-element array",
  pipeline: "Five-stage RISC-V pipeline with forwarding paths",
  layout: "Conceptual full-custom MAC floorplan",
  branches:
    "Branch prediction accuracy: always-taken 74.3%, global 79.3%, bimodal 80%, correlated 82.1%",
  compression:
    "Conceptual reduction from dense weights to a low-rank representation",
};

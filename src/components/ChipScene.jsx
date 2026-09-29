import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
const modes = [
  {
    label: "Architecture",
    caption: "Find the right dataflow.",
    detail: "COMPUTE / MEMORY / INTERCONNECT",
  },
  {
    label: "RTL",
    caption: "Make every cycle count.",
    detail: "DESIGN / SIMULATE / VERIFY",
  },
  {
    label: "Silicon",
    caption: "Bring the bits to life.",
    detail: "LAYOUT / TIMING / HARDWARE",
  },
];
export default function ChipScene() {
  const [mode, setMode] = useState(0);
  return (
    <div className={`chip-scene chip-mode-${mode}`}>
      <div className="scene-top mono">
        <span>
          <span className="tiny-cross">+</span> THE ENGINEERING STACK
        </span>
        <span>FIG. 0{mode + 1}</span>
      </div>
      <svg
        className="chip-art"
        viewBox="0 0 560 425"
        role="img"
        aria-label={`Conceptual ${modes[mode].label.toLowerCase()} illustration of a layered processor with compute blocks and circuit traces`}
      >
        <defs>
          <pattern
            id="scene-grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0H0V30"
              fill="none"
              stroke="#2c302b"
              strokeWidth=".5"
              opacity=".14"
            />
          </pattern>
          <pattern
            id="die-grid"
            width="13"
            height="13"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M13 0H0V13"
              fill="none"
              stroke="#e7b093"
              strokeWidth=".6"
              opacity=".45"
            />
          </pattern>
          <linearGradient id="chip-side" x2="0" y2="1">
            <stop stopColor="#343c35" />
            <stop offset="1" stopColor="#151e18" />
          </linearGradient>
          <linearGradient id="die-fill" x2="1" y2="1">
            <stop stopColor="#e77848" />
            <stop offset="1" stopColor="#b54425" />
          </linearGradient>
          <filter id="chip-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="13" />
          </filter>
        </defs>
        <rect width="560" height="425" fill="url(#scene-grid)" />
        <ellipse
          cx="280"
          cy="326"
          rx="167"
          ry="41"
          fill="#26352a"
          opacity=".16"
          filter="url(#chip-shadow)"
        />
        <g fill="none" stroke="#7c8d79" strokeWidth="1" opacity=".65">
          <path d="M42 264h73l61-35M76 300h62l59-36M355 273l57 31h100M375 250l56 31h52M286 94V48h109M164 146l-58-34H44M371 132l58-33h74" />
          <circle cx="42" cy="264" r="3" />
          <circle cx="76" cy="300" r="3" />
          <circle cx="512" cy="304" r="3" />
          <circle cx="44" cy="112" r="3" />
          <circle cx="503" cy="99" r="3" />
        </g>
        <g className="chip-base">
          <path
            d="M100 214 280 114 460 214 460 237 280 340 100 237Z"
            fill="#526454"
          />
          <path
            d="M100 214 280 315 460 214 280 114Z"
            fill="#7c927c"
            stroke="#526454"
          />
          <path d="M100 214 280 315 280 340 100 237Z" fill="#4d6251" />
          <path d="M280 315 460 214V237L280 340Z" fill="#354d3d" />
          {Array.from({ length: 12 }, (_, i) => (
            <g key={i} stroke="#e4d8b7" strokeWidth="4">
              <path d={`M${116 + i * 13} ${237 + i * 7.3}v12`} />
              <path d={`M${301 + i * 13} ${325 - i * 7.3}v-12`} />
            </g>
          ))}
          <path
            d="M119 211 280 122 442 212 280 304Z"
            fill="none"
            stroke="#b7c9a4"
            strokeDasharray="3 5"
          />
        </g>
        <g className="chip-package">
          <path
            d="M148 178 280 105 413 179V211L280 285 148 211Z"
            fill="url(#chip-side)"
            stroke="#17251b"
          />
          <path
            d="M148 178 280 252 413 179 280 105Z"
            fill="#3a453b"
            stroke="#8b9480"
          />
          <path
            d="M163 178 280 113 397 179 280 244Z"
            fill="none"
            stroke="#73816d"
            strokeWidth=".8"
          />
          {Array.from({ length: 9 }, (_, i) => (
            <g key={i} fill="none" stroke="#b4ad86" strokeWidth="1.5">
              <path d={`M${157 + i * 13} ${188 + i * 7.3}v13l-12 7`} />
              <path d={`M${291 + i * 13} ${245 - i * 7.3}v13l13 7`} />
            </g>
          ))}
        </g>
        <g className="chip-die">
          <path
            d="M193 154 280 106 367 154V169L280 217 193 169Z"
            fill="#843e27"
          />
          <path
            d="M193 154 280 203 367 154 280 106Z"
            fill="url(#die-fill)"
            stroke="#f0b490"
          />
          <g transform="matrix(.87 .49 -.87 .49 280 108)">
            <rect width="98" height="98" fill="url(#die-grid)" />
            <g
              className="compute-blocks"
              fill="#f1b488"
              stroke="#fae0ba"
              strokeWidth=".7"
            >
              <rect x="10" y="10" width="32" height="32" />
              <rect x="48" y="10" width="32" height="32" />
              <rect x="10" y="48" width="32" height="32" />
              <rect x="48" y="48" width="32" height="32" />
            </g>
            <g fill="#cb6b3e">
              {[0, 1, 2, 3].map((i) => (
                <g
                  key={i}
                  transform={`translate(${(i % 2) * 38} ${Math.floor(i / 2) * 38})`}
                >
                  <rect x="15" y="15" width="22" height="3" />
                  <rect x="15" y="21" width="22" height="3" />
                  <rect x="15" y="27" width="22" height="3" />
                  <rect x="15" y="33" width="22" height="3" />
                </g>
              ))}
            </g>
          </g>
        </g>
        <g
          className="scene-callouts"
          fontFamily="monospace"
          fontSize="9"
          fill="#55614f"
        >
          <path d="M335 131l47-40h86" fill="none" stroke="#a56743" />
          <circle cx="335" cy="131" r="2.5" fill="#c85831" />
          <text x="388" y="82">
            COMPUTE CORE
          </text>
          <path d="M179 198l-49-41H46" fill="none" stroke="#7e8971" />
          <text x="46" y="148">
            INTERCONNECT
          </text>
          <path d="M356 293l47 51h91" fill="none" stroke="#7e8971" />
          <text x="410" y="359">
            SUBSTRATE
          </text>
          <text x="26" y="391" fontSize="8">
            CONCEPTUAL VIEW · NOT TO SCALE
          </text>
          <text x="490" y="391" fontSize="11">
            ↗
          </text>
        </g>
      </svg>
      <div className="scene-caption" aria-live="polite">
        <div>
          <span className="eyebrow">{modes[mode].detail}</span>
          <p>{modes[mode].caption}</p>
        </div>
        <ArrowUpRight size={25} strokeWidth={1} />
      </div>
      <div
        className="scene-tabs"
        role="group"
        aria-label="Explore the engineering stack"
      >
        {modes.map((item, i) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={mode === i}
            onClick={() => setMode(i)}
          >
            <span>0{i + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

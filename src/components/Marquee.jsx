import { TOOLS } from "../data/portfolioData";

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: "1px solid #111",
        borderBottom: "1px solid #111",
        padding: "1.2rem 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-track">
        {[...TOOLS, ...TOOLS, ...TOOLS, ...TOOLS].map(
          (tool, index) => (
            <span
              key={index}
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#333",
              }}
            >
              {tool}
              <span
                style={{
                  color: "#c8f65d",
                  margin: "0 1.5rem",
                }}
              >
                ·
              </span>
            </span>
          )
        )}
      </div>
    </div>
  );
}
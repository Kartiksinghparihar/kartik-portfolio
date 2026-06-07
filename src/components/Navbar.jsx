import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({
  active,
  setActive,
}) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(5,5,7,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #111",
      }}
    >
      {/* Logo */}
      <div>
        <h2
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          Kartik
          <span
            style={{
              color: "#c8f65d",
            }}
          >
            .
          </span>
        </h2>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {NAV_LINKS.map((item) => (
          <button
            key={item}
            className={`nav-link ${
              active === item
                ? "active"
                : ""
            }`}
            onClick={() => {
              setActive(item);

              document
                .getElementById(
                  item.toLowerCase()
                )
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Social Links */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/Kartiksinghparihar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#888",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kartik-singh-parihar-973518329"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#888",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/u/Kartik_leetcodee01/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#888",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          LeetCode
        </a>

        <button
          className="cta-btn"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
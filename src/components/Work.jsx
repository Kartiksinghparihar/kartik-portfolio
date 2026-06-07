import { PROJECTS } from "../data/portfolioData";

export default function Work({
  hovered,
  setHovered,
}) {
  return (
    <section
      id="work"
      className="section"
      style={{
        padding: "5rem 4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#444",
              marginBottom: "1rem",
            }}
          >
            Selected Work
          </div>

          <h2
            style={{
              fontFamily:
                "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize:
                "clamp(32px, 5vw, 52px)",
              fontWeight: 400,
              color: "#e8e8e0",
            }}
          >
            Projects that matter
          </h2>
        </div>

        <span
          style={{
            fontSize: "12px",
            color: "#333",
          }}
        >
          2024 — 2025
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1px",
        }}
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="proj-card"
            style={{
              background:
                hovered === project.id
                  ? "#080808"
                  : "transparent",
            }}
            onMouseEnter={() =>
              setHovered(project.id)
            }
            onMouseLeave={() =>
              setHovered(null)
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "3rem",
              }}
            >
              <span
                style={{
                  fontFamily:
                    "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "#222",
                  minWidth: "28px",
                }}
              >
                {project.num}
              </span>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems:
                      "flex-start",
                    marginBottom:
                      "1rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize:
                          "clamp(20px,2.5vw,26px)",
                        fontWeight: 400,
                        color:
                          hovered ===
                          project.id
                            ? "#fff"
                            : "#ccc",
                        transition:
                          "color 0.3s",
                      }}
                    >
                      {project.title}
                    </h3>

                    <div
                      style={{
                        display:
                          "flex",
                        gap: "8px",
                        marginTop:
                          "8px",
                        flexWrap:
                          "wrap",
                      }}
                    >
                      {project.tech.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="tag"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign:
                        "right",
                    }}
                  >
                    <div
                      style={{
                        fontSize:
                          "11px",
                        color: "#333",
                        textTransform:
                          "uppercase",
                      }}
                    >
                      {
                        project.category
                      }
                    </div>

                    <div
                      style={{
                        fontSize:
                          "11px",
                        color: "#222",
                        marginTop:
                          "4px",
                      }}
                    >
                      {project.year}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize:
                      "14px",
                    color: "#444",
                    lineHeight: 1.7,
                    maxWidth:
                      "650px",
                  }}
                >
                  {
                    project.description
                  }
                </p>

                {hovered ===
                  project.id && (
                  <div
                    style={{
                      marginTop:
                        "1.5rem",
                      display:
                        "flex",
                      alignItems:
                        "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize:
                          "12px",
                        color:
                          project.accent,
                        textTransform:
                          "uppercase",
                        letterSpacing:
                          "0.08em",
                      }}
                    >
                      View Project
                    </span>

                    <span
                      style={{
                        color:
                          project.accent,
                        fontSize:
                          "16px",
                      }}
                    >
                      →
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
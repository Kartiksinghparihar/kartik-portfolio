import {
  SKILLS,
  TOOLS,
} from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "5rem 4rem",
        borderTop: "1px solid #0f0f0f",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
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
            Skills & Expertise
          </div>

          <h2
            style={{
              fontFamily:
                "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize:
                "clamp(28px,4vw,44px)",
              fontWeight: 400,
              color: "#e8e8e0",
              lineHeight: 1.2,
              marginBottom: "2rem",
            }}
          >
            Learning, Building
            <br />
            & Growing Every Day
          </h2>

          <p
            style={{
              fontSize: "14px",
              color: "#555",
              lineHeight: 1.8,
              maxWidth: "420px",
            }}
          >
            As a B.Tech IoT student at MITS Gwalior,
            I focus on Data Science, DSA,
            Databases, IoT Systems and Modern Web
            Development. I enjoy building projects
            that combine software engineering and
            real-world problem solving.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "#ccc",
                    fontSize: "14px",
                  }}
                >
                  {skill.name}
                </span>

                <span
                  style={{
                    color: "#555",
                    fontSize: "12px",
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid #111",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {TOOLS.map((tool) => (
          <span
            key={tool}
            style={{
              padding: "10px 18px",
              border: "1px solid #1a1a1a",
              borderRadius: "50px",
              color: "#666",
              fontSize: "12px",
              letterSpacing: "0.06em",
            }}
          >
            {tool}
          </span>
        ))}
      </div>

      <div
        style={{
          marginTop: "4rem",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "1.5rem",
        }}
      >
        <div className="proj-card">
          <h3
            style={{
              color: "#c8f65d",
              marginBottom: "10px",
            }}
          >
            30+
          </h3>

          <p
            style={{
              color: "#666",
            }}
          >
            LeetCode Problems Solved
          </p>
        </div>

        <div className="proj-card">
          <h3
            style={{
              color: "#c8f65d",
              marginBottom: "10px",
            }}
          >
            4
          </h3>

          <p
            style={{
              color: "#666",
            }}
          >
            Major Academic Projects
          </p>
        </div>

        <div className="proj-card">
          <h3
            style={{
              color: "#c8f65d",
              marginBottom: "10px",
            }}
          >
            7.5
          </h3>

          <p
            style={{
              color: "#666",
            }}
          >
            Current CGPA
          </p>
        </div>
      </div>
    </section>
  );
}
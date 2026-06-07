export default function About() {
  return (
    <section
      id="about-details"
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
          alignItems: "center",
        }}
      >
        {/* Photo */}
        <div
          style={{
            position: "relative",
            maxWidth: "450px",
            margin: "0 auto",
          }}
        >
          <img
            src="/kartik.jpeg"
            alt="Kartik Singh Parihar"
            style={{
              width: "100%",
              borderRadius: "12px",
              border: "1px solid #222",
              display: "block",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "15px",
              background: "rgba(0,0,0,0.8)",
              padding: "10px 15px",
              borderRadius: "8px",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                color: "#c8f65d",
                fontWeight: "600",
              }}
            >
              Kartik Singh Parihar
            </div>

            <div
              style={{
                fontSize: "12px",
                color: "#aaa",
              }}
            >
              Software Developer
            </div>
          </div>
        </div>

        {/* About Content */}
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
            About Me
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 400,
              color: "#e8e8e0",
              lineHeight: 1.2,
              marginBottom: "2rem",
            }}
          >
            Building digital solutions
            <br />
            with creativity & code.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.8,
              }}
            >
              I'm Kartik Singh Parihar, a Computer Science student and
              software developer passionate about building modern web
              applications and solving real-world problems through code.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.8,
              }}
            >
              My interests include React, Full-Stack Development,
              Data Structures & Algorithms, and Artificial Intelligence.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.8,
              }}
            >
              I enjoy creating clean user experiences, learning new
              technologies, and continuously improving my development
              skills through projects and problem-solving.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#c8f65d",
                  fontWeight: 500,
                }}
              >
                B.Tech
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#333",
                  marginTop: "2px",
                }}
              >
                Computer Science
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#c8f65d",
                  fontWeight: 500,
                }}
              >
                DSA
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#333",
                  marginTop: "2px",
                }}
              >
                Problem Solving
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#c8f65d",
                  fontWeight: 500,
                }}
              >
                React
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#333",
                  marginTop: "2px",
                }}
              >
                Frontend Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
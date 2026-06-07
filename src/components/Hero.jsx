export default function Hero({
  loaded,
  setActive,
  heroRef,
}) {
  return (
    <section
      id="about"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 4rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "4rem",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left Content */}
        <div>
          <div
            style={{
              fontSize: "12px",
              color: "#c8f65d",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Available for Opportunities
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(50px,8vw,90px)",
              lineHeight: 1.1,
              color: "#fff",
              opacity: loaded ? 1 : 0,
              transform: loaded
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 1s ease",
            }}
          >
            Building Scalable
            <br />
            Web Applications
            <br />
            With Modern
            <br />
            Technologies
          </h1>

          <p
            style={{
              marginTop: "2rem",
              maxWidth: "600px",
              color: "#666",
              lineHeight: 1.8,
              fontSize: "16px",
            }}
          >
            I'm Kartik Singh Parihar, a B.Tech IoT
            student at MITS Gwalior passionate about
            Data Science, Data Structures &
            Algorithms, Databases, IoT Engineering,
            and Full Stack Development.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            <button
              className="cta-btn"
              onClick={() => {
                setActive("Work");

                document
                  .getElementById("work")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              View Projects
            </button>

            <button
              className="ghost-btn"
              onClick={() => {
                setActive("Contact");

                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Contact Me
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "3rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ color: "#c8f65d" }}>
                30+
              </h3>
              <p style={{ color: "#666" }}>
                LeetCode Problems
              </p>
            </div>

            <div>
              <h3 style={{ color: "#c8f65d" }}>
                7.5
              </h3>
              <p style={{ color: "#666" }}>
                Current CGPA
              </p>
            </div>

            <div>
              <h3 style={{ color: "#c8f65d" }}>
                4
              </h3>
              <p style={{ color: "#666" }}>
                Major Projects
              </p>
            </div>
          </div>
        </div>

        {/* Right Photo */}
        
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 4rem",
        borderTop: "1px solid #111",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "15px",
          color: "#888",
        }}
      >
        Kartik Singh Parihar
      </div>

      <div
        style={{
          fontSize: "11px",
          color: "#555",
        }}
      >
        © 2026 Portfolio 
      </div>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <a
          href="https://github.com/Kartiksinghparihar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#888",
            textDecoration: "none",
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
          }}
        >
          LeetCode
        </a>
      </div>
    </footer>
  );
}
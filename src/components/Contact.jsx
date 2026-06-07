export default function Contact({
  formData,
  setFormData,
  sent,
  handleSubmit,
}) {
  return (
    <section
      id="contact"
      style={{
        padding: "5rem 4rem",
        borderTop: "1px solid #0f0f0f",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#444",
            marginBottom: "1rem",
          }}
        >
          Contact
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(32px,5vw,56px)",
            fontWeight: 400,
            color: "#e8e8e0",
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}
        >
          Let's Build Something
          <br />
          Amazing Together
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "3rem",
            lineHeight: 1.8,
          }}
        >
          Interested in collaborating on a project,
          discussing technology, or just saying hello?
          Feel free to reach out.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <input
            className="input-field"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            className="input-field"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <textarea
            className="input-field"
            rows="5"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            style={{
              resize: "none",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <button
            className="cta-btn"
            onClick={handleSubmit}
          >
            {sent
              ? "Message Sent ✓"
              : "Send Message"}
          </button>
        </div>

        <div
          style={{
            marginTop: "3rem",
            color: "#666",
            lineHeight: 2,
          }}
        >
          <p>
            Email:
            {" "}
            kartiksinghp2006@gmail.com
          </p>

          <p>
            LinkedIn:
            {" "}
            www.linkedin.com/in/kartik-singh-parihar-973518329
          </p>

          <p>
            GitHub:
            {" "}
            github.com/Kartiksinghparihar
          </p>

          <p>
            LeetCode:
            {" "}
            leetcode.com/u/Kartik_leetcodee01
          </p>
        </div>
      </div>
    </section>
  );
}
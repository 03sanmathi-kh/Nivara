const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// MOCK LOGIN
app.post("/api/login", (req, res) => {
  const { email } = req.body;

  res.json({
    token: "demo-token-123",
    user: {
      id: "1",
      name: "Test User",
      email
    }
  });
});

// MOCK DASHBOARD
app.get("/api/dashboard", (req, res) => {
  res.json({
    riskLevel: "Medium",
    appointments: 2,
    reports: 3
  });
});

// MOCK CHAT
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: "This is a demo AI response for: " + message
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

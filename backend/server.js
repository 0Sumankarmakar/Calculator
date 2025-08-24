const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// API route for calculation
app.post("/calculate", (req, res) => {
  try {
    const { expression } = req.body;
    const result = eval(expression); // ⚠️ simple for now
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: "Invalid Expression" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

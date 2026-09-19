const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const prices = {
  "110": 140,
  "210+21": 280,
  "530+53": 680,
  "1080+108": 1360,
  "2200+220": 2720
};

app.get("/api/prices", (req, res) => {
  res.json(prices);
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Aleppo Store MENA running on port ${PORT}`);
});

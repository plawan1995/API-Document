import express from "express";

const app = express();
const port = 3000;

// API: GET /profiles
app.get("/profiles", (req, res) => {
  const profile = {
    data: {
      name: "john",
      age: 20,
    },
  };
  res.status(200).json(profile);
});

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
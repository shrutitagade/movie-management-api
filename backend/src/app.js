import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();
app.use(express.json());

app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send("Movie API is running...");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

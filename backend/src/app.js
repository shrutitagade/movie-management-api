import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import setupSwagger from "./swagger.js";

const app = express();

// Middleware
app.use(express.json());

// Swagger docs
setupSwagger(app);

// Routes
app.use("/movies", movieRoutes);


app.get("/", (req, res) => {
  res.send("Server is running!");
});

export default app; 

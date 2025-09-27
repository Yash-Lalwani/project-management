import express from "express";
import cors from "cors";

const app = express();

// Middlewares basic configurations (do this for every project)
app.use(express.json({ limit: "16kb" })); // by this code, we can limit the size of the json request by the user, which is 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // by this code, we can accept the urlencoded data like space is %20
app.use(express.static("public"));

// CORS configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get("/", (req, res) => {
    res.send("Welcome to Togetherly!");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

export default app;
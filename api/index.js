import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/saludo", (req, res) => {
    res.json({ 
        mensaje: "Hola desde Vercel el backend con React + Node.js"
    });
});

export default app;
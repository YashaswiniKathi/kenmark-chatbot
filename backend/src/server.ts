import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/chat", chatRoute);

// Health check (optional but useful)
app.get("/", (_req, res) => {
  res.send("Kenmark ITan Chatbot Backend is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

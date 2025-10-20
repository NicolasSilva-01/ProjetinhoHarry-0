
// server.js (na raiz)
import express from 'express';
import dotenv from "dotenv";
import bruxoRoutes from './src/routes/bruxoRoutes.js';

const app = express();
const PORT = 3001;

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;


app.get("/", (req, res) => {
    res.send("🚀 servidor funcionando...");
});

app.use('/bruxos', bruxosRoutes);

app.listen(PORT, () => {
  console.log(`🪄 API em http://localhost:${PORT}`);
});
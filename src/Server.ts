import express from "express";
import userRoutes from "./routes/userRoutes";
import { connectDatabase } from "./config/database";


const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = 3000;

const startServer = async () => {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`🚀 Server rodando em http://localhost:${PORT}`);
    });
};

startServer();
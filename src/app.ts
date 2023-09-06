import express, { Express } from "express";
import randomGeneratorRoutes from "./Routes/randomgenerators.routes";

const app: Express = express()

app.use(randomGeneratorRoutes);

export default app;

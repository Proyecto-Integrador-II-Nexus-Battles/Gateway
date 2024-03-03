import express, { json } from "express";
import { PORT } from "./config.js";
import expressGateway from "express-gateway";

const app = express();
app.use(json());
expressGateway(app);

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

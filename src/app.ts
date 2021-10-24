import express from "express";
import route from "./routes";
import cors from 'cors';
import { Server } from 'http';


const app = express();
const port = 4000;

const server = new Server(app); 

app.use(route);
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app running at http://localhost:${port} --- ${app.get('type')}`);
});

export default app;
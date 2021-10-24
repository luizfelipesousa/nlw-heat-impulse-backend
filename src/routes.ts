import express from 'express';
import { Request, Response } from 'express';

const route = express.Router();

route.get('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send({'res':'Nova Rota'})
})


route.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send({'res':'Nova Rota'})
})

route.get('/test', (req: Request, res: Response) => {
    res.send({'res':'Nova Rota Teste'})
})

export default route;




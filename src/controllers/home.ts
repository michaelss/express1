import { Request, Response } from "express";

export let index = (req: Request, res: Response) => {
    // res.send({"chave": "valor"});
    res.send("Principal");
};

export let json = (req: Request, res: Response) => {
    res.send({"chave": "valor"});
};
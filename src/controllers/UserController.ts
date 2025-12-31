import { Request, Response } from "express";
import { emitWarning } from "node:process";

interface User {
    id: number;
    nomePersonagen: string;
    nomeLogin: string;
    senha: string;
}

export class UserController {
    private users: User[] = [];
    private idConter = 1

    login(req: Request, res: Response): Response {
        const {nomeLogin, senha} = req.body;
        const user = this.users.find(u=> u.nomeLogin === nomeLogin);

        if (!user){
            return res.status(401).json({message: "Login ou senha Incorretos"})
        } else {
            if(user.senha !== senha){
                return res.status(401).json({ message: "Login ou senha Incorretos"})
            }else{
                return res.status(200).json({
                    message: "Login Realizado com sucesso",
                    user: {
                        id: user.id,
                        nomePersonagem: user.nomePersonagen
                    } 
                })
            }
        }
    }

    create(req: Request, res: Response): Response{
        const {nomePersonagen, nomeLogin, senha} = req.body;
        const newUser: User = { id: this.idConter++, nomePersonagen, nomeLogin, senha}
        this.users.push(newUser);
        return res.status(201).json(newUser);
    }

    update(req: Request, res: Response): Response {
        const id = Number(req.params.id);
        const { nomePersonagen, nomeLogin, senha} = req.body;
        const user = this.users.find(u => u.id === id)
        if (!user) return res.status(404).json({ message: "Usuario não encontrado"});

        user.nomePersonagen = nomePersonagen ?? user.nomePersonagen;
        user.nomeLogin = nomeLogin ?? user.nomeLogin;
        user.senha = senha ?? user.senha
        return res.json(user);
    }

    delete(req: Request, res: Response): Response {
        const id = Number(req.params.id);
        this.users = this.users.filter(u => u.id !== id)
        return res.status(204).send();
    }
}
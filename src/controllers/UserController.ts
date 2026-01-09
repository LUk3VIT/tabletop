import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

     async login(req: Request, res: Response): Promise<Response> {
        try {
            const { nomeLogin, senha } = req.body;

            if (!nomeLogin || !senha){
                return res.status(400).json({ message: 'Nome Login e senha são obrigatorios'});
            }

            const result = await this.userService.login(nomeLogin, senha)
            return res.status(201).json(result);
        } catch (error: any) {

            if (error.message === 'Login ou senha Incorretos') {
                return res.status(401).json({ message: error.message });
            }

            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async create (req: Request, res: Response): Promise<Response>{
        try{
            const { nomePersonagem, nomeLogin, senha } = req.body;

            if (!nomePersonagem || !nomeLogin || !senha ){
                return res.status(400).json({ message: 'Todos os campo são obrigatorios'});
            }

            const result = await this.userService.create({nomePersonagem, nomeLogin, senha})
            return res.status(201).json(result);
        } catch (error: any) {
            if (error.message === 'Nome Login ja existe'){
                return res.status(401).json({ message: error.message });
            }
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }

    async update (req: Request, res: Response): Promise <Response>{
        try{
            const {nomeLogin} = req.params;
            const {nomePersonagem, senha } = req.body;

            if (!nomePersonagem || !senha ){
                return res.status(400).json({ message: 'Todos os campo são obrigatorios'});
            }

            const userUp = await this.userService.update(nomeLogin, {nomePersonagem, senha});
            return res.status(201).json(userUp);
        } catch (error: any){
            if (error.message === 'user não encontrado'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Erro interno do servidor'});
        }
    }
    

}
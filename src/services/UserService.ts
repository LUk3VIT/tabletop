import { UserRepositorio } from "../repositorios/UserRepositorios";
import { UserAttributes } from "../models/User";

export class UserService {
    private userRepositorio: UserRepositorio;

    constructor() {
        this.userRepositorio = new UserRepositorio();
    }

    async login (nomeLogin: string, senha: string){
        const usuario = await this.userRepositorio.login(nomeLogin, senha)

        if (!usuario){
            throw new Error('Login ou senha Incorretos');
        }

        return usuario;
    }

    async create (userData: Omit<UserAttributes, 'id'>){
        const newUsuario = await this.userRepositorio.getNomeLogin(userData.nomeLogin);

        if (newUsuario){
            throw new Error('Nome Login ja existe');
        }

        return await this.userRepositorio.create(userData);
    }

    async update (nomeLogin: string,userData: Partial<UserAttributes>){
        const upUser = await this.userRepositorio.update(nomeLogin, userData);

        if(!upUser){
            throw new Error ('user não encontrado');
        }

        return upUser;
    }

    async delete (nomeLogin: string){
        const user = await this.userRepositorio.delete(nomeLogin);
        return user
    }
}
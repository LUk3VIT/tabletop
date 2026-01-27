import { User, UserAttributes } from "../models/User";

export class UserRepositorio {

    async login(nomeLogin: string, senha: string): Promise<User | null>{
        return await User.findOne({ 
            where: {
                nomeLogin: nomeLogin,
                senha: senha
            } 
        });
    }

    async create(userData: Omit<UserAttributes, 'id'>): Promise<User>{
        return await User.create(userData);
    }

    async getNomeLogin(nomeLogin:string): Promise<User | null>{
        return await User.findOne({where: {nomeLogin}})
    }

    async update (nomeLogin: string, userData:Partial<UserAttributes>): Promise<User | null> {
        const user = await this.getNomeLogin(nomeLogin);
        if (!user) return null;

        await user.update(userData);
        return user
    }
    
    async delete(nomeLogin: string): Promise<boolean> {
        const result = await User.destroy({where: {nomeLogin}})
        return result > 0;
    }

}
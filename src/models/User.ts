import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export interface UserAttributes {
    id?: number;
    nomePersonagem: string;
    nomeLogin: string;
    senha: string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public nomePersonagem!: string;
    public nomeLogin!: string;
    public senha!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomePersonagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeLogin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'User'
})
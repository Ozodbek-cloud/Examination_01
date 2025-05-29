import { UserModel } from "../Modules/User.module.js";
import { CustomError } from "../Utils/CustomError.js";
import Jwt from "../Utils/Jwt.js";
import sha256 from "sha256"

export class UserService{
    constructor() {}
    static generateToken(dataToken) {
        return {
            accesstoken: Jwt.sign(dataToken),
            refreshtoken: Jwt.sign(dataToken)
        }
    }
    static async register(payload, dataToken) {
        
        let user = await UserModel.findOne({email: payload.email});
        if (user) {
            throw new CustomError(
                404, 
                `${user.username} and ${user.email} are already Exists!`
            );
        }
    
        payload.password = sha256(payload.password);
        let newUser = await UserModel.create(payload);
        dataToken.user_id = newUser._id;
    
        return this.generateToken(dataToken);
    }
    static async login(payload, dataToken) {
        let user = await UserModel.findOne({email: payload.email})
            if (!user) {
                throw new CustomError(
                    404, 
                    ` User is Not Found`
                )
            }
            dataToken.user_id = user._id
            return this.generateToken(dataToken)
        
    }
    
    static async GetAllAdminsAndUsers() {
        let allusers = await UserModel.find()
        return allusers
    }
    
}
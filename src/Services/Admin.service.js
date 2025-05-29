import { AdminModel } from "../Modules/Amin.module.js";
import { CustomError } from "../Utils/CustomError.js";
import path from "path"
import sha256 from "sha256";
import Jwt from "../Utils/Jwt.js";

export class AdminService{
    constructor() {}
    static generateToken(dataToken) {
        return {
            accesstoken: Jwt.sign(dataToken),
            refreshtoken: Jwt.sign(dataToken)
        }
    }
   
    static async AdminRegister(payload, file, dataToken={}) {
        let exists = await AdminModel.findOne({email: payload.email})
        if (exists) {
            throw new CustomError(400, `${payload.email} is Already Registered!`)
        }

        let fileName = new Date().getTime() + "." + file.name
        payload.img = fileName
        
        payload.password = sha256(payload.password)

        const result = await AdminModel.create(payload)

        file.mv(path.join(process.cwd(), "src", "uploads", fileName), (error) => {
            if (error) {
                throw new CustomError(400, error.message)
            }
        })

        dataToken.admin = result._id;
        return this.generateToken(dataToken)        
    }

    static async AdminLogin(payload, dataToken = {}) {
        let exists = await AdminModel.findOne({email: payload.email})
        if (!exists) {
            throw new CustomError(400, `${payload.email} is NOt Found!`)
        }

        dataToken.admin = exists._id
        return this.generateToken(dataToken)

    }
    static async GetAllAdmins() {
        const result =await AdminModel.find()

        return result
    }

    static async GetOneId(id) {
        if (!id) {
            throw new CustomError(400, "id is Invalid or required!");
        }
    
        const result = await AdminModel.find({ _id: id });
        return result;
    }
    static async deleteById(id) {
        if (!id) {
            throw new CustomError(400, "id is Invalid or required!")
        }

        const result = await AdminModel.findByIdAndDelete(id)
        return result
    }

}
import { StuffModel } from "../Modules/Stuff.module.js";
import sha256 from "sha256";
import Jwt from "../Utils/Jwt.js";
import { CustomError } from "../Utils/CustomError.js";

export class StuffService {
    constructor() {}

    static generateToken(dataToken) {
        return {
            accessStuffToken: Jwt.sign(dataToken),
            refreshStuffToken: Jwt.sign(dataToken) 
        };
    }

    static async addStuff(payload, dataToken = {}) {

        payload.password = sha256(payload.password);
        const createdStuff = await StuffModel.create(payload);
        
        if (!createdStuff) {
            throw new CustomError(500, "Failed to create stuff");
        }

        dataToken.stuff_id = createdStuff._id;
        return this.generateToken(dataToken);
    }

     static async login(payload, dataToken = {}) {
        let exitst = await StuffModel.findOne({username: payload.username, password: payload.password})
        if (!exitst) {
            throw new CustomError(400, `
                ${payload.username} and ${payload.password} are not Found 
                `)
        }
        dataToken.stuff = exitst._id

        return this.generateToken(dataToken)
     }
    static async changeStuff(id, updateData) {
        if (!id) {
            throw new CustomError("Id is required!")
        }
        if (updateData.password) {
            updateData.password = sha256(updateData.password);
        }

        const updatedStuff = await StuffModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedStuff) {
            throw new CustomError(404, "Stuff not found");
        }

        return updatedStuff;
    }

     static async Deletestuff(id) {
        if (!id) {
            throw new CustomError(400, "Id is required or Error")
        }
        const deletestuff = await StuffModel.findByIdAndDelete(id)
        return deletestuff
     }
     
    static async getProfileById(id) {
        if (!id) {
            throw new CustomError(400, "ID is required");
        }
        
        const stuff = await StuffModel.findById(id);
        if (!stuff) {
            throw new CustomError(404, "Stuff not found");
        }

        return stuff;
    }
}
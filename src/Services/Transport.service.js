import { TransportModel } from "../Modules/Transport.module.js";
import path from "path"
import { CustomError } from "../Utils/CustomError.js";

export class TransportService{
    constructor() {}

    static  async AddTransport(payload, file) {
        let fileName = new Date().getTime() + "." + file.name
        payload.img = fileName
        
        let newTransport = await TransportModel.create(payload)
         
        file.mv(path.join(process.cwd(), "src", "uploads", fileName), error => {
            if (error) throw new CustomError(400, error.message)
        })
        return newTransport
    }

    static async deletetransport(id) {
        if (!id) {
            throw new CustomError("Id is Required!")
        }
        let deleted = await TransportModel.findByIdAndDelete(id)
        return deleted
    }
    
    static async updatetransport(id, updateData) {
        if (!id) {
            throw new CustomError("id is Required")
        }
        const updatedTransport = await TransportModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedTransport) {
            throw new CustomError(400, "Update Qilishda Xatolik, Malumot kerak bolsa error.log ga qarang!")
        }
        return updatedTransport
    }

    static async search(name) {
        const newsearch = await TransportModel.findOne(name).populate("branch_id")

        return newsearch
    }
    
    static async find() {
        const result = await TransportModel.find().populate("branch_id")
        return result
    }

}
import { CustomError } from "../Utils/CustomError.js";
import { AdminregisterSchema, AdminloginSchema } from "../Validations/Admin.validations.js";

export default async(req,res,next) => {
    try {
        if(req.method == "POST" && req.url == "/api/v1/admin/register"){
            let { error } = await AdminregisterSchema.validate(req.body)
            if(error) throw new CustomError(403,error.details[0].message)
        }

        if(req.method == "POST" && req.url == "/api/v1/admin/login"){
            let { error } = await AdminloginSchema.validate(req.body)
            if(error) throw new CustomError(403,error.details[0].message)
        }

        next()

    } catch (error) {
        next(error)
    }
}
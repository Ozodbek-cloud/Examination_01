import { CustomError } from "../Utils/CustomError.js"
import { registerSchema, loginSchema } from "../Validations/validation.js"

export default async(req,res,next) => {
    try {
        if(req.method == "POST" && req.url == "/api/v1/register"){
            let { error } = await registerSchema.validate(req.body)
            if(error) throw new CustomError(403,error.details[0].message)
        }

        if(req.method == "POST" && req.url == "/api/v1/login"){
            let { error } = await loginSchema.validate(req.body)
            if(error) throw new CustomError(403,error.details[0].message)
        }

        next()

    } catch (error) {
        next(error)
    }
}
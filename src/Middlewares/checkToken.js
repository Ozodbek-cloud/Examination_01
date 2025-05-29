import { UserModel } from "../Modules/User.module.js"
import { CustomError } from "../Utils/CustomError.js"
import Jwt from "../Utils/Jwt.js"

export default async (req, res, next) => {
    try{
       const { token } = req.headers

       if (!token || token == "") throw new CustomError(400, "Token is required")
       
       let {user_id, userIp, userAgent} = Jwt.verify(token)

       let user = await UserModel.findById({_id: user_id})

       if(!user) throw new CustomError(404, "User not found")

       if(req.ip != userIp || req.headers["user-agent"] != userAgent) throw new CustomError(404, "You are not allowed!!")
       req.user = user
         
        next()

    } catch(error) {
       if (error.name == "TokenExpiredError") throw new CustomError(404, "Token expired")
       if (error.name == "JsonWebTokenError") throw new CustomError(404, "Token invalid")
    }
}
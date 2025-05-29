import logger from "../Log/Logger.js";
import { UserService } from "../Services/User.service.js";

class UserController{
    constructor() {}
   async AddUser(req, res, next) {
        try{
            let dataToken = {
                userIp: req.ip,
                userAgent: req.headers['user-agent']
            }
            let user = await UserService.register(req.body, dataToken)
            res.status(200).json({message:"Success", user, success:true})
        } catch(error) {
            logger.error(error)
            next(error)
        }
    }
    async LoginUser(req, res, next) {
        try{
            let dataToken = {
                userIp: req.ip,
                userAgent: req.headers['user-agent']
            }
            let user = await UserService.login(req.body, dataToken)
            res.status(200).json({message:"Success", user, success:true})
        } catch(error) {
            logger.error(error)
            next(error)
        }
    }
    async AllAdminAndUser(req, res, next) {
        try{
           let all = await UserService.GetAllAdminsAndUsers()
           res.status(200).json({message: "success", data: all, success: true})
        } catch(error) {
            logger.error(error)
            next(error)
        }
    }
}

let UserContr = new UserController()

export default UserContr
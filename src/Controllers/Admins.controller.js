import logger from "../Log/Logger.js";
import { AdminService } from "../Services/Admin.service.js";

class AdminController{
    constructor() {}


    async Register(req, res, next) {
        try {
    
            let dataToken = {
                userIp: req.ip,
                userAgent: req.headers['user-agent']
            };
    
            let admin = await AdminService.AdminRegister(req.body, req.files.img, dataToken);
    
            res.status(200).json({ message: "Success", admin, success: true });
        } catch(error) {
            logger.error(`Register error: ${error.message}`)
            next(error);
        }
    }
    async LoginAdmin(req, res, next) {
        try{
            let dataToken = {
                userIp: req.ip,
                userAgent: req.headers['user-agent']
            }
            let user = await AdminService.AdminLogin(req.body, dataToken)
            res.status(200).json({message:"Success", user, success:true})

        } catch(error) {
            logger.error(`Login error: ${error.message}`)
            next(error)
        }
    }
    async GetAll(req, res, next) {
        try{
            const result = await AdminService.GetAllAdmins()

        res.status(200).json({
            message: "success",
            data: result,
            success: true
        })
        } catch(error) {
            logger.error(`Get error: ${error.message}`)
            next(error) 
        }
    }
    async GetOneAdmin(req, res, next) {
        try{
            const { id } = req.params

            const result = await AdminService.GetOneId(id)
            res.status(200).json({
                message: "success",
                data: result,
                success: true
            })

        } catch(error) {
            logger.error(`GetOne error: ${error.message}`)
            next(error)
        }
    }
    async DeleteAdmin(req, res, next) {
        try{
            const { id } = req.params

            const result = await AdminService.deleteById(id)
            
            res.status(200).json({
                message: "success",
                data: result,
                success: true
            })
        } catch(error) {
            logger.error(`Delete error: ${error.message}`)
            next(error)
        }
    }
    
}

let AdminContr = new AdminController()
export default AdminContr
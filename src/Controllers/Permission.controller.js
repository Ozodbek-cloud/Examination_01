import { PermissionService } from "../Services/Permission.service.js";
import logger from "../Log/Logger.js";

class PermissionController{
    constructor() {}

    async GetAllPermission (req, res, next) {
        try {
            const result = await PermissionService.GetAllPermisions()
            res.status(200).json({
                message: "success",
                data: result,
                success: true
            })
        } catch (error) {
            logger.error(`Error on Get method: ${error.message}`)
            next(error)
        }
    }
    
    async GetOnePermission (req, res, next) {
        try {
            const result = await PermissionService.GetOnePermision(req.query)
            res.status(200).json({
                message: "success",
                data: result,
                success: true
            })

        } catch (error) {
            logger.error(`Error on GetOne method: ${error.message}`)
            next(error)
        }
    }

    async CreatePermission (req, res, next) {
        try {
            const result = await PermissionService.CreatePermission(req.body)
            res.status(201).json({
                message: "success",
                success:true
            })
        } catch (error) {
            logger.error(`Error on Create method: ${error.message}`)
            next(error)
        }
    }
    
    
    async UpdatePermission (req, res, next) {
        try {
            const { id } = req.params
            const { permissionModel, permission} = req.body
            const updated = { permissionModel, permission }
            
            const result = await PermissionService.ChangePermission(id, updated)
            res.status(201).json({
                message: "success",
                data: result,
                success: true
            })
            console.log(result)
        } catch (error) {
            logger.error(`Error on Update method: ${error.message}`)
            next(error)
        }
    }
    
    
    async DeletePermission (req, res, next) {
        try {
            const { id } = req.params
            const result = await PermissionService.DeletePermission(id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
}

const PermissionContr = new PermissionController()

export default PermissionContr
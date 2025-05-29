import { AdminPermissionService } from "../Services/AdminPerm.service.js"
import logger from "../Log/Logger.js"
class AdminPermissionontroller {
    constructor() {}

    async GetAllPermission (req, res, next) {
        try {
            const result = await AdminPermissionService.GetPermisions()
            res.status(200).json({
                message: "success",
                data: result,
                success:true
            })
        } catch (error) {
            logger.error(`Get error: ${error.message}`)
            next(error)
        }
    }
    
    async GetOnePermission (req, res, next) {
        try {
            const result = await AdminPermissionService.GetOnePermision(req.query)
            res.status(200).json({
                message: "success",
                data: result,
                success:true
            })

        } catch (error) {
            logger.error(`Get one error: ${error.message}`)
            next(error)
        }
    }

    async CreatePermission (req, res, next) {
        try {
            
            const result = await AdminPermissionService.AddPermission(req.body)
            res.status(201).json({
                message: "success",
                data: result,
                success: true
            })
        } catch (error) {
            logger.error(`Create error: ${error.message}`)
            next(error)
        }
    }
    
    
    async UpdatePermission (req, res, next) {
        try {
            const { id } = req.params
            const {permissionModel, actions } = req.body
            const updated = {permissionModel, actions}
            const result = await AdminPermissionService.ChangePermission(id, updated)

            res.status(201).json({
                message: "success",
                data: result,
                success: true
            })

        } catch (error) {
            logger.error(`Change error: ${error.message}`)
            next(error)
        }
    }
    
    
    async RemovePermission (req, res, next) {
        try {
             const { id } = req.params

            const result = await AdminPermissionService.DeletePermission(id)
            res.status(201).json({
                messge: "success",
                data: result,
                success: true
            })

        } catch (error) {
            logger.error(`Delete error: ${error.message}`)
            next(error)
        }
    }

}

const AdminPermContr = new AdminPermissionontroller()

export default AdminPermContr
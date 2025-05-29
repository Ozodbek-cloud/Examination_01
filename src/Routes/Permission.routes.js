import { Router } from "express"
import permission from "../Middlewares/permission.js"
import checkToken from "../Middlewares/checkToken.js"
import PermissionContr from "../Controllers/Permission.controller.js"

const PermissionRouter = Router() 

PermissionRouter.post("/api/v1/permission/create", checkToken, PermissionContr.CreatePermission)
PermissionRouter.put("/api/v1/permission/change/:id", checkToken, PermissionContr.UpdatePermission)
PermissionRouter.delete("/api/v1/permission/delete/:id", checkToken, PermissionContr.DeletePermission)
PermissionRouter.get("/api/v1/permission/get/all", checkToken, PermissionContr.GetAllPermission)
PermissionRouter.get("/api/v1/permission/get/one", checkToken, PermissionContr.GetOnePermission)

export default PermissionRouter

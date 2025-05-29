import { Router } from "express"
import AdminPermContr from "../Controllers/AdminPerm.controller.js"
import permission from "../Middlewares/permission.js"
import checkToken from "../Middlewares/checkToken.js"

const AdminPermRoutes = Router()

AdminPermRoutes.post("/api/v1/adminperm/create", checkToken, permission, AdminPermContr.CreatePermission)
AdminPermRoutes.get("/api/v1/adminperm/get/all", checkToken, AdminPermContr.GetAllPermission)
AdminPermRoutes.get("/api/v1/adminperm/getone", checkToken, AdminPermContr.GetOnePermission)
AdminPermRoutes.put("/api/v1/adminperm/change/:id", checkToken, AdminPermContr.UpdatePermission)
AdminPermRoutes.delete("/api/v1/adminperm/delete/:id", checkToken, AdminPermContr.RemovePermission)

export default AdminPermRoutes
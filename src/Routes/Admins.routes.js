import { Router } from "express"
import AdminContr from "../Controllers/Admins.controller.js"
import checkToken from "../Middlewares/checkToken.js"
import AdminValidation from "../Middlewares/Admin.Validation.js"
const AdminsRouter = Router()

AdminsRouter.post("/api/v1/admin/register", checkToken, AdminValidation, AdminContr.Register)
AdminsRouter.post("/api/v1/admin/login", checkToken, AdminValidation,  AdminContr.LoginAdmin)
AdminsRouter.get("/api/v1/admin/all", checkToken, AdminContr.GetAll)
AdminsRouter.get("/api/v1/admin/:id", checkToken, AdminContr.GetOneAdmin)
AdminsRouter.delete("/api/v1/admin/delete/:id", checkToken, AdminContr.DeleteAdmin)

export default AdminsRouter
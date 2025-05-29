import { Router } from "express"
import UserContr from "../Controllers/User.controller.js"
import Validation from "../Middlewares/Validation.js"

const SuperAdminRouter = Router()


SuperAdminRouter.post("/api/v1/register",Validation, UserContr.AddUser)
SuperAdminRouter.post("/api/v1/login",Validation, UserContr.LoginUser)
SuperAdminRouter.get("/api/v1/all", UserContr.AllAdminAndUser)

export default SuperAdminRouter
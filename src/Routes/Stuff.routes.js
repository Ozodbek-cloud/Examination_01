import { Router } from "express"
import StuffContr from "../Controllers/Stuff.controller.js"
import permission from "../Middlewares/permission.js"
import checkToken from "../Middlewares/checkToken.js"
import StuffMiddleware from "../Middlewares/Stuff.middleware.js"

const StuffRouter = Router()


StuffRouter.post("/api/v1/stuff/register", checkToken, permission, StuffContr.createStuff)
StuffRouter.post("/api/v1/stuff/login", checkToken, permission, StuffContr.Loginstuff)
StuffRouter.put("/api/v1/stuff/change/:id", checkToken, permission, StuffContr.changeStuff)
StuffRouter.get("/api/v1/sutff/get", StuffMiddleware,  StuffContr.getProfile)
StuffRouter.delete("/api/v1/stuff/delete/:id", checkToken,  StuffContr.DeleteStuff)

export default StuffRouter
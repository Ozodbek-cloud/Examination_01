import { Router } from "express"
import Tranport from "../Controllers/Transports.controller.js"
import checkToken from "../Middlewares/checkToken.js"
import permission from "../Middlewares/permission.js"


const TranportRouter = Router()

TranportRouter.post("/api/v1/transport/create", checkToken, permission, Tranport.CreateTransport)
TranportRouter.delete("/api/v1/transport/delete/:id", checkToken, Tranport.DeleteTransport)
TranportRouter.put("/api/v1/transport/change/:id", checkToken, Tranport.UpdatedTransport)
TranportRouter.get("/api/v1/transport/search", checkToken, Tranport.Search)
TranportRouter.get("/api/v1/transport/all", checkToken, Tranport.FindAll)

export default TranportRouter
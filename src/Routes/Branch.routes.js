import { Router } from "express"
import BranchContr from "../Controllers/Branch.controller.js"
import checkToken from "../Middlewares/checkToken.js"
import permission from "../Middlewares/permission.js"

const BranchRouter = Router()

 
BranchRouter.post("/api/v1/branch/create", checkToken, permission, BranchContr.CreateBranch)
BranchRouter.put("/api/v1/branch/change/:id", checkToken, permission, BranchContr.ChangeBranch)
BranchRouter.delete("/api/v1/branch/delete/:id", checkToken, permission, BranchContr.DeleteBranch)
BranchRouter.get("/api/v1/branch/all",checkToken, BranchContr.AllBranches)
BranchRouter.get("/api/v1/branch/:id", checkToken, BranchContr.GetBranchById)

export default BranchRouter
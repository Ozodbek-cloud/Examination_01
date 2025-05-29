import { AdminPermissionModel } from "../Modules/AdminPermission.module.js"
import { CustomError } from "../Utils/CustomError.js"

export class AdminPermissionService {
    constructor() {}

    static async AddPermission (body) {
        if (!body) {
            throw new CustomError(400, "Body Xatoda !")
        }
        const result =  await AdminPermissionModel.create(body)
        return result
    }
    
    
    static async ChangePermission (id, update) {
        if (!id) {
            throw new CustomError(400, "Id is invlaid or Incorrect!")
        }

        const result = await AdminPermissionModel.findByIdAndUpdate(id, update, {new : true})
        return result
    }
    
    
    static async DeletePermission (id) {
        if (!id) {
            throw new CustomError(400, "Id is invlaid or Incorrect!")
        }

        const result = await  AdminPermissionModel.findByIdAndDelete(id)
        return result

    }

    static async GetPermisions () {
        const permissions = await AdminPermissionModel.find()
        return permissions
    }

    static async GetOnePermision(query) {
        const permission = await AdminPermissionModel.find(query)
        return permission
    }
}
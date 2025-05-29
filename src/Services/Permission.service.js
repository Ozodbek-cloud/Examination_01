import { PermissionModel } from "../Modules/Permission.module.js";
import { CustomError } from "../Utils/CustomError.js";


export class PermissionService {
    constructor() {}

    static async CreatePermission (body) {
       const result =  await PermissionModel.create(body)
        return result
    }
    
    
    static async ChangePermission (updated, id) {
        const update = await PermissionModel.findByIdAndUpdate(id, updated, {new : true})

        return update
    }
    
    
    static async DeletePermission (id) {
       if (!id) {
          throw new CustomError(400, "Id is Required or Invalid")
       }
       const deleted =  await PermissionModel.findByIdAndDelete(id)
        return deleted
    }

    static async GetAllPermisions () {
        const allpermisions = await PermissionModel.find()
        
         return allpermisions
    }

    static async GetOnePermision(query) {
        if (!query) {
            throw new CustomError(400, "Error at Query")
        }
        const Onepermision = await PermissionModel.find(query)
        return Onepermision
    }
}
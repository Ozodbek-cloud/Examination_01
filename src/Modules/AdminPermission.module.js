import { Schema, model} from "mongoose"

export const AdminPermissionModel = model("AdminPermissions", new Schema({
    stuff_id : {type: Schema.Types.ObjectId, ref: "Stuff"},
    permissionModel: String,
    actions: [String]
}))
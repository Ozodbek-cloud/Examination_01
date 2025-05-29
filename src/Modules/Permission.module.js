import { Schema, model} from "mongoose"

export const PermissionModel = model("Permissions", new Schema({
    stuff_id: {type: Schema.Types.ObjectId, ref: "Stuff"},
    permissionModel: String,
    permission: [String] 
}))
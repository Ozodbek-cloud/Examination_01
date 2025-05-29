import { Schema, model} from "mongoose"

export const UserModel = model("Users", new Schema({
    username: String,
    branch_id: String,
    password: String,
    repeat_passowrd: String,
    email: {type: String, unique: true},
    birthDate: Date,
    gender: {type: String, enum: ["Male", "Female"]},
    role: {type: String, default: "SuperAdmin"}
}))
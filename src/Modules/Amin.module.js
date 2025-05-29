import { Schema, model } from "mongoose"

export const AdminModel = model("Admins", new Schema({
    firstname: String,
    lastname: String,
    address: String,
    email: String,
    password: String,
    img: String,
    birthDate: Date,
    time : {type:String, default: new Date()}
}))


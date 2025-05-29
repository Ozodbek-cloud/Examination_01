import { Schema, model} from "mongoose"

export const StuffModel = model("Stuff", new Schema({
    branch_id: {type: Schema.Types.ObjectId, ref: "Branches"},
    username: String,
    password: String,
    birthDate: String,
    gender: {type: String, enum: ["Male", "Female"]}
}, {strict: true}))
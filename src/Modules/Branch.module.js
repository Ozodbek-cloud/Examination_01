import { Schema, model} from "mongoose"

export const branchModel = model("Branches", new Schema({
    name: String,
    address: String,
    time: { type: String, default: new Date() }
  }));
  
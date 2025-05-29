import { Schema, model } from "mongoose";

export const TransportModel = model( "Transports", new Schema({
    branch_id: [{type: Schema.Types.ObjectId, ref: "Branches"}],
    model: String,
    color: String,
    img: String,
    price: String,
    time: {type: String, default: new Date()}
}))
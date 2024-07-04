import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    eventNames: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventType: { type:String, enum: ['concerts', 'serminar', 'tasting'], required: true },
    price: { type: Number , required: true},
    eventCompany: { type: String , required: true},
    location: { type: String , required: true},
    eventStatus: { type: String, enum: ['upcoming', 'completed', 'postponed'], required: true },
    image: { type: String, required: true }
},{
    timestamps:true
})

eventSchema.plugin(toJSON);
export const eventModel = model('event', eventSchema);

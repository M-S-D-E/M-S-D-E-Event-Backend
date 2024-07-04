import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    eventNames: { type: String },
    eventDate: { type: Date },
    eventType: { type:String, enum: ['concerts', 'serminar', 'tasting'] },
    price: { type: Number },
    eventCompany: { type: String },
    location: { type: String },
    eventStatus: { type: String, enum: ['upcoming', 'completed', 'postponed'] },
    createAt: { type: Date },
    updatedAt: { type: Date },
    image: { type: String, required: true }
})

eventSchema.plugin(toJSON);
export const eventModel = model('event', eventSchema);

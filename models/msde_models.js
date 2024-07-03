import { Schema, model } from "mongoose";

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
    image: { type: String }
})

export const eventModel = model('event', eventSchema);
import { Router } from "express";
import { addEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/msde_controller.js";


export const eventRouter = Router()

eventRouter.post('/event', addEvent)

eventRouter.get('/event',getEvents)

eventRouter.get('/event/:id',getEvent)

eventRouter.patch('/event/:id/:caseStatus',updateEvent)

eventRouter.delete('event/:id',deleteEvent)

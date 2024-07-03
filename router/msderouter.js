import { Router } from "express";
import { addEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/msde_controller.js";


export const eventRouter = Router()

eventRouter.post('/events', addEvent)

eventRouter.get('/events',getEvents)

eventRouter.get('/events/:id',getEvent)

eventRouter.patch('/events/:id',updateEvent)

eventRouter.delete('events/:id',deleteEvent)



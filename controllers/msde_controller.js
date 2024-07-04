import { eventModel } from "../models/msde_models.js";

export const addEvent = async(req, res, next) => {
   
    try {
        console.log('request', req.body)
         const addData = await eventModel.create({
            ...req.body,
            image: req.file.filename
         });
        res.status(201).json(addData);
   
    } catch (error) {
        next(error);
    }
    
};

// Get all Event
export const getEvents = async (req, res, next) => {
    try {
        // Get query params
        const { 
            limit = 10, 
            skip = 0, 
            filter = "{}",
            fields = "{}",
            sort = "{}"
         } = req.query;
        //    Get all events fron Database
    const allEvents = await eventModel
    .find(JSON.parse(filter))
    .sort(JSON.parse(sort))
    .select(JSON.parse(fields))
    .limit(limit)
    .skip(skip);
        // return all recipes as response
        res.status(200).json(allEvents);
    } catch (error) {
       next(error);
    }
}

// Get A Single Event 
export const getEvent = async (req,res,next) => {
    try {
        const event = await eventModel.findById(req.params.id)
        res.status(200).send(event)
        
    } catch (error) {
      console.log(error)  
    }
};

// Update a Event
export const updateEvent = async (req,res, next) => {
    try {
       const newData = req.body;
       console.log('request' , req.body)
        const updateData = await eventModel.findByIdAndUpdate(req.params.id, newData, {new:true})
         res.status(200).send(updateData)
        
    } catch (error) {
      next(error)  
    }

};
    

// delete an Event

export const deleteEvent = async (req,res, next) => {
try {
    const deleteData = await eventModel.findByIdAndDelete(req.params.id);
    {
        res.status(200).send(`Event has been deleted`)
    }
} catch (error) {
 console.log(error)   
}

}
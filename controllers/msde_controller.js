import { eventModel } from "../models/msde_models.js";

export const addEvent = async(req, res) => {
   
    try {
        console.log('request', req.body)
         const addData = await eventModel.create(req.body);
        res.json(req.body);
   
    } catch (error) {
        console.log(error)
    }
    
};

// Get all Event
export const getEvents = async (req,res, next) => {
    try {
        console.log("request",req.body);
        const getData = await eventModel.find();
     res.status(200).json(getData)
       
    } catch (error) {
       console.log(error) 
    }
};

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
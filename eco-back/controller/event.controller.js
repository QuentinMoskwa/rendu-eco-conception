const Event = require('../model/event.model.js');
require('dotenv').config();

exports.addEvent = async (req, res, next) => {
    let event = await Event.create(req.body.event);
    res.status(201).json(event);
};

exports.getEvents = async (req,res,next) => {
    let event = await Event.findAll();
    res.status(200).json(event);
}

// exports.getPagination = async (req, res, next) => {
//   let listEvent = await Event.findAll({
//     limit: parseInt(process.env.PAGINATION_LIMIT),
//     offset: (req.params.page - 1) * parseInt(process.env.PAGINATION_LIMIT),
//   });
//   res.status(200).json(listEvent);
// }; if needed

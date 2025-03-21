const Event = require("../model/event.model.js");
require("dotenv").config();

exports.addEvent = async (req, res, next) => {
  try {
    if (!req.body.event) {
      return res
        .status(400)
        .json({ error: "Missing data :" + JSON.stringify(req.body) });
    }
    let event = await Event.create(req.body.event);
    res.status(201).json(event);
  } catch (error) {
    console.error("Erroor while adding event:", error);
    res.status(500).json({ error: "server error" });
  }
};

exports.getEvents = async (req, res, next) => {
  try {
    let events = await Event.findAll();
    if (!events || events.length === 0) {
      return res.status(404).json({ error: "No event found" });
    }
    res.status(200).json(events);
  } catch (error) {
    console.error("Error while getting events:", error);
    res.status(500).json({ error: "server error" });
  }
};
// if needed
// exports.getPagination = async (req, res, next) => {
//   try {
//     const page = parseInt(req.params.page);
//     const limit = parseInt(process.env.PAGINATION_LIMIT);

//     if (isNaN(page) || page < 1) {
//       return res.status(400).json({ error: "Numéro de page invalide" });
//     }

//     let listEvent = await Event.findAll({
//       limit: limit,
//       offset: (page - 1) * limit,
//     });

//     if (!listEvent || listEvent.length === 0) {
//       return res
//         .status(404)
//         .json({ error: "Aucun événement trouvé pour cette page" });
//     }

//     res.status(200).json(listEvent);
//   } catch (error) {
//     console.error(
//       "Erreur lors de la récupération des événements paginés:",
//       error
//     );
//     res.status(500).json({ error: "Erreur interne du serveur" });
//   }
// };

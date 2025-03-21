const Event = require("../model/event.model");

exports.dataset = async () => {
  
  // Création des events
  const events = [
    {
        title: "rdv quoi ffeur",
        date: "2025-06-23 11:30:00",
        location: "Lille"
    }
  ];

  await Event.bulkCreate(events);
};

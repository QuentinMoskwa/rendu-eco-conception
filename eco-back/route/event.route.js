const express = require('express');
const eventController= require('../controller/event.controller.js');

const router = express.Router();


router.get('/',eventController.getEvents);

router.post("/", eventController.addEvent);

// router.get("/pagination/:page", eventController.getPagination); if needed

// router.put('/:id', () => {}); if needed

// router.delete('/:id', () => {}); if needed

module.exports = router;
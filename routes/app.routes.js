const pushNotificationController= require("../controllers/push-notification.controller");
const express = require("express");
const router = express.Router();

router.post("/send", pushNotificationController.sendNotification);

router.post('/', (req, res) => {
console.log("Main Page Connected!");
});

module.exports = router;

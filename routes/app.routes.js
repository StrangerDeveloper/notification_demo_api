const pushNotificationController= require("../controllers/push-notification.controller");
const express = require("express");
const router = express.Router();

router.post("/send", pushNotificationController.sendNotification);

module.exports = router;

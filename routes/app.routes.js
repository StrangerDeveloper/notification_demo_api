const pushNotificationController= require("../controllers/push-notification.controller");
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.send({data: "AppRoutes.js connected" });
console.log("Main Page Connected!");
});

router.post("/send", pushNotificationController.sendNotification);
router.post("/subscribe", pushNotificationController.subscribe);
router.post("/unsubscribe", pushNotificationController.subscribe);



module.exports = router;

var admin = require("firebase-admin");
var fcm =  require("fcm-notification");

var serviceAccount = require("../config/ismmart-push-notification.json");

var certPath = admin.credential.cert(serviceAccount);
var FCM = new fcm(certPath);

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//   });

exports.sendNotification = (request, response, next )=>{
    var tokens = [
            "token112312",
            "token23242"
    ];
    try {
        let message = {
            notification: {
                title: "Test Title",
                body: "Notification Message body"
            },
            data: {
                orderID: "12341234",
                date: "21-sep-23"
            },
            token: request.body.userToken,
        };
        FCM.send(message, function(err, res){
            if(err){
                return response.status(500).send({
                    success: false,
                    message: err
                });
            }else{
                return response.status(200).send({
                    success: true,
                    message: "Notification sent."
                });
            }
        })
    } catch (error) {
        throw error;
    }
};

exports.subscribe = (req, res, next)=>{
    var registrationToken = req.body.userToken;
    var topic = req.body.topic;
    FCM.subscribeToTopic(registrationToken, topic)
    .then((response) => {

        res.status(200).send({
            success: true,
            message: `Successfully subscribed to topic:', ${response}`
        });
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        console.log('Successfully subscribed to topic:', response);
      })
      .catch((error) => {
        res.status(500).send({
            success: false,
            message: `Error subscribing to topic: ${error}`
        });
        console.log('Error subscribing to topic:', error);
      });
};

exports.unsubscribe = (req, res, next)=>{
    var registrationToken = req.body.userToken;
    var topic = req.body.topic;
    FCM.unsubscribeFromTopic(registrationToken, topic)
    .then((response) => {

        res.status(200).send({
            success: true,
            message: `Successfully unsubscribed to topic:', ${response}`
        });
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        console.log('Successfully unsubscribed to topic:', response);
      })
      .catch((error) => {
        res.status(500).send({
            success: false,
            message: `Error unsubscribing to topic: ${error}`
        });
        console.log('Error unsubscribing to topic:', error);
      });
};
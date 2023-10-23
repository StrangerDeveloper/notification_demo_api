var admin = require("firebase-admin");
var fcm =  require("fcm-notification");

var serviceAccount = require("../config/push-notification-key.json");

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
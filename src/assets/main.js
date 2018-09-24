var appId = "IM20051444";
var appSecret = "aD69OwcY";
var streamName = "bot"
var serviceKey = "f6e50f7b-2bfd-11e8-bf0b-0213261164bb"
var userId ="123456789"


var config = new IMI.ICConfig(appId, appSecret);
var messaging = IMI.ICMessaging.getInstance();


function  prepareMessage(message) {

            if (message.getType() === IMI.ICMessageType.Message) {
                var thread = message.getThread() || {};
                if (message.getMedia()) {
                    var html = [];
                    var media = message.getMedia();
                    for (var i = 0; i < media.length; i++) {
                        var m = media[i];
                        var contentType = m.getContentType();
                        var url = m.getURL();
                        if (contentType == "file") {
                            html.push("<a href='" + url + "' target='_blank' >" + message.getMessage() + "_" + thread.getStreamName() + "_" + thread.getId() + "_" + thread.getTitle() + "</a>");
                        } else {
                            html.push("<a href='" + url + "' target='_blank' >" + message.getMessage() + "_" + thread.getStreamName() + "_" + thread.getId() + "_" + thread.getTitle() + "</a>");
                        }
                    }
                    
                } else {
                   

                    console.log(message);
					console.log(message.getUserId() + ": "+message.getMessage())
                    
                   
                }
                      
            } else if (message.getType() === IMI.ICMessageType.ReadReceipt) {
                var id = message.getTransactionId();
                try {
                    //$("#" + id).css("color", "#4286f4");
                } catch (ex) {

                }


            } else if (message.getType() === IMI.ICMessageType.Republish) {
                var thread = message.getThread() || {};

                if (message.getMedia()) {
                    var html = [];
                    var media = message.getMedia();
                    for (var i = 0; i < media.length; i++) {
                        var m = media[i];
                        var contentType = m.getContentType();
                        var url = m.getURL();
                        if (contentType == "file") {
                            html.push("<a href='" + url + "' target='_blank' >" + message.getMessage() + "_" + thread.getStreamName() + "_" + thread.getId() + "_" + thread.getTitle() + "</a>");
                        } else {
                            html.push("<a href='" + url + "' target='_blank' >" + message.getMessage() + "_" + thread.getStreamName() + "_" + thread.getId() + "_" + thread.getTitle() + "</a>");
                        }
                    }                    
                } else {
                   
                }
            }
        }
		
		
var msgCallBack = {
                onConnectionStatusChanged: function (statuscode) {
                    var statusMessage = null;
                    if (statuscode == 2) {
                        statusMessage = "Connected";
                    } else if (statuscode == 6) {
                        statusMessage = "Error while connecting";                       
                    } else {
                        statusMessage = "Not Connected";
                    }

                },
                onMessageReceived: function (message) {                   

                    prepareMessage(message);

                    if (message.getType() === IMI.ICMessageType.Message) {
                        var callback = {
                            onFailure: function (err) {
                                console.log("failed to get topics:");
                                //handleFailure(err);
                            }
                        };
                        messaging.setMessageAsRead(message.getTransactionId(), callback);
                    }
                }
            };
			
			
messaging.setICMessagingReceiver(msgCallBack);
var deviceId = IMI.ICDeviceProfile.getDefaultDeviceId();    
IMI.IMIconnect.startup(config);
IMI.IMIconnect.registerListener(
                        {
				onFailure: function () {
					console.log("token got expired...");                                
				}});
				
				
 var regcallback = {
                    onSuccess: function (msg) {

                        try {
                            messaging.connect();
                            console.log("onSuccess: reg");
                        } catch (ex) {
                            console.log(ex);
                        }

                    },
                    onFailure: function (err) {
                        console.log("Registration failed");

                    }
                };
var deviceProfile = new IMI.ICDeviceProfile(deviceId, userId);
console.log("IMI.IMIconnect.isRegistered()"+IMI.IMIconnect.isRegistered());
IMI.IMIconnect.register(deviceProfile, regcallback);


//send message
 var pubcallback = {
                    onSuccess: function () {
                         console.log("message sent");
                         
                    },
                    onFailure: function (errormsg) {
                        console.log("failed to send message");
                    }

                };
				
 var message = new IMI.ICMessage();
message.setMessage("Hello this is sample message");
                
var thread = new IMI.ICThread();
thread.setId("bot");
thread.setTitle("bot");
thread.setStreamName(streamName);

message.setThread(thread);
messaging.publishMessage(message, pubcallback);



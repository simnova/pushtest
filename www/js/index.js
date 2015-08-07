/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        // if (device.platform == "Android") {
        //     app.initPushwooshAndroid();
        // }

        // if (device.platform == "iPhone" || device.platform == "iOS") {
        //     app.initPushwooshIOS();
        // }

        var notificationOpenedCallback = function(jsonData) {
            alert("Notification received:\n" + JSON.stringify(jsonData));
            console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
        };

        window.plugins.OneSignal.init("16bdc478-2ef2-11e5-bde1-2f46e5ec5ff0", {
                googleProjectNumber: "1033677777065"
            },
            notificationOpenedCallback);


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // initPushwooshIOS: function() {
    //     alert("ios detected");
    //     var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");

    //     //set push notification callback before we initialize the plugin
    //     document.addEventListener('push-notification', function(event) {
    //         //get the notification payload
    //         var notification = event.notification;

    //         //display alert to the user for example
    //         alert(notification.aps.alert);

    //         //clear the app badge
    //         pushNotification.setApplicationIconBadgeNumber(0);
    //     });

    //     //initialize the plugin
    //     pushNotification.onDeviceReady({
    //         pw_appid: "18196-066AC"
    //     });

    //     //register for pushes
    //     pushNotification.registerDevice(
    //         function(status) {
    //             var deviceToken = status['deviceToken'];
    //             console.warn('registerDevice: ' + deviceToken);
    //         },
    //         function(status) {
    //             console.warn('failed to register : ' + JSON.stringify(status));
    //             alert(JSON.stringify(['failed to register ', status]));
    //         }
    //     );

    //     //reset badges on app start
    //     pushNotification.setApplicationIconBadgeNumber(0);
    // },

    // initPushwooshAndroid: function() {
    //     //alert("android detected");
    //     var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");

    //     //set push notifications handler
    //     document.addEventListener('push-notification', function(event) {
    //         var title = event.notification.title;
    //         var userData = event.notification.userdata;

    //         alert(title);

    //         // if (typeof(userData) != "undefined") {
    //         //     var pageid = userData.pageid;
    //         //     var pageurl = pageid + ".html";
    //         //     window.location.href = pageurl;
    //         //     alert(title);
    //         // }

    //         // alert(title, userdata);


    //     });

    //     //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    //     pushNotification.onDeviceReady({
    //         projectid: "1033677777065",
    //         pw_appid: "18196-066AC"
    //     });

    //     //register for pushes
    //     pushNotification.registerDevice(
    //         function(status) {
    //             var pushToken = status;
    //             //alert('push token: ' + pushToken);
    //         },
    //         function(status) {
    //             //alert(JSON.stringify(['failed to register ', status]));
    //         }
    //     );
    // }
};

app.initialize();

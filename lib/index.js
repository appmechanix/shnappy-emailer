var config = require('config');
var SparkPost = require('sparkpost');
var client = new SparkPost(config.Email.SparkPostKey);

/***
 * Send an email via SparkPost
 * @param message The message object you want to send. Has .html and .text properties
 * @param options Send options.
 * @param callback
 * @constructor
 */
exports.SendEmail = function(message, options, callback, isTest) {
    if (isTest === undefined) {
        isTest = callback;
        callback = options;
        options = undefined;
    }

    var request = {
        transmissionBody: {
            content: {
                from: {
                    email: config.Email.Address,
                    name: config.Email.Name
                },
                subject: message.subject,
                html: message.html,
                text: message.text
            },
            recipients: [{
                address: {
                    name: message.to.name,
                    email: message.to.email
                }
            }]
        }
    };

    if (options) {
        if (options.from) {
            if (options.from.email) {
                request.transmissionBody.content.from.email = options.from.email;
            }

            if (options.from.name) {
                request.transmissionBody.content.from.name = options.from.name;
            }
        }

        // If we have a reply to, add it to the email headers
        if (options.replyTo) {
            request.transmissionBody.content.reply_to = options.replyTo;
        }

        if (options.track_opens) {
            request.transmissionBody.open_tracking = options.track_opens;
        }

        if (options.track_clicks) {
            request.transmissionBody.click_tracking = options.track_clicks;
        }
    }

    if (isTest) {
        return callback(request.transmissionBody);
    }

    client.transmissions.send(request, function(e) {
        callback(request, e);
    });
};
var config = require('config');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(config.Email.MandrillKey);

/***
 * Send an email via Mandrill
 * @param message The message object you want to send. Has .html and .text properties
 * @param options Send options.
 * @param callback
 * @constructor
 */
exports.SendEmail = function (message, options, callback) {
    if (callback === undefined) {
        callback = options;
        options = undefined;
    }

    var sendOptions = {
        html: message.html,
        text: message.text,
        subject: message.subject,
        from_email: config.Email.Address,
        from_name: config.Email.Name,
        to: [
            {
                email: message.to.email,
                name: message.to.name,
                type: "to"
            }
        ]
    };

    if (options !== undefined) {
        if (options.from !== undefined) {
            if (options.from.email !== undefined) {
                sendOptions.from_email = options.from.email;
            }

            if (options.from.name !== undefined) {
                sendOptions.from_name = options.from.name;
            }
        }

        // If we have a reply to, add it to the email headers
        if (options.replyTo !== null && options.replyTo !== undefined) {
            sendOptions.headers = {
                "Reply-To": options.replyTo
            };
        }

        if (options.track_opens !== undefined) {
            sendOptions.track_opens = options.track_opens;
        }

        if (options.track_clicks !== undefined) {
            sendOptions.track_clicks = options.track_clicks;
        }
    }

    var sendParams = {
        message: sendOptions
    };

    if (options !== undefined && options.sendAt !== undefined) {
        sendParams.send_at = options.sendAt;
    }

    mandrill_client.messages.send(sendParams, function (e) {
        callback(sendOptions, e);
    });
};
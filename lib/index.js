var config = require('config');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(config.Email.MandrillKey);

exports.SendEmail = function (to, subject, message, replyTo, callback) {
    if (callback === undefined) {
        callback = replyTo;
        replyTo = null;
    }

    var toSend = {
        html: message.html,
        text: message.text,
        subject: subject,
        from_email: config.Email.Address,
        from_name: config.Email.Name,
        to: [
            {
                email: to.email,
                name: to.name,
                type: "to"
            }
        ]
    };

    // If we have a reply to, add it to the email headers
    if (replyTo !== null && replyTo !== undefined) {
        toSend.headers = {
            "Reply-To": replyTo
        };
    }

    mandrill_client.messages.send({"message": toSend}, function (e) {
        callback(e);
    });
};
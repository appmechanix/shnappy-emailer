shnappy-emailer
===============

Send emails via Mandrill. Saves you having to setup the whole email object each time.

Installing
==========

```
npm install shnappy-emailer --save
```

Sample
=====

```javascript
var emailer = require('shnappy-emailer');

var message = {
    subject: 'Test',
    html: '<p>Hi</p>',
    text: 'Hi',
    to: {
        name: 'Daniel',
        email: 'daniel@shnappy.com'
    }
}

// These are all optional. Most values will read from config if not provided.
var options = {
    from: {
        name: 'Test',
        email: 'test@example.com'
    },
    replyTo: 'replyto@example.com',
    sendAt: new Date().toISOString()
};

emailer.SendEmail(to, 'Subject', message, function(data){
    // Check data to see if it worked.
});
```

Methods
=======

SendEmail(messageObject, options, callback)

SendEmail(messageObject, callback)

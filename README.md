shnappy-emailer
===============

Send emails via Mandrill. Saves you having to setup the whole email object each time.

History
=======

2.0.1 - Breaking changes. Moved from Mandrill to SparkPost to avoid Mandrill price hike.

1.0.0 - Breaking changes. Introduced options to allow sending from another email than in config

0.0.1 - Initial release.

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

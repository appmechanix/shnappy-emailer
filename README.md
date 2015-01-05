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

var to = {
    email: 'to@example.com',
    name: 'Name'
};

var message = {
    text: 'Hello world!',
    html: '<p>Hello world!</p>'
};

emailer.SendEmail(to, 'Subject', message, function(data){
    // Check data to see if it worked.
});
```

Methods
=======

SendEmail(toObject, subject, messageObject, callback)

SendEmail(toObject, subject, messageObject, replyToEmail, callback)

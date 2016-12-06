// Should really put something in here
var lib = require('../lib/index');

exports.check_that_defaults_from_config_are_applied = function (test) {
    lib.SendEmail(
    {
        subject: 'Test',
        html: '<p>Hi</p>',
        text: 'Hi',
        to: {
            name: 'Daniel',
            email: 'daniel@shnappy.com'
        }
    },
    {},
    function (options) {
        test.equal(options.content.subject, 'Test');
        test.equal(options.content.from.name, 'Shnappy (DEV)');
        test.equal(options.content.from.email, 'hello@shnappy.com');
        test.done();
    },
    true
    );
};

exports.check_that_options_are_not_required = function (test) {
    lib.SendEmail(
    {
        subject: 'Test',
        html: '<p>Hi</p>',
        text: 'Hi',
        to: {
            name: 'Daniel',
            email: 'daniel@shnappy.com'
        }
    },
    {},
    function (options) {
        test.equal(options.content.subject, 'Test');
        test.equal(options.content.from.name, 'Shnappy (DEV)');
        test.done();
    },
    true
    );
};

exports.check_that_subject_gets_populated = function (test) {
    lib.SendEmail(
    {
        subject: 'Test',
        html: '<p>Hi</p>',
        text: 'Hi',
        to: {
            name: 'Daniel',
            email: 'daniel@shnappy.com'
        }
    },
    {},
    function (options) {
        test.equal(options.content.subject, 'Test');
        test.done();
    },
    true
    );
};

exports.check_that_from_name_gets_populated = function (test) {
    lib.SendEmail(
    {
        html: '<p>Hi</p>',
        text: 'Hi',
        to: {
            name: 'Daniel',
            email: 'daniel@shnappy.com'
        }
    },
    {
        from: {
            name: 'Daniel'
        }
    },
    function (options) {
        test.equal(options.content.from.name, 'Daniel');
        test.done();
    },
    true
    );
};

exports.check_that_from_email_gets_populated = function (test) {
    lib.SendEmail(
    {
        html: '<p>Hi</p>',
        text: 'Hi',
        to: {
            name: 'Daniel',
            email: 'daniel@shnappy.com'
        }
    },
    {
        from: {
            email: 'daniel@shnappy.com'
        }
    },
    function (options) {
        test.equal(options.content.from.email, 'daniel@shnappy.com');
        test.done();
    },
    true
    );
};

exports.check_that_dont_track_clicks_gets_set = function (test) {
    lib.SendEmail(
    {
        subject: 'Test',
        html: '<p>Hi</p>',
        text: 'Hi',
        to: {
            name: 'Daniel',
            email: 'daniel@shnappy.com'
        }
    },
    {
        track_clicks: false
    },
    function (options) {
        test.equal(options.content.subject, 'Test');
        test.equal(options.content.from.name, 'Shnappy (DEV)');
        test.equal(options.content.from.email, 'hello@shnappy.com');
        test.equal(options.click_tracking, false);
        test.done();
    },
    true
    );
};


exports.check_that_attachment_is_added = function (test) {
    lib.SendEmail(
    {
        subject: 'Test',
        html: '<p>Hi</p>',
        text: 'Hi',
        to: {
            name: 'Daniel',
            email: 'daniel@shnappy.com'
        }
    },
    {
        attachment: {
            name:'Test',
            type:'text/plain',
            data: ''
        }
    },
    function (options) {
        test.equal(options.content.subject, 'Test');
        test.equal(options.content.from.name, 'Shnappy (DEV)');
        test.notEqual(undefined, options.content.attachments);
        test.done();
    },
    true
    );
};



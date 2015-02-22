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
        function (options) {
            test.equal(options.subject, 'Test');
            test.equal(options.from_name, 'Shnappy (DEV)');
            test.equal(options.from_email, 'hello@shnappy.com');
            test.done();
        });
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
        function (options) {
            test.equal(options.subject, 'Test');
            test.equal(options.from_name, 'Shnappy (DEV)');
            test.done();
        });
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
        function (options) {
            test.equal(options.subject, 'Test');
            test.done();
        });
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
            test.equal(options.from_name, 'Daniel');
            test.done();
        });
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
            test.equal(options.from_email, 'daniel@shnappy.com');
            test.done();
        });
};
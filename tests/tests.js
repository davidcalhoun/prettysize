var vows = require('vows'),
    assert = require('assert'),
    pretty = require('../index');

var tests = {
    'loading': {
        topic: function() {
            return pretty;
        },
        'should export a function': function(topic) {
            assert.isFunction(topic);
        }
    },
    'bytes': {
        topic: function() {
            return pretty(12);
        },
        'should print kilobytes': function(topic) {
            assert.equal(topic, '12 bytes');
        }
    },
    'kilobytes': {
        topic: function() {
            return pretty(123456);
        },
        'should print kilobytes': function(topic) {
            assert.equal(topic, '120.6 Kb');
        },
        'exact': {
            topic: function() {
                return pretty(1024);
            },
            'should be exactly 1.0 Kb': function(topic) {
                assert.equal(topic, '1.0 Kb');
            }
        }
    },
    'megs': {
        topic: function() {
            return pretty(123456789);
        },
        'should print megabytes': function(topic) {
            assert.equal(topic, '117.7 MB');
        },
        'exact': {
            topic: function() {
                return pretty(1024 * 1024);
            },
            'should be exactly 1.0 MB': function(topic) {
                assert.equal(topic, '1.0 MB');
            }
        }
    },
    'gigs': {
        topic: function() {
            return pretty(12345678901);
        },
        'should print gigabytes': function(topic) {
            assert.equal(topic, '11.5 GB');
        },
        'exact': {
            topic: function() {
                return pretty(1024 * 1024 * 1024);
            },
            'should be exactly 1.0 GB': function(topic) {
                assert.equal(topic, '1.0 GB');
            }
        }
    },
    'teras': {
        topic: function() {
            return pretty(1234567890123);
        },
        'should print terabytes': function(topic) {
            assert.equal(topic, '1.1 TB');
        },
        'exact': {
            topic: function() {
                return pretty(1024 * 1024 * 1024 * 1024);
            },
            'should be exactly 1.0 TB': function(topic) {
                assert.equal(topic, '1.0 TB');
            }
        }
    },
    'petas': {
        topic: function() {
            return pretty(1234567890123456);
        },
        'should print petaabytes': function(topic) {
            assert.equal(topic, '1.1 PB');
        },
        'exact': {
            topic: function() {
                return pretty(1024 * 1024 * 1024 * 1024 * 1024);
            },
            'should be exactly 1.0 PB': function(topic) {
                assert.equal(topic, '1.0 PB');
            }
        }
    },
    'exabyte': {
        topic: function() {
            return pretty(1234567890123456789);
        },
        'should print exabytes': function(topic) {
            assert.equal(topic, '1.1 EB');
        },
        'exact': {
            topic: function() {
                return pretty(1024 * 1024 * 1024 * 1024 * 1024 * 1024);
            },
            'should be exactly 1.0 EB': function(topic) {
                assert.equal(topic, '1.0 EB');
            }
        }
    }
};

vows.describe('prettysize').addBatch(tests).export(module);

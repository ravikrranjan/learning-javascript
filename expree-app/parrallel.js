var AWS = require('aws-sdk')
moment = require('moment')
async = require('async'),
    util = require('util'),
    EventEmitter = require('events').EventEmitter;


// https: //github.com/commuterjoy/s3__parallel-get/blob/master/lib/aws-parallel-get.js
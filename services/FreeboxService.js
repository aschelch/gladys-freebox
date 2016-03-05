
var request = require('request');
var querystring = require('querystring');

var code = sails.config.freebox.code;
var hd = sails.config.freebox.hd || "hd1";

function pressKey(key, fn){
    fn = fn || function(err){};
    var params = {
        code: code,
        key: key
    };

    request("http://"+hd+".freebox.fr/pub/remote_control?"+querystring.stringify(params), function(error, response, body){
        fn(error);
    });

};

module.exports = {

    pressKey: pressKey,

    mute: function(fn){
        pressKey("mute", fn);
    },
    power: function(fn){
        pressKey("power", fn);
    },
    list: function(fn){
        pressKey("list", fn);
    },
    tv: function(fn){
        pressKey("tv", fn);
    },
    back: function(fn){
        pressKey("back", fn);
    },
    swap: function(fn){
        pressKey("swap", fn);
    },
    home: function(fn){
        pressKey("home", fn);
    },
    up: function(fn){
        pressKey("up", fn);
    },
    left: function(fn){
        pressKey("left", fn);
    },
    down: function(fn){
        pressKey("down", fn);
    },
    right: function(fn){
        pressKey("right", fn);
    },
    ok: function(fn){
        pressKey("ok", fn);
    },
    red: function(fn){
        pressKey("red", fn);
    },
    green: function(fn){
        pressKey("green", fn);
    },
    blue: function(fn){
        pressKey("blue", fn);
    },
    yellow: function(fn){
        pressKey("yellow", fn);
    },
    increaseVolume: function(fn){
        pressKey("vol_inc", fn);
    },
    decreaseVolume: function(fn){
        pressKey("vol_dec", fn);
    },
    nextChannel: function(fn){
        pressKey("prgm_inc", fn);
    },
    previousChannel: function(fn){
        pressKey("prgm_dec", fn);
    },
};

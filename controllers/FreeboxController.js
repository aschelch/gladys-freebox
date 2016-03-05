
module.exports = {

    key: function (req, res) {
        FreeboxService.pressKey(req.param("key"));
        res.json('ok');
    },

    power: function (req, res) {
        FreeboxService.power();
        res.json('ok');
    },

    home: function (req, res) {
        FreeboxService.home();
        res.json('ok');
    },

    ok: function (req, res) {
        FreeboxService.ok();
        res.json('ok');
    },

    mute: function (req, res) {
        FreeboxService.mute();
        res.json('ok');
    },

    progUp: function (req, res) {
        FreeboxService.nextChannel();
        res.json('ok');
    },

    progDown: function (req, res) {
        FreeboxService.previousChannel();
        res.json('ok');
    },

    volumeUp: function (req, res) {
        FreeboxService.increaseVolume();
        res.json('ok');
    },

    volumeDown: function (req, res) {
        FreeboxService.decreaseVolume();
        res.json('ok');
    }

};

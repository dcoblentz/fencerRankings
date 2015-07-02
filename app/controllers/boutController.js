var Fencer = require('../models/fencer'),
    Bout = require('../models/bout'),
    FencerController = require('./fencerController'),
    fencerController = new FencerController();

var BoutController = function () {

}

BoutController.prototype = {
    create: function (fencer1_id, fencer2_id, wins, losses, draws, date, callback) {
        var boutsController = this;
        Bout.create({
            _fencer1: fencer1_id,
            _fencer2: fencer2_id,
            wins: wins,
            losses: losses,
            draws: draws,
            date: date
        }, function (err, bout) {
            callback(err, bout);
        });
    },
    createFromObject: function (newBout, callback) {
        var boutsController = this;
        fencers.findNames([newBout.fencer1, newBout.fencer2], function (err, fencers) {
            console.log('found names');
            if (err) {
                callback(err);
            } else {
                bouts.create(
                    fencers[newBout.fencer1].id,
                    fencers[newBout.fencer2].id,
                    newBout.wins,
                    newBout.losses,
                    newBout.draws,
                    newBout.date,
                    callback);
            }

        });

    },    
    insert: function(newBouts, callback) {
        var boutController = this;
        Bout.collection.insert(newBouts, function(err, insertedBouts) {
            if(!err) {
                console.log('%fencerCount fencers were inserted!', insertedBouts.length)    
            }
            boutController.get(callback);
            //callback(err, insertedBouts);
        });
    },

    get: function (callback) {
        Bout.find().
        sort({'date': 1}).
        populate('_fencer1 _fencer2').
        exec(function (err, bouts) {
            callback(err, bouts);
        });

    },
    delete: function (bout_id, callback) {
        var bouts = this;

        Bout.remove({
            _id: bout_id
        }, function (err, bout) {
            if (err) {
                callback(err);
            } else {
                bouts.get(callback);
            }
        });
    }
};

module.exports = BoutController;
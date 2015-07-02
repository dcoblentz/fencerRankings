var Fencer = require('../models/fencer'),
    Bout = require('../models/bout'),
    Outcome = require('../models/outcome'),
    FencerController = require('./fencerController'),
    fencerController = new FencerController(),
    BoutController = require('./boutController'),
    boutController = new BoutController(),
    mongoose = require('mongoose');



var OutcomeController = function () {

}

OutcomeController.prototype = {
    insert: function(outcomes, callback) {
        Outcome.collection.insert(outcomes, function(err, added) {
            if(!err) {
                console.log('%addedCount outcomes were inserted!', added.length)    
            }
            callback(err, added);
        });
    },

    get: function (callback) {
        Outcome.find().
        sort({'fencer.name': 1}).
        sort({'index' : 1}).
        populate('fencer.fencer opponent.fencer _bout').
        
        exec(function (err, bouts) {
            callback(err, bouts);
        });

    },
    getHistory: function(fencerId, callback) {
        var ObjectId = mongoose.Types.ObjectId;
        Outcome.find({'_fencer': new ObjectId(fencerId)}).
        sort({'index' : 1}).
        populate('_bout').
        exec(function(err,history) {
            if(err ) {
                console.log(err);
            }
            callback(err, history);
        });
    },
    runBouts: function (bouts, callback) {
        outcomeController = this;
        outcomeController.runBout(bouts, 0, function(err, outcomes) {
            if( err ) {
                console.log(err);
            }
            callback(err, 'added');
        });
    },

    runBout: function (bouts, index, callback) {
        var outcomeController = this;
        if( index < bouts.length ) {
            console.log(bouts[index]);
            fencerController.findPair(bouts[index]._fencer1._id, bouts[index]._fencer2._id, function (err, fencers) {
                console.log(index + '\t' + bouts.length);


                if( err ) {
                    callback(err);
                } else {
                    results = outcomeController.calculateRatings(fencers[0], fencers[1], bouts[index], index);
                    outcomeController.insert(results, function(err, added ) {

                        fencers[0].lastOutcome = added[0]._id;
                        fencers[0].rating = added[0].newRating;
                        fencers[0].boutsFought += 1;
                        fencers[1].lastOutcome = added[1]._id;
                        fencers[1].rating = added[1].newRating;
                        fencers[1].boutsFought += 1;
                        console.log(fencers[0]._id + '\t' + fencers[1]._id);
                        fencerController.updatePair(fencers[0], fencers[1], function(err) {
                            if( !err ) {
                                outcomeController.runBout(bouts, index + 1, callback);
                            } else {
                                callback(err);
                            }

                        });
                    });
                }
            });
        } else {
            callback(undefined);
        }
    },
    calculateRatings: function (fencer1, fencer2, bout, index) {
        var total = bout.wins + bout.losses + bout.draws,
            oldRating1 = fencer1.rating, //fencer1.lastOutcome ? fencer1.lastOutcome.fencer.rating : fencer1.rating,
            oldRating2 = fencer2.rating, //fencer2.lastOutcome ? fencer2.lastOutcome.fencer.rating : fencer2.rating,
            r1 = Math.pow(10, oldRating1 / 400),
            r2 = Math.pow(10, oldRating2 / 400),
            e1 = Math.round(r1 * total / (r1 + r2)),
            e2 = Math.round(r2 * total / (r1 + r2)),
            a1 = bout.wins,
            a2 = bout.losses,
            newRating1 = Math.round((oldRating1 + 32 * ((a1 - e1)) / total)),
            newRating2 = Math.round((oldRating2 + 32 * ((a2 - e2) / total)));
                    
        return [{
            _bout: bout.id,
            _fencer: fencer1._id,
            index: index,
            name: fencer1.name,
            oldRating: oldRating1,
            newRating: newRating1,
            opponent: {
                _fencer: fencer2._id,
                name: fencer2.name,
                rating: newRating2
            },
            date: bout.date
        }, {
            _bout: bout.id,
            _fencer: fencer2._id,
            index: index,
            name: fencer2.name,
            oldRating: oldRating2,
            newRating: newRating2,
            opponent: {
                _fencer: fencer1._id,
                name: fencer1.name,
                rating: newRating1
            },
            date: bout.date
        }];
    }

};

module.exports = OutcomeController;
var Fencer = require('../models/fencer');

var FencerController = function () {

}

FencerController.prototype = {
    create: function (name, callback) {
        var fencerController = this;
        Fencer.create({
            name: name,
            boutsFought: 0,
            rating: 1000
        }, function (err, fencer) {
            if (err) {
                callback(err);
            } else {
                fencerController.get(callback);
            }
        });
    },
    insert: function(newFencers, callback) {
        Fencer.collection.insert(newFencers, function(err, insertedFencers) {
            if(!err) {
                console.log('%fencerCount fencers were inserted!', insertedFencers.length)    
            }
            callback(err, insertedFencers);
        });
    },
    findByName: function (name, callback) {
        Fencer.find({
            name: name
        }).
        populate('lastOutcome').
        exec(function (err, fencer) {
            callback(err, fencer);
        });
    },
    findNames: function (names, callback) {
        Fencer.find().
        where('name').in(names).
        populate('lastOutcome').
        exec(function (err, list) {
            var map;
            if (!err) {
                map = {};
                for (var i = 0; i < list.length; i++) {
                    map[list[i].name] = list[i];
                }
            }
            callback(err, map);
        });
    },
    
    findPair: function (fencer1_id, fencer2_id, callback) {
        Fencer.find().
        where('_id').in([fencer1_id, fencer2_id]).
        populate('lastOutcome').
        exec(function (err, list) {            
            if (!err) {
                if( list.length == 2 ) {
                    if(list[0].id != fencer1_id) {
                        list = [list[1], list[0]];
                    }
                } else {
                    console.log(list);
                    err = 'Pair not Found';
                }
                
            }
            callback(err, list);
        });
    },
    get: function (callback) {
        Fencer.find().
        where('boutsFought').gt(2).
        sort({'rating': -1}).
        exec(function (err, fencers) {
            callback(err, fencers);
        });

    },    
    delete: function (fencer_id, callback) {
        var fencerController = this;

        Fencer.remove({
            _id: fencer_id
        }, function (err, fencer) {
            if (err) {
                callback(err);
            } else {
                fencerController.get(callback);
            }
        });
    },
    updatePair: function (fencer1, fencer2, callback) {
        var id1 = fencer1._id,
            id2 = fencer2._id,
            f1 = fencer1.toObject(),
            f2 = fencer2.toObject();
        
        delete f1._id;
        delete f2._id;
        
        Fencer.update({_id : id1}, f1, {}, function(err, updated) {
            if( !err ) {
                Fencer.update({_id : id2}, f2, {}, function(err, updated){
                    if( !err ) {                        
                        console.log('updated');                        
                    }
                    callback(err, updated);

                });                
            } else {
                callback(err);    
            } 
                              
        });
    }
};

module.exports = FencerController;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Bout', {
    _fencer1 : {type: Schema.Types.ObjectId, ref: 'Fencer'},
    _fencer2 : {type: Schema.Types.ObjectId, ref: 'Fencer'},
    wins : {type: Number, min: 0},
    losses: {type: Number, min: 0},
    draws: {type: Number, min: 0},
    date: Number
});


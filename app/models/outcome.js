var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Outcome', {
    _bout : {type: Schema.Types.ObjectId, ref: 'Bout'},
    _fencer: {type: Schema.Types.ObjectId, ref: 'Fencer'},
    index: Number,
    name: String,
    oldRating: Number,
    newRating: Number,
    opponent : {
        _fencer: {type: Schema.Types.ObjectId, ref: 'Fencer'},
        name: String,
        rating: Number
    },
    date: Number
});
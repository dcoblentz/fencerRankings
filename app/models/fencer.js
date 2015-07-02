var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Fencer', {
    name : String,
    boutsFought : {type: Number, min: 0},
    rating : Number,
    lastOutcome : {type: Schema.Types.ObjectId, ref: 'Outcome'}
});
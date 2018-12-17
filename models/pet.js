"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

////NOTE: figure out if this can be more modular and put into another file--- same with the options script below 
const MongoosePaginate = require('mongoose-paginate');
MongoosePaginate.paginate.options = {
  limit: 3
}


const PetSchema = new Schema({
    name            : { type: String, required: true }
  , species         : { type: String }
  , picUrl          : { type: String }
  , picUrlSq        : { type: String } 
  , favoriteFood    : { type: String } 
  , description     : { type: String } 
}, 
{
  timestamps: true
});

PetSchema.plugin(MongoosePaginate);



module.exports = mongoose.model('Pet', PetSchema);
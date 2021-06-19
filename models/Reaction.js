const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionId: {
      type: Types.ObjectId,
      default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Reaction required',
        maxLength: 280
    },
    username: {
        type: String,
        required: 'Username required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
{
    toJSON: {
        getters: true
    },
    id: false

});


module.exports = ReactionSchema;
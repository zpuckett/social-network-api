const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


const ReactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
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

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Thought is required',
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: 'Username required'
    },
    reactions: [ReactionSchema]

},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
const { Schema, model } = require('mongoose');
const { moveMessagePortToContext } = require('node:worker_threads');

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
    reactions: [reactionSchema]

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
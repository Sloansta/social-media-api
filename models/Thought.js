const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusing with parent id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            max: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => getCreatedAt(createdAtVal)
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => getCreatedAt(createdAtVal)
        },

        username: {
            type: String,
            required: true
        },

        reactions: [ReactionSchema]
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

function getCreatedAt(createdAt) {
    return createdAt;
}

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
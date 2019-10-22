const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const SavedSchema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        required: true
    },
    // `blurb` is of type String
    blurb: {
        type: String
    },
    // `link` is required and of type String
    link: {
        type: String,
        required: true
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// This creates our model from the above schema, using mongoose's model method
const Saved = mongoose.model("Saved", SavedSchema);

// Export the Article model
module.exports = Saved;
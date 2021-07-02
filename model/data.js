const mongoose = require('mongoose');

const testData = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: String,
        require: true,
        unique: false
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    laptop: {
        type: String,
        require: true,
        unique: false
    },
    gender: {
        type: String,
        require: true,
        unique: false
    },
});

//change _id ket to id only
testData.virtual('id').get(function () {
    return this._id.toHexString();
});

testData.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model("TestData", testData);
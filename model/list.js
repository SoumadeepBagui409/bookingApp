const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    name:{
        type: String
    },
    userId: {
        type: String
    }
})

const List = mongoose.model('List',listSchema);

module.exports = List;
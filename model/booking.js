const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    userId:{
        type:String
    },
    listId:{
        type: String
    },
    startDate:{
        type:String
    },
    endDate:{
        type: String
    }
});

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;
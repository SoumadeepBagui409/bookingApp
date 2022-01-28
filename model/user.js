const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type:String,
        unique: true
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;
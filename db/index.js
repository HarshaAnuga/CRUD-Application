const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://HarshaAnuga:9rM2mcNqg220JbNo@cluster0.9y4so.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
   username:String,
   password:String,
   

});

const UserSchema = new mongoose.Schema({
    username:String,
   password:String,
   purchasedCourses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'course'
   }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imagelink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
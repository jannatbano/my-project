const { default: mongoose, Schema, model } = require("mongoose");
 
const StudentSchema = new Schema({
    Name : {
        type: String,
        required : true
    },
    Fathername : {
        type: String,
        required : true
    },
    Email : {
        type: String,
    },
    Phone : {
        type: String,
        required : true
    },
    DOB : {
        type: String,
        required : true
    },
})

const StudentModels = model("Student",StudentSchema);
module.exports= StudentModels
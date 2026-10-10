const express =  require("express");
const mongoose = require("mongoose");
const StudentController = require("./apps/controllers/StudentController");
const TeacherController = require("./apps/controllers/TeacherController");
const PORT = 5789

const app = express()
mongoose.connect("mongodb://localhost:27017//studentdb")
app.use(express.json());

app.post("/Student" ,StudentController.create);
app.get("/Student",StudentController.readAll);
app.get("/Student/:id",StudentController.readOne);
app.put("/Student/:id",StudentController.update);
app.delete("/Student/:id",StudentController.destroy);


app.post("/teacher" ,TeacherController.create);
app.get("/teacher",TeacherController.readAll);
app.get("/teacher/:id",TeacherController.readOne);
app.put("/teacher/:id",TeacherController.update);
app.delete("/teacher/:id",TeacherController.destroy);

app.get("/",(req,res) => {
    res.send("welcome to coding")
})

app.get("/about" ,(req,res) =>{
    res.send("something about me");
})


app.listen(PORT,()=>{
    console.log('server started at http://localhost:$(PORT)')
})
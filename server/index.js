var express = require("express");
//var mysql = require("mysql");
//var connection = require("./database");
require("dotenv").config();
var app = express();
var bodyParser = require("body-parser");
//var cors = require("cors");
const sequelize = require("./database");
const Students = require("./models/Students");
const Subjects = require("./models/Subject");
const routes = require('./routes/Routes');
//const routes = require("./routes/Routes");
//const router = require("./routes/Routes");
Students.hasMany(Subjects);

sequelize
  .sync()

//app.use(routes);

//app.use(routes);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');
  
  next();
});



app.use(routes);

//app.use(cors());


// app.get("/students",function(req,res) {
    
    
//     Students.count()
//     .then(count => {
//     const limit = 3;
//     const page = req.query.page;
//     const numberOfPages = Math.ceil(count / limit) ; 

//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;

//     Students.findAll({include : [{model : Subjects}] ,
//         offset: startIndex,
//         limit: limit    
//     })
//     .then(tempdata => {
//         console.log("params are " , req.query);
//         let sub;
//         let data = [];
//         console.log(tempdata)
       
       
        
//         data = tempdata.map((student)=>{
//             sub = student.subjects.map((element)=>{
//                 return element.subject
//             })
//             return {"id":student.id , "name": student.name , "email": student.email , "phoneNo": student.phoneNo , "subjects": sub.toString() , "numberOfPages":numberOfPages }
//         })
//         return data;
//     }).then(data => res.json(data))
    

//     })
//     //const count = await sequelize.query("select count * from students");
      
//    // const count = 11;
    
//     // let sql = "select * from students_details";
//     // connection.query(sql, function(err, results){
//     //     if (err) throw err;
//     //     res.send(results);
//     // })
  
// });

// app.get('/subjects',function(req,res){
//     Subjects.findAll({
//         where: {studentId:req.query.id}
//     })
//    .then(subjects=>{
//         //console.log(subjects);
//         res.json(subjects);
//     })
    
// })



// app.post("/postdetails",async (req,res)=>{
//     const name = req.body.name;
//     const email = req.body.email;
//     const phoneNo = req.body.phoneNo;
//     const subject = req.body.subject;
//     console.log(name,email,phoneNo,subject);
//     // const sqlInsert = "insert into student_info (Name,Email,PhoneNo,Subject) values (?,?,?,?)";
//     // connection.query(sqlInsert,[name,email,phoneNo,subject] , (err,result) => {
//     //     console.log(err);
//     // });

//     const user = await Students.create({name: name, email: email , phoneNo: phoneNo})
    
//     if(user){
//         const user_id = user.id;
//         var data = subject.map((val,i)=>{
//             return {subject: val , studentId: user_id}
//         });

//         await Subjects.bulkCreate(data);
//         console.log(data);
//     }

    
//     console.log(user);
//     res.json(user);
// }) 

app.listen(process.env.PORT ,function(){
    console.log("listening to" , process.env.PORT);
   
});
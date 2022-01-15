const express = require('express');
const router = express.Router();
const Students = require("../models/Students");
const Subjects = require("../models/Subject");
const sequelize = require("../database");
//const { Op } = require("sequelize");


router.get("/students",function(req,res) {
    
    
    Students.count()
    .then(count => {
    const limit = 3;
    const page = req.query.page;
    const numberOfPages = Math.ceil(count / limit) ; 
    console.log(numberOfPages);    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    Students.findAll({include : [{model : Subjects}] ,
        offset: startIndex,
        limit: limit,
        //where:{id:{[Op.eq]: 2}}    
    })
    .then(tempdata => {
        console.log("params are " , req.query);
        let sub;
        let data = [];
        console.log(tempdata)
       
       
        
        data = tempdata.map((student)=>{
            sub = student.subjects.map((element)=>{
                return element.subject
            })
            return {"id":student.id , "name": student.name , "email": student.email , "phoneNo": student.phoneNo , "subjects": sub.toString() , "numberOfPages":numberOfPages }
        })
        return data;
    }).then(data => res.json(data))
    

    })
    //const count = await sequelize.query("select count * from students");
      
   // const count = 11;
    
    // let sql = "select * from students_details";
    // connection.query(sql, function(err, results){
    //     if (err) throw err;
    //     res.send(results);
    // })
  
});

router.get('/subjects',function(req,res){
    Subjects.findAll({
        where: {studentId:req.query.id}
    })
   .then(subjects=>{
        //console.log(subjects);
        res.json(subjects);
    })
    
})



router.post("/postdetails",async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const subject = req.body.subject;
    console.log(name,email,phoneNo,subject);
    // const sqlInsert = "insert into student_info (Name,Email,PhoneNo,Subject) values (?,?,?,?)";
    // connection.query(sqlInsert,[name,email,phoneNo,subject] , (err,result) => {
    //     console.log(err);
    // });

    const user = await Students.create({name: name, email: email , phoneNo: phoneNo})
    
    if(user){
        const user_id = user.id;
        var data = subject.map((val,i)=>{
            return {subject: val , studentId: user_id}
        });

        await Subjects.bulkCreate(data);
        console.log(data);
    }

    
    console.log(user);
    res.json(user);
}) 

module.exports = router
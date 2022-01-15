import React,{useState} from 'react';
import './Form.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Form1 =()=> {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [subject,setSubject] = useState([]);
    const [checkedvalues,setCheckedvalues] = useState({
      subjects : {
        Maths : false,
        Physics : false,
        Chemistry : false,
        Biology : false,
        English : false
      }
    })

const checkboxHandler = (e) => {
  const {name , checked} = e.target;
  checkedvalues.subjects[name] = checked;
  //console.log(checkedvalues);
 // console.log(Object.keys(checkedvalues.subjects).filter(sub => checkedvalues.subjects[sub]));
  setSubject(Object.keys(checkedvalues.subjects).filter(sub => checkedvalues.subjects[sub]));
  //console.log(subject);
}

const clearhandler = () => {
  const cleared = {
    subjects : {
      Maths : false,
      Physics : false,
      Chemistry : false,
      Biology : false,
      English : false
    }
  }
  setName("");
  setEmail("");
  setPhoneNo("");
  setCheckedvalues(cleared)
}

const formhandler = () => {
  if(!name||!email||!phoneNo){
    alert("enter all fields");
  }
  else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    fetch(`${process.env.REACT_APP_BACKEND_URL}/postdetails`,{
      method: "post",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify({
        name,
        email, 
        phoneNo,
        subject
      })
    }).then(data => data.json())
    .then((res => {
      if(res.error){
        console.log(res.error)
      }
      clearhandler();
     
    }))
  }

  else{
    alert("enter a valid email");
  }


}

    return (
        <div>
             <div class="container">  
  <div className="contact" >
      
      <h3 style={{"color":"rgb(245 74 74)" , "font-weight":"900",fontSize:"2em",padding:"10%"}}>New Student Details</h3>
      
    
    
    <fieldset>
      <TextField style={{}} variant="filled" placeholder="Name" type="text" tabindex="1" value={name} onChange={(e) => {setName(e.target.value)}} required autofocus/>
    </fieldset>
    <fieldset>
      <TextField style={{}} variant="filled" placeholder="Email Address" type="email" tabindex="2" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
    </fieldset>
    <fieldset>
      <TextField style={{}} variant="filled" placeholder="Phone Number" type="tel" tabindex="3" value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}} required/>
    </fieldset>
    
      
      <div style={{width:"50%",textAlign:"left"}}><input type="checkbox" name="Maths" checked={checkedvalues.subjects.Maths} onChange={checkboxHandler}/><span style={{fontSize:"2em",fontWeight:"600",color:"black",marginLeft:"15%"}}>Maths</span></div>
      <div style={{width:"50%",textAlign:"left"}}><input type="checkbox" name="Physics" checked={checkedvalues.subjects.Physics} onChange={checkboxHandler}/><span style={{fontSize:"2em",fontWeight:"600",color:"black",marginLeft:"15%"}}>Physics</span></div>
      <div style={{width:"50%",textAlign:"left"}}><input type="checkbox" name="Chemistry" checked={checkedvalues.subjects.Chemistry} onChange={checkboxHandler}/><span style={{fontSize:"2em",fontWeight:"600",color:"black",marginLeft:"15%"}}>Chemistry</span></div>
      <div style={{width:"50%",textAlign:"left"}}><input type="checkbox" name="Biology" checked={checkedvalues.subjects.Biology} onChange={checkboxHandler}/><span style={{fontSize:"2em",fontWeight:"600",color:"black",marginLeft:"15%"}}>Biology</span></div>
      <div style={{width:"50%",textAlign:"left"}}><input type="checkbox" name="English" checked={checkedvalues.subjects.English} onChange={checkboxHandler}/><span style={{fontSize:"2em",fontWeight:"600",color:"black",marginLeft:"15%"}}>English</span></div>
    {/* <button onClick={clearhandler}>clear</button> */}
    <fieldset>
    
      <Button variant="contained"   onClick={formhandler}>Submit</Button>
    </fieldset>
    </div>
</div>
        </div>
    )
}

export default Form1;
import React , {useState,useEffect} from "react";
import Pagination from '@mui/material/Pagination';
import Record from './Record';
const Table = () => {
    const [datas,setDatas] = useState([]);
    let [pageNo , setPageNo] = useState(1);
    const [ numberOfPages , setNumberOfPages] = useState();
    // {
    //     "id" : 1,
    //     "name":"Suvrajeet",
    //     "email":"suvrajeet@gmail.com",
    //     "phoneNo":"9101693484",
    //     "subject":"Maths , science , english"
    // },
    // {
    //     "id" : 2,
    //     "name":"tanmay",
    //     "email":"tanmay@gmail.com",
    //     "phoneNo":"9001693484",
    //     "subject":"Maths , english"
    // },
    // {
    //     "id" : 3,
    //     "name":"Satish",
    //     "email":"satish@gmail.com",
    //     "phoneNo":"9801693484",
    //     "subject":"science , english"
    // },{
    //     "id" : 4,
    //     "name":"rontu",
    //     "email":"rontu@gmail.com",
    //     "phoneNo":"9101693384",
    //     "subject":"Maths , science "
    // },{
    //     "id" : 5,
    //     "name":"Manash",
    //     "email":"manash@gmail.com",
    //     "phoneNo":"9101693484",
    //     "subject":"Maths , science , english"
    // },
    // {
    //     "id" : 6,
    //     "name":"Akash",
    //     "email":"akash@gmail.com",
    //     "phoneNo":"9231693484",
    //     "subject":"Maths , english"
    // },
    // {
    //     "id" : 7,
    //     "name":"Rakesh",
    //     "email":"Rakesh12@gmail.com",
    //     "phoneNo":"9801453484",
    //     "subject":"science , english"
    // },{
    //     "id" : 8,
    //     "name":"Rinku",
    //     "email":"rinku_03@gmail.com",
    //     "phoneNo":"9103983384",
    //     "subject":"Maths , science "
    // }
    // ]);  


    useEffect(() => {
        
       
        fetch(`${process.env.REACT_APP_BACKEND_URL}/students?page=${pageNo}`,{
            method:'get',
            headers:{ "content-type" : "application/json"},
        }).then(res=>res.json())
        .then(dat =>{
            setDatas(dat)
            setNumberOfPages(dat[0].numberOfPages)
            console.log(dat[0].numberOfPages)
        });
     },[pageNo])

    return (
        <div className='container'>
            <table width="100%" border="1" style={{margin:"5vh"}}>
  <caption>Student Details</caption>
  <tr className="row1">
    <th width="5%">sl.no</th>
    <th className="col2">Name</th>
    <th>Email</th>
    <th>Phone no.</th>
    <th>Subject</th>
  </tr>
  {datas.map(data => {
      return(
          <Record slno = {data.id} Name = {data.name} Email = {data.email} PhoneNo = {data.phoneNo} Subject={data.subjects}/>
      )
  })}

</table>

<Pagination count={numberOfPages} color="primary" value = {pageNo} onChange={(event,value) => setPageNo(value)} />

        </div>
        
    )
}

export default Table;
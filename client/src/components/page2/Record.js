import React from 'react';

const Record =({slno,Name,Email,PhoneNo,Subject})=>{
    return(
        
            <tr>
                <td>{slno}</td>
                <td className="col2">{Name}</td>
                <td>{Email}</td>
                <td>{PhoneNo}</td>
                <td>{Subject}</td>
            </tr>
        
    )
}

export default Record;
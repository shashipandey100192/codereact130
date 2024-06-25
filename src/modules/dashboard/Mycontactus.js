import React, { useState } from 'react'
import { Myjsondata } from './Mydata'




function Mycontactus() {

const [sv,sf]=useState("")

const mychangeopt =(e)=>{
  console.log(e.target.value);
  sf(e.target.value)

}

;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>Data binding , data mapping</h1>
          
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">s.no</th>
                <th scope="col">Name</th>
                <th scope="col"  width="200">Company Name</th>
                <th scope="col">Email</th>
                <th scope="col">Bodytext</th>
                <th scope="col">status</th>
                
              </tr>
            </thead>
            <tbody>
            {Myjsondata.map((d) => {
            return (
              <tr>
                <th scope="row">{d.id}</th>
                <td>{d.name}</td>
                <td>
                  <select className='form-select' onChange={mychangeopt}>
                    <option>Nokia</option>
                    <option>Nokia1</option>
                    <option>Nokia2</option>
                  </select>
                </td>
                <td>{d.email}</td>
                <td>{d.body}</td>
                <td>
                  {sv==="Nokia" ? 'pending' : sv==="Nokia1" ? 'inactive' : 'active' }
                </td>
                
              </tr>
            )
          })}
              
             
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Mycontactus
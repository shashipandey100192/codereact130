import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Myaxiospage() {
    const [a ,b]=useState([])
    const myaxiosfunc = ()=>{
            axios.get('https://jsonplaceholder.typicode.com/users').then((d)=>{
                console.log(d.data);
                b(d.data);
            })
    }
    useEffect(()=>{
        myaxiosfunc();
    },[])


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1>Data binding , data mapping</h1>
          
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">s.no</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col" width="180">Actions</th>
              </tr>
            </thead>
            <tbody>
            {a.map((d) => {
            return (
              <tr>
                <th scope="row">{d.id}</th>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`view/`+d.id} className="btn btn-sm btn-primary">view</Link>
                  <Link to="#" className="btn btn-sm btn-danger ms-2">Del</Link>
                  <Link to="#" className="btn btn-sm btn-warning ms-2">Edit</Link>
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

export default Myaxiospage
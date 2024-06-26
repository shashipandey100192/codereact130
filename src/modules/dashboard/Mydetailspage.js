import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

function Mydetailspage() {
    const {id} = useParams();
    const [addr,setaddr]=useState([]);

    const [a ,b]=useState([])
    const myaxiosfunc = ()=>{
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((d)=>{
                console.log(d.data);
                b(d.data);
                setaddr(d.data.address);
            })
    }
    useEffect(()=>{
        myaxiosfunc();
    },[])


  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                <h1>Details Page <Link to="/dashboard/myaxios" className='btn btn-sm btn-primary'>Back</Link></h1>
                <hr/>
                <h1>id:{a.id}</h1>
                <h4>Name: {a.name}</h4>
                <h4>Phone: {a.phone}</h4>
                <h4>Email: {a.email}</h4>
                <h4>Address: {addr.city}</h4>
            </div>
        </div>
    </div>
  )
}

export default Mydetailspage
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Myfilterpage() {
    const [a ,b]=useState([])
    const myaxiosfunc = ()=>{
            axios.get('https://jsonplaceholder.typicode.com/users').then((d)=>{
                // console.log(d.data);
                b(d.data);
            })
    }
    useEffect(()=>{
        myaxiosfunc();
    },[])

    const [mysearch, setsearch]=useState("")
    const mydatasearch = (e)=>{
        // console.log(e.target.value);
        setsearch(e.target.value);
    }


  return (
    <div className='container-fluid'>

        <div className='row'>
            <div className='col-12 p-3'>
                <input type='text' className='form-control' placeholder='search by name' onInput={mydatasearch}/>
            </div>
           
            {a.filter((d)=>{
                return d.name===mysearch
            }).map((p)=>{
                return(
                    <div>
                    <p>{p.id}</p>
                    <p>{p.name}</p>
                    <p>{p.username}</p>
                    <p>{p.email}</p>
                    </div>
                )
            })
            
            }
            



            {/* {a.map((d)=>{
                return(
                    <div className='col-md-3'>
                    <div className='border bg-danger p-3'>
                        <h4>Ids:{d.id}</h4>
                        <p>Name:{d.name}</p>
                        <p>UserName:{d.username}</p>
                        <p>Email id:{d.email}</p>
                    </div>
                </div>
                )
            })} */}


            
        </div>
    </div>
  )
}

export default Myfilterpage
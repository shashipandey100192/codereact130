import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Myaxiospage() {
    const [a ,b]=useState([])
    const myaxiosfunc = ()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((d)=>{
                console.log(d.data);
                b(d.data);
            })
    }
    useEffect(()=>{
        myaxiosfunc();
    },[])


  return (
    <div>Myaxiospage</div>
  )
}

export default Myaxiospage
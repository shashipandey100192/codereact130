import React from 'react'
import Mychild1 from './Mychild1'
import Mychild2 from './Mychild2'

function Myparent() {
const name="kumar";
const myfunc = ()=>{
    alert("weclome to child");
}

  return (
   
    <div className='container'>
        <div className='row'>
            <div className='col-12 bg-info p-3'>
                <h2>{name}</h2>
            </div>
            <div className='col-6 border'>
                <h1>child 1</h1>
                <Mychild1 xyz="this is name" name={name} cusfunc={myfunc}></Mychild1>
            </div>

            <div className='col-6 border'>
                <h1>Child 2</h1>
                <Mychild2></Mychild2>
                
            </div>
        </div>
    </div>
  )
}

export default Myparent
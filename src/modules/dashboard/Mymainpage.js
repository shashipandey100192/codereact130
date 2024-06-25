import React, { useState } from 'react'
import myimg from '../../images/img4.jpg';
const imgone = "https://img.freepik.com/free-photo/digital-art-moon-wallpaper_23-2150918875.jpg";



function Mymainpage() {
const [x,y]=useState("mohan")

const changename = ()=>{
  y("ravi");
}

const [cback, setback]=useState("blue")
const [tcol, settcol]=useState("white")
const changeback = (e)=>{
  console.log(e);
  setback(e.target.value);

}
const textcolor = (e)=>
{
  settcol(e.target.value);
}


  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                 
            <h1 style={{backgroundColor:`${cback}`,color:`${tcol}`}}>skdfjsdh {x}</h1>
            <input type='button' value="change" onClick={changename}/>
            <input type='color' onInput={changeback}/>
            <input type='color' onInput={textcolor}/>
            </div>
        </div>
        <div className='row'>
          <select>
            <option>danger</option>
            <option>success</option>
            <option>warning</option>
            <option>info</option>
          </select>
          <div className='bg-danger h1'>this is danger msg</div>
          <div className='bg-success h1'>this is danger msg</div>
          <div className='bg-warning h1'>this is danger msg</div>
          <div className='bg-info h1'>this is danger msg</div>
        </div>
    <img src={myimg} alt="sdjfhsdjf" width={300}/>
    <img src='photo/img5.jpg' width={300} alt='skdhfjds'/>
    <img src={imgone}/>

    </div>
  )
}

export default Mymainpage
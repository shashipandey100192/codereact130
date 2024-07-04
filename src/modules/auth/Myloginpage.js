import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Myloginpage() {

    const myredirec = useNavigate();
// const [sv,sf]=useState({
//     email:'',
//     password:''
// })

const [email, setemail]=useState();
const [pass,setpass]=useState();


const emailchange = (a)=>{
        setemail(a.target.value);
        console.log(a);      
}

const passchange = (a)=>{
    setpass(a.target.value);
}

const mysubmit = ()=>{
        const a = document.getElementById('email').value;
        const b = document.getElementById('pass').value;
       if(a==="" || b==="")
        {
            alert("please fill");
        }
        else
        {
            alert("success full");
            myredirec('dashboard');
        }
   
}




    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-sm-5 p-3'>
                    <div className='container-fluid border p-5 bg-light shadow'>
                        <div className='row'>
                            <div className='col-12 p-2 mt-2'>
                                <label className="form-label"> <HiOutlineMail /> Email address</label>
                                <input type='text' className='form-control' placeholder='email id' value={email} name="email" onInput={emailchange} id='email'/>
                            </div>
                            <div className='col-12 p-2 mt-2'>
                                <label className="form-label"> <TbPasswordFingerprint /> Password</label>
                                <input type='password' className='form-control' placeholder='password' value={pass} name="pass" onInput={passchange} id='pass'/>
                            </div>
                            <div className='col-12 p-2 mt-2 text-center'>
                                <input type='button' value="submit" className='btn btn-success' onClick={mysubmit} />
                                <input type='reset' value="cancel" className='btn btn-danger ms-3' />
                                <Link to="registor">New Registor</Link>
                                <Link to="dashboard" className='btn'>dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myloginpage
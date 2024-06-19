import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Myloginpage() {
    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-sm-5 p-3'>
                    <div className='container-fluid border p-5 bg-light shadow'>
                        <div className='row'>
                            <div className='col-12 p-2 mt-2'>
                                <label className="form-label"> <HiOutlineMail /> Email address</label>
                                <input type='text' className='form-control' placeholder='email id' />
                            </div>
                            <div className='col-12 p-2 mt-2'>
                                <label className="form-label"> <TbPasswordFingerprint /> Password</label>
                                <input type='password' className='form-control' placeholder='password' />
                            </div>
                            <div className='col-12 p-2 mt-2 text-center'>
                                <input type='button' value="submit" className='btn btn-success' />
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
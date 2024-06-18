import React from 'react';
import { Link } from 'react-router-dom';

function Myregistorpage() {
    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-sm-8 p-3'>
                    <div className='container-fluid border p-5 bg-light shadow'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <h2>New User Registor Page</h2>
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Full Name</label>
                                <input type='text' className='form-control' placeholder='Full Name' />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Email Id</label>
                                <input type='email' className='form-control' placeholder='email' />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Phone No</label>
                                <input type='text' className='form-control' placeholder='phone' />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">DOB</label>
                                <input type='date' className='form-control' />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Gender</label><br/>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="male"/>
                                            <label class="form-check-label">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="female"/>
                                            <label class="form-check-label">Female</label>
                                    </div>
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Course</label>
                                <select className='form-select'>
                                    <option>Mern</option>
                                    <option>Mean</option>
                                    <option>java</option>
                                    <option>UI/UX</option>
                                </select>
                            </div>

                            <div className='col-12 p-2 mt-2 text-center'>
                                <input type='button' value="Registor Now" className='btn btn-success' />
                                <input type='reset' value="cancel" className='btn btn-danger ms-3' />
                                <Link to="/">login page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myregistorpage
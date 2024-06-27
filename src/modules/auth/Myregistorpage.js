import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


var mydata = [];
function Myregistorpage() {

    const {register, handleSubmit,formState: { errors }} = useForm()

    const mysubmit= (e)=>{
        console.log(e);
        mydata.push(e);
        console.log(mydata);
    }


    return (
        <form  onSubmit={handleSubmit(mysubmit)}>
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
                                <input type='text' className='form-control' placeholder='Full Name' {...register('fullname',{required:true})} />
                                {errors.fullname && <p className='text-danger'> fullname is required</p>}
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Email Id</label>
                                <input type='email' className='form-control' placeholder='email' {...register('email',{required:true})}/>
                                {errors.email && <p className='text-danger'> email is required</p>}
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Phone No</label>
                                <input type='text' className='form-control' placeholder='phone' {...register('phone',{required:true,pattern:/[0-9]{10}/i})}/>
                                {errors.phone && <p className='text-danger'> phone is required</p>}
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">DOB</label>
                                <input type='date' className='form-control'{...register('dob')} />
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Gender</label><br />
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="male" {...register('gender')}/>
                                    <label class="form-check-label">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="female" {...register('gender')} />
                                    <label class="form-check-label">Female</label>
                                </div>
                            </div>
                            <div className='col-6 p-2 mt-2'>
                                <label className="form-label">Course</label>
                                <select className='form-select' {...register('course')}>
                                    <option>Mern</option>
                                    <option>Mean</option>
                                    <option>java</option>
                                    <option>UI/UX</option>
                                </select>
                            </div>

                            <div className='col-12 p-2 mt-2 text-center'>
                                <input type='submit' value="Registor Now" className='btn btn-success' />
                                <input type='reset' value="cancel" className='btn btn-danger ms-3' />
                                <Link to="/">login page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Myregistorpage
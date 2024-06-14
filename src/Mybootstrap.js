import React, { Fragment } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Container, Row, Col,Button } from 'react-bootstrap';
import Mymui from './Mymui';



function Mybootstrap() {
    return (
        <Fragment>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>react bootstrap</h1>
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                    </Col>
                </Row>
            </Container>
            <Mymui></Mymui>


        </Fragment>
    )
}

export default Mybootstrap
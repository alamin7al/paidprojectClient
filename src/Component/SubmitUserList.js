import React, { useEffect, useState } from 'react';
import { Card, FloatingLabel, Form, ProgressBar } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../img/blank-profile-picture-973460__480.png'
import img2 from '../img/download (1).jpg'
const SubmitUserList = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/casu')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
       
        fetch('http://localhost:5000/comment', {
           
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }

               

            })

    }
    





    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-8">
                    <Card className='shadow-sm p-3 mb-5 bg-body rounded' style={{ width: '100%' }}>
                        <img src={img2} style={{ width: '100%', height: '250px' }} alt="" />
                        <div>
                            <h5 className='text-start my-4'> Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Perferendis quia provident amet repellat? <br /> Eius, voluptate? </h5>
                            <p className='text-start my-3'>Lorem ipsum dolor sit.</p>
                            <p className='text-start my-3'>Lorem ipsum dolor sit.</p>
                            <p className='text-start my-3'>Lorem ipsum dolor sit.</p>
                            <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, est. </h6>
                            <ProgressBar now={60} />
                            <h6 className='text-start my-4'> Why You Want TO Join </h6>

                            <form className="shipping-form w-75  " onSubmit={handleSubmit(onSubmit)}>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    {...register("comment",)}
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <div className="text-start">
                            <button type='submit' className='btn btn-outline-dark mt-3'>Submit</button>

                            </div>
                            </form>
                            <div className="text-start">
                                <Link to='/social'>
                                    <button className='w-75 btn btn-outline-danger my-4'>NO i'll Not Intstead</button>
                                </Link>

                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className='shadow p-3 mb-5 bg-body rounded' style={{ width: '100%' }}>
                        <div className=" justify-content-start align-items-center">

                            {
                                user.map(s => <>
                                    <div className="d-flex">

                                        <img src={img} style={{ width: '30px', height: '30px' }} alt="" />
                                        <p className='ms-3 mt-2 fw-bold  '> {s.name} <em> Chipeed In $20 </em> </p>
                                    </div>
                                </>)
                            }




                        </div>
                    </Card>


                </div>
            </div>
        </div>
    );
};

export default SubmitUserList;
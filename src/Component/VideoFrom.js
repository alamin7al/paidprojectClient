import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import img from '../img/download.jpg'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const VideoFrom = () => {
    const location = useLocation()
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/casu', {
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

                history.push('/submits');

            })

    }
    return (
        <div className='mx-3'>
            <div className="row">
                <div className="col-md-6">
                    <img src={img} class="w-100 h-100" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="">
                        <h5> Lorem ipsum dolor sit amet consectetur <br /> adipisicing. </h5>
                        <p>Help Get It </p>
                        <ProgressBar now={60} />
                        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Cupiditate, veniam? </p>
                        <div>
                            <Card style={{ width: '100%', height: '30%', padding: '10px' }}>

                                <form className="shipping-form w-75 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                                    <div className=" text-start">
                                        <label for="exampleInputEmail1" className="form-label">User Name</label>
                                        <input  {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className=" text-start">
                                        <label for="exampleInputPassword1" className="form-label">User Email</label>
                                        <input  {...register("email",)} className="form-control" id="exampleInputPassword1" />
                                    </div>


                                    {errors.email && <span className="error">This field is required</span>}

                                    <div className=" text-start">
                                        <label for="exampleInputPassword1" className="form-label"> Whats App Number</label>
                                        <input placeholder="Address"  {...register("number")} className="form-control" id="exampleInputPassword1" />

                                    </div>
                                    <div className=" text-start">
                                        <label for="exampleInputPassword1" className="form-label"> Country </label>
                                        <input placeholder="Address"  {...register("country")} className="form-control" id="exampleInputPassword1" />

                                    </div>
                                    <div className=" text-start">

                                        <label for="exampleInputPassword1" className="form-label">City Name</label>
                                        <input placeholder="City"  {...register("city")} className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className=" text-start">
                                        <label for="exampleInputPassword1" className="form-label">Postal Code</label>
                                        <input placeholder="phone number" {...register("code")} className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="form-check text-start my-2">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Lorem ipsum dolor sit amet,
                                        </label>
                                    </div>
                                    {/* <Link to='/submits'>
                                        
                                    </Link> */}
                                    <button class="btn my-3 btn-outline-success  w-100" type='submit'>
                                            Co-Govern The Cause
                                        </button>
                                    <p className='text-start'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae cum eos iste, dignissimos ipsa similique! </p>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoFrom;
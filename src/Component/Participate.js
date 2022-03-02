import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import img from '../img/blank-profile-picture-973460__480.png'

const Participate = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])


    return (
        <div>
            <div className="text-start">
                <h4 className='fw-bold'>why sign</h4>
                <p className='text-muted mb-5'>See what others are saying about this public interest cause, why it's important to them and why they're joining to co-govern the cause, and share your reasons for joining (this will mean a lot to the Cause Leader) .</p>


                {
                    user.map(s =>
                        <Card className='mb-3 p-4' style={{ width: '100%' }}>
                            <div className="">
                                <div className="d-flex justify-content-start align-items-center">
                                    <img className='rounded ' src={img} style={{ width: '30px', height: '10%' }} alt="" />
                                    <div className='ms-3'>
                                        <h5>Al amin</h5>
                                        <p>Hace 4 Dates</p>
                                    </div>
                                </div>
                                <p className='text-muted text-start'>
                                    {s.comment}
                                </p>
                            </div>
                            <p className='text-end text-decoration-underline'>Disclimer</p>
                        </Card>
                    )
                }



            </div>
        </div>
    );
};

export default Participate;
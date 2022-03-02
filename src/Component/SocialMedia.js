import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../img/blank-profile-picture-973460__480.png'
import img2 from '../img/download (1).jpg'
import img3 from '../img/fac.jpg'
import img4 from '../img/gmail.png'
import img5 from '../img/message.jpg'
import img6 from '../img/twitter.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessBishop, faCoffee } from '@fortawesome/free-solid-svg-icons'
const SocialMedia = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-8">
                    <Card className='shadow-sm p-3 mb-5 bg-body rounded' style={{ width: '100%' }}>
                        <img src={img2} style={{ width: '100%', height: '250px' }} alt="" />
                        <div>
                            <h5 className='text-start mb-1'> Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Perferendis quia provident amet repellat? <br /> Eius, voluptate? </h5>

                            <div className="text-start d-flex justify-content-center align-items-center">
                                <button className='w-50 btn btn-outline-dark mb-1 mt-4 btn-sm'>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img style={{ width: '30px', height: '30px' }} src={img3} alt="" />
                                        <p className='mt-3 ms-2'>Share on Facebook</p>
                                    </div>
                                </button>
                            </div>
                            <div className="text-start d-flex justify-content-center align-items-center">
                                <button className='w-50 btn btn-outline-dark mb-1 btn-sm'>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img style={{ width: '30px', height: '30px' }} src={img4} alt="" />
                                        <p className='mt-3 ms-2'>Share on Facebook</p>
                                    </div>
                                </button>
                            </div>
                            <div className="text-start d-flex justify-content-center align-items-center">
                                <button className='w-50 btn btn-outline-dark mb-1 btn-sm'>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img style={{ width: '30px', height: '30px' }} src={img5} alt="" />
                                        <p className='mt-3 ms-2'>Share on Facebook</p>
                                    </div>
                                </button>
                            </div>
                            <div className="text-start d-flex justify-content-center align-items-center">
                                <button className='w-50 btn btn-outline-dark mb-1 btn-sm'>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img style={{ width: '30px', height: '30px' }} src={img6} alt="" />
                                        <p className='mt-3 ms-2'>Share on Facebook</p>
                                    </div>
                                </button>
                            </div>



                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className='shadow p-3 mb-5 bg-body rounded' style={{ width: '100%' }}>
                        <div className="d-flex justify-content-start align-items-center">
                            <img src={img} style={{ width: '30px', height: '30px' }} alt="" />
                            <p className='ms-3 mt-2'> Lorem ipsum dolor sit. <em> Chipeed In $20 </em> </p>
                        </div>
                    </Card>


                </div>
            </div>
        </div>
    );
};


export default SocialMedia;
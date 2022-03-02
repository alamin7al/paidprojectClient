import { button } from 'bootstrap';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import History from './History';
import Participate from './Participate';
import Pattions from './Pattions';
import Update from './Update';

const DynamicDeshbord = () => {
    const [apps, setApps] = useState('history')
    return (
        <div className='container my-5'>
            <div className="row">
         
                <div className="d-flex mt-3">
                    <button className='ms-3 btn btn-outline-dark' onClick={() => setApps('history')}>history</button>
                    <button className='ms-3 btn btn-outline-dark' onClick={() => setApps('particioent')}>particioent</button>
                    <button className='ms-3 btn btn-outline-dark' onClick={() => setApps('update')}>particioent</button>
                    <button className='ms-3 btn btn-outline-dark' onClick={() => setApps('prettions')}>particioent</button>

                </div>
            
              
                <div className="col-md-9">
                    <hr />
                    {
                        apps === 'history' && <History></History>
                    }
                    {
                        apps === 'particioent' && <Participate></Participate>
                    }
                    {
                        apps === 'update' && <Update></Update>
                    }
                    {
                        apps === 'prettions' && <Pattions></Pattions>
                    }
                 
                </div>
                <div className="col-md-3">
add
                </div>
            </div>

        </div>
    );
};

export default DynamicDeshbord;
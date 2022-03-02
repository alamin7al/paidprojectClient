import React from 'react';
import DynamicDeshbord from './DynamicDeshbord';
import Home from './Home';

import VideoFrom from './VideoFrom';

const HomeAll = () => {
    return (
        <div>
      
            <Home></Home>
            <VideoFrom></VideoFrom>
            <DynamicDeshbord></DynamicDeshbord>
        </div>
    );
};

export default HomeAll;
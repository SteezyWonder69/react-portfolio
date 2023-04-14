import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Spencer2 from '../../../static/assets/Images/contact/Spencer2.jpg'

export default function () {
    return (
        <div className='contact-wrapper'>
            <div className='left-column'
                style={{
                    background: "url(" + Spencer2 + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></div>

            <div className='right-column'>
                <div className='phone'>
                    <FontAwesomeIcon className='icon' icon="phone" />
                    555-555-5555
                </div>

                <div className='email'>
                    <FontAwesomeIcon className='icon' icon='envelope'/>
                    ssuckow05@gmail.com
                </div>
            </div>
        </div>
    );
};
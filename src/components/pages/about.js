import React from 'react';

import Spencer from "../../../static/assets/Images/about/Spencer.jpg"

export default function () {
    return (
        <div className='about-wrapper'>
            <div className='left-column'
                style={{
                    background: "url(" + Spencer + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom"
                }}
                ></div>

            <div className='right-column'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis turpis, iaculis eu rhoncus ut, consectetur ut eros. Morbi varius massa urna, eget auctor tellus fermentum nec. Nullam sed purus ultricies, scelerisque massa id, aliquet dolor. Fusce congue eget risus sed tristique. Sed vitae nisl ac mauris lacinia porta vitae ut lectus. Etiam dictum mauris tellus, sed viverra nisl blandit ac. Phasellus sodales quis risus id gravida. Donec congue turpis vitae erat viverra, non ornare magna vulputate. Vivamus commodo vel magna ullamcorper vestibulum. Sed sagittis molestie euismod.

                    Etiam cursus nulla mi, et semper erat dapibus in. Aliquam sed augue ex. Donec et feugiat ante. Ut at nibh nisl. Cras iaculis semper nisi. Nullam quis posuere felis. Morbi laoreet diam ex, at commodo enim gravida sit amet. Vivamus aliquam tempus ex, in luctus metus eleifend vel.
                </p>
            </div>
        </div>
    );
};
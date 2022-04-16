import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';


function Header() {

    const [value, setValue] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div className='mb-5' />
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4 '>
                            <Clock className='clockcenter' size={100} value={value} />
                            <br />
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header
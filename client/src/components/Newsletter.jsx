import React from 'react';
import { Send } from '@material-ui/icons';

const Newsletter = () => {
    return (
        <div id='newsletter' className='d-flex justify-content-center align-items-center mt-5 p-5 newsletter'>
            <div className='text-center'>
                <h1>Newsletter</h1>
                <p>get timely updates from your favourite products</p>
                <div className='input-group'>
                    <input type="text" className="form-control shadow-none" />
                    <button style={{backgroundColor:'teal'}} className='btn btn-primary px-3'><Send/></button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter

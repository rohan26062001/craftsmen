import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='row w-100 footer text-center'>
            <div className="col-sm-4 pt-3 ps-4">
                <div className='w-100'><img style={{width:'3rem'}} src={logo} alt="" /></div>
                <p className='my-3'>There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don’t look even slightly believable.
                </p>
                <div className='w-100 d-flex justify-content-around'>
                    <button className='btn socialIcon' style={{backgroundColor:'#3B5999'}} ><Facebook /></button>
                    <button className='btn socialIcon' style={{backgroundColor:'#E4405F'}} ><Instagram /></button>
                    <button className='btn socialIcon' style={{backgroundColor:'#55ACEE'}} ><Twitter /></button>
                    <button className='btn socialIcon' style={{backgroundColor:'#E60023'}} ><Pinterest /></button>
                </div>
            </div>
            <div className="col-sm-4 pt-3">
                <h5 className='text-capitalize'>useful links</h5>
                <div className='mt-5 d-flex justify-content-around justify-content-md-between'>
                    <div>
                        <p className='text-capitalize'>Home</p>
                        <p className='text-capitalize'>Man fashion</p>
                        <p className='text-capitalize'>accessories</p>
                        <p className='text-capitalize'>order tracking</p>
                        <p className='text-capitalize'>wishlist</p>
                    </div>
                    <div>
                        <p className='text-capitalize'>cart</p>
                        <p className='text-capitalize'>woman fashion</p>
                        <p className='text-capitalize'>my account</p>
                        <p className='text-capitalize'>term</p>
                        <p className='text-capitalize'>wishlist</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 pt-3">
                <h5 className='text-capitalize'>contact</h5>
                <div className='mt-5'>
                    <div><Room /><span className='ms-3'>622 Dixie Path , South Tobinchester 98336</span></div>
                    <div className='my-4'><Phone /><span className='ms-3'>+1 234 56 78</span></div>
                    <div><MailOutline /><span className='ms-3'>contact@lama.dev</span></div>
                </div>
            </div>
        </div>
    )
}

export default Footer

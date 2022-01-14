import React from 'react';
import { sliderItems } from '../data'

const Slider = () => {
    return (
        <div className='container-fluid'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-6"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphIkjh5A7y76bOoIYUnB6FOjYikzkGIlYeA&usqp=CAU" className="d-block w-100" alt="..." /></div>
                            <div className="col-md-6">
                                <div className='h-100 d-flex justify-content-center align-items-center'>
                                    <div className='text-center'>
                                        <h1>WINTER SALE</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem.</p>
                                        <button className='btn btn-primary'>SHOW NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {sliderItems.map((item)=>(
                        <div key={item.id} className='carousel-item'>
                            <div className="row">
                            <div className="col-md-4 d-flex justify-content-center"><img src={item.img} style={{objectFit: 'cover'}} alt="" /></div>
                            <div className="col-md-8">
                                <div className='h-100 d-flex justify-content-center align-items-center'>
                                    <div className='text-center'>
                                        <h1>{item.title}</h1>
                                        <p>{item.desc}</p>
                                        <button className='btn btn-primary'>SHOW NOW</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <i className="bi bi-caret-left-fill text-dark"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <i className="bi bi-caret-right-fill text-dark"></i>
                </button>
            </div>
        </div>
    )
}

export default Slider

import React from 'react'
const checkoutborder = ()=>{
    
}

const Checkout = () => {
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        <div className="col-3"><h1>Your Bag</h1></div>
                        <div className="col-6 my-3"><p>3 Items</p></div>
                        <div className="col-3 my-3"><a href="#">continue shopping</a></div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <img src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className="col my-auto">
                            <h3>sweater</h3>
                            <p>gender: Female</p>
                            <p>color: blue</p>
                            <p>size: xl</p>
                        </div>
                        <div className="col my-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, inventore.                
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className="col my-auto">
                            <h3>sweater</h3>
                            <p>gender: Female</p>
                            <p>color: blue</p>
                            <p>size: xl</p>
                        </div>
                        <div className="col my-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, temporibus.                 
                        </div>                        
                    </div>
                </div>
                
                <div className="col mt-5" style={{backgroundColor: '#e6f3ff'}}>
                    <h3 className='py-2 mt-3' style={{backgroundColor: 'black',color: "white"}}>Checkout</h3>
                    <h5>order summary</h5>
                    <div className="container-fluid my-3 py-2" style={{backgroundColor: 'white'}}>
                        <div className="row">
                            <div className="col-9">Item</div>
                            <div className="col-3">3</div>
                        </div> <hr/>                       
                        <div className="row">
                            <div className="col-9">Delivary</div>
                            <div className="col-3">Free</div>
                        </div><hr/>
                        <div className="row">
                            <div className="col-9"><b>Total</b></div>
                            <div className="col-3"><b>₹5088</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
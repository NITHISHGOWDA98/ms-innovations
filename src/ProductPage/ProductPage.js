import React from 'react'
import "./productpage.css"
import flipname from '../images/flipname.jpg';
import catpenstand from '../images/catpenstand.jpg';
import namepenstand from '../images/namepenstand.jpg';
import penstand from '../images/penstand.jpg';
import photokeychain from '../images/photokeychain.jpg';
import robomobilestand from '../images/robomobilestand.jpg';
import ironarccreator from '../images/ironarccreator.jpg';

import { Link } from 'react-router-dom'

const ProductPage = () => {
    return (
        <div className='productpagemaincontainer' >
            <div className='  productpageheader'>
                <Link to="/" id="main-header">
                    <h1 className='  productpageheadertitle'  >M S INNOVATIONS</h1>
                </Link>
                <ul className='  productpageheadercenter'>
                    {/* Update the onClick event for the "About Us" link */}
                    <li >About Us</li>
                    <li >Products</li>
                    <li >Service</li>
                    <li >Blogs</li>
                    <li >Contact Us</li>
                </ul>
                <div className='  productpageheaderbuttons'>
                    <div className='  productpageheaderbutton'>Sign in</div>
                    <div className='  productpageheaderbutton'>Sign up</div>
                </div>

            </div>

            <div className='productpagecontent'>
                <div className="product-item">
                    <img src={flipname} alt='imagemain' className='product-resized-image' />
                    <div><b>Flip Name</b>
                    <div className="product-item-price">Price :- 650</div>
                    <div className="product-item-buttons" >
                    <div  className="product-item-button2">Add to cart</div>
                    <div  className="product-item-button1">Buy Now</div>
                   
                    </div>
                    </div>
                    
                </div>
                <div className="product-item">
                    <img src={catpenstand} alt='imagemain' className='product-resized-image' />
                    <div><b>Cat Pen Stand</b>
                    <div className="product-item-price">Price :- 550</div>
                    <div className="product-item-buttons" >
                    <div  className="product-item-button2">Add to cart</div>
                    <div  className="product-item-button1">Buy Now</div>
                   
                    </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={namepenstand} alt='imagemain' className='product-resized-image' />
                    <div><b>Name Pen Stand</b>
                    <div className="product-item-price">Price :- 650</div>
                    <div className="product-item-buttons" >
                    <div  className="product-item-button2">Add to cart</div>
                    <div  className="product-item-button1">Buy Now</div>
                
                    </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={penstand} alt='imagemain' className='product-resized-image' />
                    <div><b>Pen Stand</b>
                    <div className="product-item-price">Price :- 550</div>
                    <div className="product-item-buttons" >
                    <div  className="product-item-button2">Add to cart</div>
                    <div  className="product-item-button1">Buy Now</div>
                   
                    </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={photokeychain} alt='imagemain' className='product-resized-image' />
                    <div><b>Photo Key Chain (pack of 3)</b>
                    <div className="product-item-price">Price :- 350</div>
                    <div className="product-item-buttons" >
                    <div  className="product-item-button2">Add to cart</div>
                    <div  className="product-item-button1">Buy Now</div>
                  
                    </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={robomobilestand} alt='imagemain' className='product-resized-image' />
                    <div><b>Robo Mobile Stand</b>
                    <div className="product-item-price">Price :- 750</div>
                    <div className="product-item-buttons" >
                    <div  className="product-item-button2">Add to cart</div>
                    <div  className="product-item-button1">Buy Now</div>
                   
                    </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={ironarccreator} alt='imagemain' className='product-resized-image' />
                    <div><b>IronMan Arc Reactor</b>
                    <div className="product-item-price">Price :- 3500</div>
                    <div className="product-item-buttons" >
                    <div  className="product-item-button2">Add to cart</div>
                    <div  className="product-item-button1">Buy Now</div>
                   
                    </div>
                  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductPage
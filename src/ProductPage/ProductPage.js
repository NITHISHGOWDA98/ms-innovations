import React from 'react'
import "./productpage.css"

const ProductPage = () => {
    return (
        <div className='productpagemaincontainer' >
            <div className='  productpageheader'>
                <h1 className='  productpageheadertitle'  >M S INNOVATIONS</h1>
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

            <div className='productpagecontent'>Products will display here</div>
        </div>
    )
}

export default ProductPage
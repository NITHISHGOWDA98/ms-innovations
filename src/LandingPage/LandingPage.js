import React, { useRef } from 'react';
import msInnovationsImg from '../images/msinnovationsimg.jpg';
import { Link } from 'react-router-dom';

import "./landingpage.css";

export const LandingPage = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);
  const sixthSectionRef = useRef(null);
 
  const scrollToSection = (targetRef) => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='landingpage'>
      <header className='landingpageheader'>
        <h1 className='landingpageheadertitle' onClick={() => scrollToSection(firstSectionRef)} >M S INNOVATIONS</h1>
        <ul className='landingpageheadercenter'>
          {/* Update the onClick event for the "About Us" link */}
          <li onClick={() => scrollToSection(secondSectionRef)}>About Us</li>
        <li onClick={() => scrollToSection(thirdSectionRef)}>Products</li>
          <li  onClick={() => scrollToSection(fourthSectionRef)}>Service</li>
          <li  onClick={() => scrollToSection(fifthSectionRef)}>Blogs</li>
          <li  onClick={() => scrollToSection(sixthSectionRef)}>Contact Us</li>
        </ul>
        <div className='landingpageheaderbuttons'>
          <div className='landingpageheaderbutton'>Sign in</div>
          <div className='landingpageheaderbutton'>Sign up</div>
        </div>
      </header>
      <section className='landingpagecontent' ref={firstSectionRef}>
        <div className='landingpagecontentright'>
          <h1>
          Bring Imagination to Reality <br/> from Precision 3D Printing  <br/>with 
          <span  > M S Innovations</span> 
          </h1>
          <div className='landingpagecontentrightbuttons'>
          <Link to="/products">
            <button className='landingpagecontentrightbutton'>Shop Now</button>
          </Link>
            <button className='landingpagecontentrightbutton'>Show Demo</button>
          </div>

   
        </div>
      
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>


      </section>
      


      <section className='landingpagecontent' ref={secondSectionRef} >
        <div className='landingpagecontentright'>
          <h1>
          About us
            <span> M S Innovations</span>
          </h1>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      <section className='landingpagecontent'  ref={thirdSectionRef}  >
        <div className='landingpagecontentright'>
          <h1>
           Products
            <span> M S Innovations</span>
          </h1>
        </div>
        <div className='landingpagecontentleft' >
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      <section className='landingpagecontent' ref={fourthSectionRef} >
        <div className='landingpagecontentright'>
          <h1>
           Service
            <span> M S Innovations</span>
          </h1>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      <section className='landingpagecontent' ref={fifthSectionRef}>
        <div className='landingpagecontentright'>
          <h1>
           Blogs
            <span> M S Innovations</span>
          </h1>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      <section className='landingpagecontent' ref={sixthSectionRef} >
        <div className='landingpagecontentright'>
          <h1>
          Contact us
            <span> M S Innovations</span>
          </h1>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      
    


    </div>
  )
}

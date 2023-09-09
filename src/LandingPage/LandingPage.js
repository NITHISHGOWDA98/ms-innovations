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
          <li onClick={() => scrollToSection(fourthSectionRef)}>Service</li>
          <li onClick={() => scrollToSection(thirdSectionRef)}>Products</li>
          <li onClick={() => scrollToSection(fifthSectionRef)}>Blogs</li>
          <li onClick={() => scrollToSection(secondSectionRef)}>About Us</li>
          <li onClick={() => scrollToSection(sixthSectionRef)}>Contact Us</li>
        </ul>
        <div className='landingpageheaderbuttons'>
          <div className='landingpageheaderbutton'>Sign in</div>
          <div className='landingpageheaderbutton'>Sign up</div>
        </div>
      </header>
      <section className='landingpagecontent' ref={firstSectionRef}>
        <div className='landingpagecontentright'>
          <h1>
            Printing the future one <br />Layer at a time <br />
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

      <section className='landingpagecontent' ref={fourthSectionRef} >
        <div className='landingpagecontentright'>
          <h1>
            Services

          </h1> 
        </div>

      </section>

      <section className='landingpagecontent' ref={thirdSectionRef} >
        <div className='landingpagecontentright'>
          <h1 className='headings'>Personalized Gifts</h1>

          <div className='personalizedgift'>
            Show your loved ones<br />how much you care with a <br />personalized 3D printed gift.


            <br />

          </div>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      <section className='landingpagecontent' ref={thirdSectionRef} >
        <div className='landingpagecontentright'>
          <h1 className='headings'>Miniature Home Model</h1>

          <div className='personalizedgift'>
            Plan your dream home <br />with our 3D printed <br />Miniature Home Models


            <br />

          </div>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      <section className='landingpagecontent' ref={thirdSectionRef} >
        <div className='landingpagecontentright'>
          <h1 className='headings'>Proto-Type</h1>

          <div className='personalizedgift'>
            Get Accurate and Detailed <br />with our 3D printing <br />


            <br />

          </div>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>
      <section className='landingpagecontent' ref={thirdSectionRef} >
        <div className='landingpagecontentright'>
          <h1 className='headings'>Create your own</h1>

          <div className='personalizedgift'>
           Bring your creativity to life<br />with our 3D printing <br />


            <br />

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


          </h1>
          <div className='aboutuscontent'>
            Welcome to M S Innovations!<br /> <br />

            Founded in 2023 by two visionary brothers, M S Innovations is a pioneering provider<br />  of 3D printing solutions and personalized gifts based in Bangalore, India. Our mission<br /> is to spread awareness about the incredible potential of 3D printing technology across<br /> the country.<br />  <br />

            As a company run by two brothers, M S Innovations embodies the spirit of<br /> collaboration, innovation, and a shared passion for pushing the boundaries of what is <br />possible. With a deep understanding of the transformative power of 3D printing, we <br />have built a reputation for excellence and craftsmanship in our industry.
          </div>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>


      <section className='landingpagecontent' ref={fifthSectionRef}>
        <div className='landingpagecontentright'>
          <h1>
            Blogs

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

          </h1>
        </div>
        <div className='landingpagecontentleft'>
          <img src={msInnovationsImg} alt='imagemain' className='resized-image' />
        </div>
      </section>




    </div>
  )
}

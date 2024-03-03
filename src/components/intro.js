
import React from 'react';
import '../App.css';
import TypingAnimation from '../typingabimation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import cv from '../cv.pdf';
const Intro = () => {
  function down() {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'cv.pdf';
    link.target = '_blank'; // Facultatif : ouvre le lien dans un nouvel onglet
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  
  return (
    <div>
  <div className='container'>
<TypingAnimation/>
<button className='download' id='d' onClick={down}>Download CV</button>
<div className='contact'>
    <div className='cnt'>
    <a href='https://www.facebook.com/louayHC10/' target='_blank'><i class="fa-brands fa-square-facebook fb"></i></a>
    </div>
    <div className='cnt'>
    <a href='https://www.instagram.com/louay.hcine/' target='_blank'><i class="fa-brands fa-square-instagram insta"></i></a>
    </div>
    <div className='cnt'>
    <a href='https://www.linkedin.com/in/louay-hcin-128a37240/' target='_blank'><i class="fa-brands fa-linkedin lnk"></i></a>
    </div>
    <div className='cnt'>
    <a href='https://wa.me/29947728' target='_blank'><i class="fa-brands fa-square-whatsapp what"></i></a>
    </div>
</div>


  </div>

</div>
);
};

export default Intro;

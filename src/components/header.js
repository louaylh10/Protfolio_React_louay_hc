import React from 'react';
import '../App.css';
import img from '../img/louay.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = ({ scrollToProjects,scrollToSkills }) => {
  const dis =()=>{
    let check = document.querySelector(".close-menu");
    check.click();
  
  }
  return (
    <header>
      <nav>
        
        
        <ul className='navbar'>
        <li className='logo'><a href="/"><img src={img} alt='' width={"60px"} height={"60px"} /></a></li>
        <input type="checkbox" name="" id="check" />
<span className='headitems'>         
 <li className='item'><a href="/">Start</a></li>
          <li className='item'  onClick={() => {scrollToSkills(); dis();}}><a href="#">Skills</a></li>
          <li className='item' onClick={() => {scrollToProjects(); dis();}}><a href="#">Project</a></li>
          <label for="check" class="close-menu"><i class="fa-solid fa-times"></i></label>
          </span>
          <label for="check" class="open-menu"><i class="fa-solid fa-bars"></i></label>
        </ul>
      </nav>

    </header>
  );
};

export default Header;

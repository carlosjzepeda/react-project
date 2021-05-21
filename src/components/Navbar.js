import React, { useRef, useEffect } from "react";
import "../App.css";
import gsap from "gsap";

const Navbar = () => {
  // This is an array that pushes the animation
  let navItemRef = useRef([]);
  navItemRef.current = [];
  const addToRefs = (el) => {
    if (el && !navItemRef.current.includes(el)) {
      navItemRef.current.push(el);
    }
  };
  // This is the animation
  useEffect(() => {
    gsap.from(navItemRef.current, {
      ease: "back",
      opacity: 0,
      duration: 1,
      y: 20,
      x: 20,
      transform: "skewY(5deg)",
      delay: 0.5,
      stagger: 1,
    });
  }, []);
  return (
    <ul className='navbar'>
      <a href='mailto:cjzepedaa@gmail.com.'>
        <li href='mail:to' ref={addToRefs} className='nav-item'>
          CONTACT
        </li>
      </a>
    </ul>
  );
};

export default Navbar;

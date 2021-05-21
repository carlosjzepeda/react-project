import React, { useEffect, useRef } from "react";
import model from "../images/model.jpg";
import gsap from "gsap";

const Image = () => {
  let imageRef = useRef([]);
  imageRef.current = [];
  const addToRefs = (el) => {
    if (el && !imageRef.current.includes(el)) {
      imageRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        filter: "invert(1)",
        opacity: 0,
        x: -100,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%);",
      },
      {
        filter: "invert(0)",
        ease: "power4.out",
        opacity: 1,
        duration: 2,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        x: 0,
        stagger: 0.5,
        cursor: "pointer",
      }
    );
  }, []);

  const mouseEnter = () => {
    gsap.fromTo(
      imageRef.current,
      {
        y: 0,
      },
      {
        border: "5px solid blue",
        ease: "power4",
        y: -10,
        transform: "skew(-5deg)",
        duration: 1,
        filter: "invert(1)",
      }
    );
  };

  const mouseLeave = () => {
    gsap.fromTo(
      imageRef.current,
      {
        border: "5px solid blue",
        y: -10,
      },
      {
        border: "none",
        filter: "invert(0)",
        ease: "power4",
        transform: "skew(0)",
        y: 0,
        duration: 1,
        backgroundColor: "initial",
      }
    );
  };
  return (
    <>
      <img
        className='image'
        ref={addToRefs}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        src={model}
        alt='model'
      />
      <img
        className='image'
        ref={addToRefs}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        src={model}
        alt='model'
      />
      <img
        className='image'
        ref={addToRefs}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        src={model}
        alt='model'
      />
    </>
  );
};

export default Image;

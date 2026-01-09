import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'

const GsapTextAnimate = () => {

  const textRef = useRef(null);  //why use useRef: point to one dom node, safe with class scope become global

  useGSAP(()=>{
    const split = new SplitType(textRef.current,{
      types: "chars"
    });

    gsap.from(split.chars,{
      x: 50,
      opacity:0,
      stagger: 0.05,
      scrollTrigger:{
        trigger: textRef.current,
        start: "clamp(top bottom)",
        end: "clamp(center center)",
        markers: true,
        scrub: true
      }
      
    });
    return;
  },[])


  const textAnimate = ()=>{
    const split = new SplitType(textRef.current, {
      types:"chars"
    });
    
    gsap.from(split.chars,{
      y:40,
      opacity:0,
      stagger: 0.08,
      duration: 0.5,
      ease: "bounce.in"
    })
    return;
  }


  //1. with function
  // useGSAP(()=>{
  //   const split = new SplitType(textRef.current,{
  //     types: "chars"
  //   });
  //   gsap.from(split.chars,{
  //     y: 40,
  //     opacity: 0,
  //     stagger: 0.08,
  //     duration: 0.5,
  //     ease: "power3.out"
  //   })
  //   return () => split.revert(); // cleanup
  // },[]);

  return (
    <div className='text-white h-[2200px] flex justify-center items-center gap-4'>
      <div className='split' ref={textRef}>
        Animate the card only when it safely enters the viewport
      </div>
      <div>
        <button onClick={textAnimate}>Click</button>
      </div>
    </div>
  )
}

export default GsapTextAnimate
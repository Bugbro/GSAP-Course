import { useEffect } from "react";
import gsap from "gsap";

const useGsapTextAnimate = (ref) =>{
    const animate = ()=>{
        if(!ref.current) return;
        gsap.fromTo(ref.current,{
            y:40,
            opacity:0,
        },
        {
            y:0,
            opacity:1,
            duration: 0.5,
            ease: "power2.inOut",
        })
    };
    return animate;

};

export default useGsapTextAnimate;
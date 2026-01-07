import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const GsapScrollBgChange = () => {

  // TODO: Implement the gsap scroll trigger to change bg
  useGSAP(()=>{
    gsap.to('#changeIt',{
        background: "white",
        text:"black",
        scrollTrigger:{
            trigger: '#changeIt',
            start: "top 80%",
            end:"-5%",
            scrub:true
        }
    })
  },[])
  
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="h-screen text-center  flex justify-center items-center">
            <h1>GsapScrollTrigger</h1>
        </div>
        <div id="changeIt" className="h-screen text-center  flex justify-center items-center w-full ">
            <h1 className="text-red-500">GsapScrollTrigger</h1>
        </div>
    </div>
  );
};

export default GsapScrollBgChange;

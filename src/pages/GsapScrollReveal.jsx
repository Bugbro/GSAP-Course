import React from 'react'
import mustang from "../assets/mustang.jpg";
import mustang1 from "../assets/mustang1.jpg";
import mustang2 from "../assets/mustang2.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

const GsapScrollReveal = () => {

  const data = [
    {
      id:1,
      image: mustang,
      title: "Mustang Gt 1"
    },
    {
      id: 2,
      image: mustang1,
      title: "Lambo "
    },
    {
      id:3,
      image: mustang2,
      title: "Mustang GT HellCat"
    },
    {
      id:1,
      image: mustang,
      title: "Mustang Gt 1"
    },
  ];

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".slide_img").forEach((item, i)=>{
      gsap.fromTo(item,
        {
          clipPath: "inset(0% 100% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration:1,
          ease: "none",
          scrollTrigger:{
            trigger: item,
            start: "clamp(top bottom)",
            end: "clamp(top top)",
            scrub: true
          }
        })
    })
  },[]);

  return (
    <div className='bg-neutral-950 text-white py-96'>
      {data.map((item, i)=>(
        <div key={i} className='slider border-b border-white/25 p-3 flex items-center'>
          <div className='w-[40%] text-4xl'>
            <h1>{item.title}</h1>
          </div>
          <div className='w-1/2 h-1/2'>
            <img className='slide_img w-full h-full' src={item.image} alt="image" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default GsapScrollReveal;
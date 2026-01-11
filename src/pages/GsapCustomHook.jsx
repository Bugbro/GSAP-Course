import React, { useRef } from 'react'
import useGsapTextAnimate from '../hooks/useGsapTextAnimate';

const GsapCustomHook = () => {

    const bookRef = useRef(null);
    const animateText = useGsapTextAnimate(bookRef);

  return (
    <div className='text-white flex justify-center items-center h-[500px] gap-5'>
        <div ref={bookRef} >Here this is the text to animate. By click on button it call custom gsap hook
        </div>
        <div>
            <button onClick={animateText} >Click</button>
        </div>
    </div>
  )
}

export default GsapCustomHook
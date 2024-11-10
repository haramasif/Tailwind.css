import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id ="hero" className='min-h-screen bg-no-repeat bg-[url(/Profile.jpeg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "30%", backgroundPosition: "left 80px"}}
    >
        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[20px] sm:text-[20px] font-bold leading-tight flex justify-right item'>
                <div>
    
                    My Introduction.Hi, I'm Haram!
                    "I'm a passionate web developer and UI designer dedicated to creating beautiful, user-friendly digital experiences. With a strong foundation in both front-end and design, I bring websites to life with a keen eye for aesthetics and functionality. I focus on clean, responsive layouts that not only look great but also provide seamless interactions for users. Whether it's building from scratch or enhancing an existing project, I aim to deliver high-quality, impactful solutions that exceed expectations. Let's create something amazing together!""

                   
                
            
                </div>
            </div>
        </div>

    
    </div>
  )
}

export default Hero


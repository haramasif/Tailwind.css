import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
     <div className='grid md:grid-cols-2 gap-20 items-center'>
    <div>
      <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
      <p className='text-gray-500 pt-2'>
        I have a sold foundation to web development , specializing in HTML, CSS and Javascript my experience extends to using frameworks  like react and next.js to create dynamic and user-friendly application I'm also proficient in Tailwind.CSS for efficient styling and design with a passion for learning i stay updated on tha latest  technologies to enchance my skills set and contribute effectively to projects.
      </p>
    </div>
    <div>
      <div className='grid grid-cols- text-amber-950 text-3xl sm:text-4xl'>
        <div className='space-y-2'>
          <h2>Typescript</h2>
          <h2>React.js</h2>
          <h2>Next.js</h2>
          <div className='space-y-2'>
           <h2>Tailwind</h2>
           <h2>CSS</h2>
           <h2>Node.js</h2>
          </div>
        </div>
      </div>
    </div>
     </div>
    </div>

          
  
  
  )
}

export default Skills

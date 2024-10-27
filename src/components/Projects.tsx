
import React from 'react';
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id: 1,
    title: "My Home Page"!,
    desc: "A React & TypeScript based app for managing and organizing tasks",
    img: "/Project 1.jpeg",
    tags:  ["React", "Node", "Typescript", "Css",]
    
  },
  {
    id: 2,
    title: "My Hero Section"!,
    desc: "This is my 2nd Assignments given by sir Hamza Alvi",
    img: "/project 2.jpeg",
    tags: ["Node", "Css", "Typescript", "Next.js"]
  },
];



const Projects = () => {
  return (
    <div id='projects' className='containerpt-70'>
      <Heading title='My Projects' />
      <div className='grid gap-20xl:gap-0 x30:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-centre'>
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects

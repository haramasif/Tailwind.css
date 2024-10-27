import React from 'react'

interface propsType {
    title: string;

}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-centre text-4xl-8'>
        <p className='border-b-4 inline-block pbb-2'>{title}</p>
      
    </div>
  )
}

export default Heading

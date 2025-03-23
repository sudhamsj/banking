import React from 'react'

const HeaderBox = ({title,user,subtext} :HeaderBoxProps) => {
  return (
   <section className='header-box'>     
     <h1 className='header-box-title'>
        {title} {user}
    </h1>   
    <p>{subtext}</p>
   </section>
  )
}

export default HeaderBox

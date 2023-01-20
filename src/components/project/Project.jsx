import React from 'react'
import "./Project.css";

const Project = (props) => {
  const {item} = props;
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="https://instagram.com/jitendra_1407" target="_blank" rel='noreferrer'>
        <img src={item.img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Project
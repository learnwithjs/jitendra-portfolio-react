import React from 'react'
import { projects } from '../../data';
import Project from '../project/Project';
import "./ProjectList.css";

const ProjectList = () => {
  return (
    <div className='product-list'>
      <div className="product-list-texts">
        <h1 className="product-list-title">
         My Work
        </h1>
        <div className="product-list-desc">
          I have worked upon these below websites and web apps.
        </div>
      </div>
      <div className="pl-list">
        {
          projects.map(project => <Project item={project}/>)
        }
        
      </div>
    </div>
  )
}

export default ProjectList;
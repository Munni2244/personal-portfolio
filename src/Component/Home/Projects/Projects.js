import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'


const Projects = () => {
    const [projects , setProjects]=useState([]);

    useEffect(()=>{
        fetch('./projectData.json')
        .then(res=>res.json())
        .then(data=> setProjects(data))
    },[])
    return (
        <div style={{marginTop:'100px'}} className="container">
            <h1 style={{color:'#ff3399'}} className="text-center">My Projects_______</h1>
            <div className="row">
                {
                    projects?.map(project=> (
                        <div className="col-12 col-md-6 col-lg-6  ">

                        <div className="survice">
                            <img width="400px" height="400px" src={project?.img1} alt="" />
                            <h1 className="mt-4"> {project?.name}</h1>
                            <Link to={`/project/${project?.id}`}> <button className="btn  btn-secondary mb-2">See Details</button></Link>
                        </div>
                    </div>
                    ))
                }
               
              
            </div>
        </div>
    );
};

export default Projects;
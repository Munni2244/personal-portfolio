import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/projectData.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details);
    let project = details.find((detail) => detail.id == id);
    console.log(project);

    return (
        <div style={{marginTop:'70px'}} className="text-light container">
             <a target="_blank" href={project?.link}>
        <button style={{ color:'white', border:'1px solid white'}} className="btn rounded-pill" type=""><i class="fas fa-link"></i> Live site Link</button></a>
             <a target="_blank" href={project?.codeClient}>
        <button style={{ color:'white', border:'1px solid white'}} className="btn rounded-pill mx-3" type=""><i class="fas fa-link"></i> Client Code</button></a>
          { project?.codeSurver &&  <a target="_blank" href={project?.codeSurver}>
        <button style={{ color:'white', border:'1px solid white'}} className="btn rounded-pill" type=""><i class="fas fa-link"></i> Client Code</button></a>}


            <div className="row mt-5 d-flex justify-content-center align-items-center">
                <div style={{ width: '70%', height: '500px' }} className="col-12 col-lg-9 col-md-12">
                    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex justify-content-center align-items-center ">

                                <img height="400px" width="100%" src={project?.img2} className="d-block" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                  
                                </div>
                            </div>
                            <div className="carousel-item">

                                <img height="400px" width="100%" src={project?.img3} className="d-block" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                  
                                   
                                </div>

                            </div>
                            <div className="carousel-item">

                                <img height="400px" width="100%" src={project?.img4} className="d-block " alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                               
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* technology use */}
                <div style={{marginTop:'-300px'}} className="col-12 col-lg-3 col-md-3">
                    <h3 > Technology Uses</h3>
                    <div>
                    <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill m-2" type="">{project?.tool1}</button>

                    <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill" type="">{project?.tool2}</button>

                    <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill  m-2" type="">{project?.tool3}</button>

                    { project?.tool4? <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill" type="">{project?.tool4}</button>: " "}

                    { project?.tool5? <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill m-2" type="">{project?.tool5}</button>: " "}

                    { project?.tool6? <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill" type="">{project?.tool6}</button>: " "}

                    { project?.tool7? <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill m-2" type="">{project?.tool7}</button>: " "}
                    { project?.tool8? <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill m-2" type="">{project?.tool8}</button>: " "}
                    </div>
                </div>
            </div>
            <div style={{marginTop:'-50px', marginBottom:'50px'}}>

            <h5 style={{color:'#ff3399', fontSize:'40px'}} className="fw-bold">{project?.name}</h5>
            <p style={{fontSize:'20px'}}> {project?.des}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;
//Project Component
export default function Project() {
    // Array of different Projects name, git Repo and deployed link and custom class to render on the Portfolio page
    const projects = [
                {name:"MyPortFolio",gitRepo:'https://github.com/jaggz/MyPortFolio',customclass:'portfolio',deployedLink:'https://earnest-sprinkles-335372.netlify.app/'},
                {name:"Weather ForeCast",gitRepo:'https://github.com/jaggz/weatherForcast',customclass:'weatherForcast',deployedLink:'https://weatherforcast-m4s0.onrender.com/'},
                {name:"Build Vehicle CLI",gitRepo:'https://github.com/jaggz/BuildVehicle',customclass:'buildVehicle',deployedLink:"#"},
                {name:"ReadME Generator",gitRepo:'https://github.com/jaggz/Gen-ReadMe',customclass:'readmeGen',deployedLink:"#"},
                {name:"Employee Tracker",gitRepo:'https://github.com/jaggz/TrackEmp',customclass:'trackemp',deployedLink:'#'},
    ];

    return (

        <div className="row m-5  fw-bold ">
            <h2 className='fw-bold fs-5 text-dark'>PortFolio</h2>
                    {projects.map((project)=>{ // Rendering each card for respecting Project In Array

                        return(

                            <div className="col-sm-6 my-2">
                                <div className="card">
                                    <div className="card-body shadow-lg">
                                    <figure className={`flex-item ${project.customclass} rounded shadow-lg`}>
                                        <div className="rounded opacity-50">
                                            <h3>{project.name}</h3>
                                            <a href={project.gitRepo} className="text-light"><i className="bi bi-git">Git Repository</i></a><br/>
                                            <a href={project.deployedLink} className="text-light"><i className="bi bi-browser-chrome">WebPage</i></a>
                                        </div>
                                    </figure>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
        </div>
           
    );
}
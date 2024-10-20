export default function Project() {
    const projects = [
                {name:"MyPortFolio",gitRepo:'https://github.com/jaggz/MyPortFolio',customclass:'portfolio'},
                {name:"Weather ForeCast",gitRepo:'https://github.com/jaggz/weatherForcast',customclass:'weatherForcast'},
                {name:"Build Vehicle CLI",gitRepo:'https://github.com/jaggz/BuildVehicle',customclass:'buildVehicle'},
                {name:"ReadME Generator",gitRepo:'https://github.com/jaggz/Gen-ReadMe',customclass:'readmeGen'},
                {name:"Employee Tracker",gitRepo:'https://github.com/jaggz/TrackEmp',customclass:'trackemp'},
    ];

    return (

        <div className="row m-5  fw-bold ">
            <h2 className='fw-bold fs-5 text-dark'>PortFolio</h2>
                    {projects.map((project)=>{

                return(

                    <div className="col-sm-6 my-2">
                        <div className="card">
                            <div className="card-body shadow-lg">
                            <figure className={`flex-item ${project.customclass} rounded shadow-lg`}>
                                <div className="rounded opacity-50">
                                    <h3>{project.name}</h3>
                                    <a href={project.gitRepo} className="text-success"><i className="bi bi-git">Git Repository</i></a>
                                </div>
                            </figure>
                            </div>
                        </div>
                    </div>

                );


                    })};
        </div>
           
        );
      }
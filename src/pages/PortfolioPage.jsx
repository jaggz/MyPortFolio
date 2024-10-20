// This is a static page mocking an "About Us" section for our fake user data
import "bootstrap/js/src/util/focustrap.js"
export default function PortfolioPage() {
    return (
    <div className="row m-5  fw-bold ">
        <h2 className='fw-bold fs-5 text-dark'>PortFolio</h2>
        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body shadow-lg">
              <figure className="flex-item surf-report rounded shadow-lg">
                  <div className="rounded opacity-50">
                      <h3>MyPortFolio</h3>
                      <a href="https://github.com/jaggz/BuildVehicle" className="text-success"><i className="bi bi-git fs-5">Git Repositry</i></a>
                  </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body shadow-lg">
              <figure className="flex-item led-wall rounded shadow-lg">
                <div className="rounded opacity-50">
                    <h3>Weather ForeCast</h3>
                    <a href="https://github.com/jaggz/weatherForcast" className="text-success"><i className="bi bi-git fs-5">Git Repositry</i></a>
                </div>
              </figure>
           
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body shadow-lg">
              <figure className="flex-item react-calc rounded shadow-lg">
                  <div className="rounded opacity-50">
                      <h3>Build Vehicle CLI</h3>
                      <a href="https://github.com/jaggz/BuildVehicle" className="text-success"><i className="bi bi-git fs-5">Git Repositry</i></a>
                    
                  </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body shadow-lg">
              <figure className="flex-item pastel-puzzles rounded shadow-lg">
                  <div className="rounded opacity-50">
                      <h3>ReadME Generator</h3>
                      <a href="https://github.com/jaggz/Gen-ReadMe" className="text-success"><i className="bi bi-git fs-5">Git Repositry</i></a>
                  </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body shadow-lg">         
              <figure className="flex-item run-buddy rounded shadow-lg">
                <div className="rounded opacity-50">
                    <h3>Employee Tracker</h3>
                    <a href="https://github.com/jaggz/TrackEmp" className="text-success"><i className="bi bi-git fs-5">Git Repositry</i></a>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
   
                    
                  
                        



    );
  }
  
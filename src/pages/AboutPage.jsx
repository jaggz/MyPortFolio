// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
    return (
      <div className="container col-12 p-4 m-4 shadow-lg  bg-light rounded">
        <h2 className=' fw-bold fs-5'>About Me</h2>
        <div className="text-start">
        <img src="./src/assets/images/IMG_6029.jpg" className="rounded-circle img-thumbnail shadow-lg p-1 mb-2 bg-light rounded" alt="..." style={{'width':'100px','height':'100px'}}></img>
        </div>
        <p className="shadow-lg p-3 mb-5 bg-light rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.
        </p>
        <section className="features-icons shadow-lg p-3 mb-5 bg-light rounded text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Fully Responsive</h3>
                  <p className="lead mb-0">
                    This theme will look great on any device, no matter the size!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Bootstrap 5 Ready</h3>
                  <p className="lead mb-0">
                    Featuring the latest build of the new Bootstrap 5 framework!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">
                    Ready to use with your own content, or customize the source
                    files!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="shadow-lg p-3 mb-5 bg-light rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.
        </p>
      </div>
    );
  }
  
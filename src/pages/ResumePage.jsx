// This is a static page mocking an "About Us" section for our fake user data
export default function ResumePage() {
    return (
      <div className="container col-12 p-4 m-4 shadow-lg  bg-light rounded">
        <div className="col-6 m-4">
          <span>Click to Download Resume: </span>
          <a className="icon-link-hover" href='/somefile.txt' download><i class="bi bi-download"></i>
          </a>
        </div>
        <div className="col-6">
          <h3>Front End Developer</h3>
          <ul>
            <li>HTML <i class="bi bi-filetype-html"></i></li>
            <li>CSS <i class="bi bi-filetype-css"></i></li>
            <li>JAVASCRIPT <i class="bi bi-filetype-js"></i></li>
            <li>TYPESCRIPT <i class="bi bi-filetype-tsx"></i></li>
            <li>REACT <i class="bi bi-filetype-jsx"></i></li>
            <li>Responsive Design <i class="bi bi-display"></i></li>     
          </ul>
        </div>
        <div className="col-6">
          <h3>Back End Developer</h3>
          <ul>
            <li>Express.js <i class="bi bi-filetype-jsx"></i></li>
            <li>SQL/API<i class="bi bi-filetype-sql"></i></li>
            <li>RESTFUll API<i class="bi bi-sql"></i></li>
            <li>PostGreSQL<i class="bi bi-filetype-sql"></i></li>
            <li>SEQULIZE <i class="bi bi-filetype-jsx"></i></li>
            <li>MongoDB <i class="bi bi-filetype-sql"></i></li>     
          </ul>
        </div>
      </div>
    );
  }
  
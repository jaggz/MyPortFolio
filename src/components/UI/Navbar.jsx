export default function Nav({ links }) {
    const style = {
        backgroundImage: "url(https://mdbootstrap.com/img/new/standard/city/041.jpg)"
        
    }
    return (
      <nav className="navbar navbar-expand-lg bg-image sticky-top fst-italic" style={style}>
        <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-2 text-capitalize shadow-lg  rounded px-3 text-light" href="#">Jagdeep Dohil</a>
          <div className="justify-content-end shadow-lg rounded" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0 fs-4 fw-bold">
              {links.map((link) => link )}
            </ul>
          </div>
        </div>
      </nav>
   

    );
  }
  
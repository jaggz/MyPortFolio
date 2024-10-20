//Footer Component with Required Links
export default function Footer(){
    const style = {
        "--bs-icon-link-transform": "translate3d(0, -.175rem, 0)",
    }
    return (
            <div className="col-12 text-center  ">
                <a className="icon-link icon-link-hover mx-2 text-dark fs-1" style={style} href="https://github.com/jaggz"><i className="bi bi-github"></i></a>
                <a className="icon-link icon-link-hover mx-2 text-dark fs-1" style={style} href="https://www.linkedin.com/in/jagdeep-dohil-80bb73269"><i className="bi bi-linkedin"></i></a>
                <a className="icon-link icon-link-hover mx-2 text-dark fs-1" style={style} href=""><i className="bi bi-twitter"></i></a>
            </div>

    );

}
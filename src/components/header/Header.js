import { Link } from "react-router-dom";


const Header =()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">React First BootStrap Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
         <Link className="nav-link" to="/">Home</Link>
         </li>
        <li className="nav-item">
           <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to="/service">Service</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
export default Header;
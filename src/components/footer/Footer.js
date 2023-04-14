import { Link } from "react-router-dom";
import './Footer.css'


const Footer =()=>{
return(
 <footer className="bg-light text-center text-lg-start">
  <div className="text-center p-3" id="foot">
    © 2020 Copyright:
    <Link className="text-dark" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>

</footer>
);
}
export default Footer;
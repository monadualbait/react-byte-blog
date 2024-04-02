import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png"
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <div className="logo">
         <Link to="/">
         <img src={logo} alt="logo" />
         </Link>
        </div>
          <Link id="blog-title" to="/"><h1>The Byte Blog</h1></Link>
          
        <div className="links">
          <Link to="/"><p>Home</p></Link>
          <Link to="/authors"><p>Authors</p></Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Get Started</Link>
        </div>
      </nav>
     );
}
 
export default Navbar;
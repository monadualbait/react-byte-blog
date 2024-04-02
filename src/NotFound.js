import { Link } from "react-router-dom";
import notfoundIMG from "./assets/images/notfound.gif"
const NotFound = () => {
    return ( 
        <div className="NotFound">
        <div className="NotFoundImg">
            <img src={notfoundIMG} alt="" /></div>
      
        <h2>Page Not Found</h2>
        <p>Crickets chirping Dang, looks like you've wandered off the digital trail!</p>
        <Link to="/">Back to the Homepage</Link>
    </div>
     );
}
 
export default NotFound;
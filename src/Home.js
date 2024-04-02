import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogData from "./BlogData";
import BlogDetails from "./BlogDetails";
import BlogList from "./BlogList";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <BlogData>
          <Routes>
            <Route element={BlogList} />
            <Route path="/blogs/:id" element={BlogDetails} />
          </Routes>
        </BlogData>
      </div>
    </Router>
  );
};

export default Home;

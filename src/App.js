import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Navbar from "./Navbar";
import BlogData from "./BlogData";
import BlogList from "./BlogList";
import AuthorDetails from "./AuthorDetails";
import Authors from "./Authors";
import Login from "./Login";
import Create from "./Create";
import NotFound from "./NotFound";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <BlogData>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/authors/:authorlink" element={<AuthorDetails />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BlogData>
      </div>
    </Router>
  );
}

export default App;

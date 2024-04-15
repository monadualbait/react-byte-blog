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
            <Route path="/react-byte-blog" element={<BlogList />} />
            <Route path="/react-byte-blog/blogs/:id" element={<BlogDetails />} />
            <Route path="/react-byte-blog/authors/:authorlink" element={<AuthorDetails />} />
            <Route path="/react-byte-blog/authors" element={<Authors />} />
            <Route path="/react-byte-blog/create" element={<Create />} />
            <Route path="/react-byte-blog/login" element={<Login />} />
            <Route path="/react-byte-blog/signup" element={<Signup />} />
            <Route path="/react-byte-blog/*" element={<NotFound />} />
          </Routes>
        </BlogData>
      </div>
    </Router>
  );
}

export default App;

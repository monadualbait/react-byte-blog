import { useBlogsContext } from "./BlogData";
import { Link } from "react-router-dom";
const BlogList = () => {
  const { blogs, authors } = useBlogsContext();
  const createExcerpt = (text, numWords) => {
    const words = text.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + " ...";

    }
  };
  const calculateReadingTime = (text) => {
    const wpm = 225;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wpm);
    return readingTime;
  };
  return (
    <div className="blog-list">
      <h2 id="blog-list-title">All Blogs</h2>
      {blogs.map((blog) => {
        const author = authors.find((author) => author.name === blog.author);
        const readingTime = calculateReadingTime(blog.body);
        return (
          <div className="blog-preview" key={blog.id}>
            <Link className="blog-link" to={`/blogs/${blog.id}`}>
              <img src={blog.image} alt={blog.title} />
              <h2>{blog.title}</h2>
              <p id="body">{createExcerpt(blog.body, 15)}</p>
            </Link>
            <Link className="blog-author" to={`/authors/${blog.authorlink}`}>
              <img id="author-img" src={author ? author.image : " "} alt="" />
              {blog.author}
            </Link>
            <p id="preview-details">
              {blog.date} · {readingTime} min read
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;

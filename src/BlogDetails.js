import { useBlogsContext } from "./BlogData";
import { Link, useParams } from "react-router-dom";


const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, authors } = useBlogsContext();

  const currentBlog = blogs.find((blog) => blog.id === parseInt(id, 10));
  const author = authors.find((author) => author.name === currentBlog.author);
  const calculateReadingTime = (text) => {
    const wpm = 225;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wpm);
    return readingTime;
  };
  const readingTime = calculateReadingTime(currentBlog.body);
  return (
    <div>
      <div className="blog-detail">
        <h2 id="blog-title">{currentBlog.title}</h2>
        <Link className="blog-author" to={`/authors/${currentBlog.authorlink}`}>
          <img id="author-img" src={author ? author.image : " "} alt="" />
          {currentBlog.author}
        </Link>
        <p id="preview-details">
          {currentBlog.date} · {readingTime} min read
        </p>
        <img id="blog-image" src={currentBlog.image} alt={currentBlog.title} />

        <p id="body">{currentBlog.body}</p>
      </div>
    </div>
  );
};

export default BlogDetails;

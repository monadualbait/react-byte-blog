import { useBlogsContext } from "./BlogData";
import { Link, useParams } from "react-router-dom";
const AuthorDetails = () => {
  const { authorlink } = useParams();
  const { blogs, authors } = useBlogsContext();
  const currentAuthor = authors.find(
    (author) => author.authorlink === authorlink
  );
  const currentBlog = blogs.filter(
    (blog) => blog.authorlink === currentAuthor.authorlink
  );
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
    <div className="author">
      <div className="author-detail">
        <div>
          <img src={currentAuthor ? currentAuthor.image : " "} alt="" />
        </div>

        <div>
          <h2>{currentAuthor.name}</h2>
          <p>{currentAuthor.title}</p>
          <p id="author-body">{currentAuthor.about}</p>
        </div>
      </div>

      <h2 id="author-written">Blogs written by {currentAuthor.authorlink}</h2>
      {currentBlog.map((blog) => {
        const readingTime = calculateReadingTime(blog.body);
        return (
          <div className="blog-preview" key={blog.id}>
            <Link className="blog-link" to={`/blogs/${blog.id}`}>
              <img src={blog.image} alt={blog.title} />
              <h2>{blog.title}</h2>
              {<p id="body">{createExcerpt(blog.body, 15)}</p>}
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

export default AuthorDetails;

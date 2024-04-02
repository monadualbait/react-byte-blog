import { useBlogsContext } from "./BlogData";
import { Link } from "react-router-dom";
const Authors = () => {
  const { authors } = useBlogsContext();
  return (
    <div className="authors">
      {authors.map((author) => (
        <div className="author-card">
          <div id="image-card">
            <div>
              <img src={author ? author.image : " "} alt="" />
            </div>

            <div>
              <h2>{author.name}</h2>
              <p>{author.title}</p>
            </div>
          </div>
          <div id="text-card">
            <div>
              <p id="author-body">{author.about}</p>
            </div>
            <div>
              <Link id="authors-link" to={`/authors/${author.authorlink}`}>
                Check Blogs{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Authors;

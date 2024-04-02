const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Title</label>
        <input type="text" required/>
        <label>Body</label>
        <textarea required></textarea>
        <label>Author</label>
        <select value="author">
          <option value="alex">Alex</option>
          <option value="noah">Noah</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;

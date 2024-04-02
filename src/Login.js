import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";
import fail from "./assets/images/fail.svg";

const Login = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress, setLoginProgress] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoginProgress(true);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Signed In");
      navigate("/");
    } catch (error) {
      console.error("Error Signing in:", error.message);
      setShowPopup(true);
    } finally {
      setLoginProgress(false);
    }
  };
  const handleClick = (e) => {
    setShowPopup(false);
  };
  return (
    <div className="login">
      <h2>Welcome Back to the Byte Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button disabled={!password || loginProgress} type="submit">
          {loginProgress ? "Logging In..." : "Login"}
        </button>
      </form>
      {showPopup && (
        <>
          <div className="popup-overlay"></div>
          <div className="popup">
            <div className="fail">
              <img src={fail} alt="" />
              <h3>Login Failed</h3>
              <p>It looks like you don't have an account!</p>

              <div className="links">
                <Link to="/signup">Create New Account</Link>
                <Link onClick={handleClick}>Close</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;

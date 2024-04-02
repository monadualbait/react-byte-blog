import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "./Firebase";

const ACTIONS = {
  SET_INPUT: "SET_INPUT",
  SUGGEST_USERNAME: "SUGGEST_USERNAME",
};
const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_INPUT:
      return { ...state, [action.field]: action.value };
    case ACTIONS.SUGGEST_USERNAME:
      const suggestedUsername =
        state.firstName && state.familyName
          ? `${state.firstName.toLowerCase()}${state.familyName.toLowerCase()}`
          : "";
      return { ...state, username: suggestedUsername };
    default:
      return state;
  }
};
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialState = {
    firstName: "",
    familyName: "",
    username: "",
    email: "",
    password: "",
  };
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Starting user creation process...");
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      console.log("User Created:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <h2>Get Started with The Byte Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_INPUT,
              field: "firstName",
              value: e.target.value,
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Family Name"
          value={state.familyName}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.SET_INPUT,
              field: "familyName",
              value: e.target.value,
            });
            dispatch({ type: ACTIONS.SUGGEST_USERNAME });
          }}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_INPUT,
              field: "username",
              value: e.target.value,
            })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_INPUT,
              field: "email",
              value: e.target.value,
            })
          }
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_INPUT,
              field: "password",
              value: e.target.value,
            })
          }
          required
          minLength="4"
        />

        <button id="signup" type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};



export default Signup;


import { Link } from "react-router-dom";
import './Menu.css';

export const Menu = () => {
  return (
    <nav id="main-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/3">Post #3</Link>
      <Link to="/redirect">Redirect</Link>
    </nav>
  );
}
import { Link } from "react-router-dom";

export const NotFound = () =>{
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>Sorry, but we could not find a suitable page with the provided link. <Link to="/">Would you like to return to home?</Link></p>
    </div>
  );
}
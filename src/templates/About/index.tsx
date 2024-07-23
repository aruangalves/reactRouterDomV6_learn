import { useLocation } from "react-router-dom";

export const About = () => {
  const location = useLocation();
  const {state} = location;
  return (<div>
    <h1>About this page</h1>
    <hr />
    <p>This is an example for setting a new route and how the implementation changes from React DOM V5.</p>
    {state ? <p>{state}</p> : <br />}
    
  </div>);
}
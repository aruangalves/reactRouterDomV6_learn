import { Outlet } from "react-router-dom";

export const Nested = () => {  
  return (<div>
    <h1>Nested page example</h1>
    <p>If you provide an ID link to this page, it should be displayed as a nested component beneath the line:</p>
    <hr />
    <Outlet />

  </div>);
}
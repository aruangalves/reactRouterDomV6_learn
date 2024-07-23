import { useParams } from "react-router-dom";

export const NestedContent = () =>{
  const { id } = useParams();
  
  return (<div>
    <p>Your id value is: {id}</p>
  </div>);
}
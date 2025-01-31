import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () =>{
  const [time, setTime] = useState(5);
  const timeout = useRef(0);

  const navigate = useNavigate();

  useEffect(()=>{
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() =>{
      setTime((t) => t - 1);
    }, 1000);

    if(time <= 0){
      navigate('/about', {
        state: `This is the state from redirect: ${Math.random()}`
      });
    }

    return () => {
      clearTimeout(timeout.current);
    };
  },[navigate, time]);

  return (<div>
    <h1>Redirect component</h1>
    <p>You will leave this page in {time} seconds.</p>
  </div>);
}
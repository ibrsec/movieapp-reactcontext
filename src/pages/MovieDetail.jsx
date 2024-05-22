import React from "react";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();
  return <div>
    <button className=" bg-slate-600 text-white p-3 rounded-xl m-5" onClick={()=>navigate("/")}>home page</button> 
  </div>;
};

export default MovieDetail;

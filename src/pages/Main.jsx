import { useNavigate } from "react-router-dom";

 
const Main = () => {
  const navigate = useNavigate();
  // const {ali} = useAuth();
  // console.log(ali);
  return (<div>
    <button className=" bg-slate-600 text-white p-3 rounded-xl m-5" onClick={()=>navigate("details/314")}>Any detail</button> 
  </div>)
};

export default Main;

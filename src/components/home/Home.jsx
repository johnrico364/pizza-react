import "./css/Home.css"
import { useNavigate } from "react-router-dom";

import image_bg from "../Images/navbar.png";

export const Home = () =>{
    const navigate = useNavigate();

    return <div className="container-fluid">
        <div className="row mt-4">
                <div className="row">
                 <img src={image_bg} alt="" />
                  <div className="col">   
                </div>
                    <div className="col">
                      <button onClick={() => navigate("/login ")} className="logut-btn w-100">Log out</button>
               </div>
            </div> 
        </div>
    </div>
}
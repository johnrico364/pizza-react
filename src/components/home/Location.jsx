import "./css/Location.css";

import image_bg from "../Images/navbar.png";

export const Location = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <img src={image_bg} alt="" />
        <div className="display-1">Location Area</div>
      </div>
    </div>
  );
};

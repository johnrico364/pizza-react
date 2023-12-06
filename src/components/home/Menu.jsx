import "./css/Menu.css";

import image_bg from "../Images/navbar.png";

export const Menu = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4 px-5">
        <img src={image_bg} alt="" />
        <div className="col">
          <button className="pizza-btn w-20">Pizza</button>
          <button className="dessert-btn w-20">Dessert</button>
          <button className="meal-btn w-20">Meal</button>
        </div>
        <div className="row menu-container overflow-auto text-center mt-3 px-4 border">
          <div className="col-4 mt-3 menu-elements border">
            <div className="border w-100">Menu here</div>
          </div>
          <div className="col-4 mt-3 menu-elements border">
            <div className="border w-100">Menu here</div>
          </div>
          <div className="col-4 mt-3 menu-elements border">
            <div className="border w-100">Menu here</div>
          </div>
          <div className="col-4 mt-3 menu-elements border">
            <div className="border w-100">Menu here</div>
          </div>
          <div className="col-4 mt-3 menu-elements border">
            <div className="border w-100">Menu here</div>
          </div>
          <div className="col-4 mt-3 menu-elements border">
            <div className="border w-100">Menu here</div>
          </div>
          <div className="col-4 mt-3 menu-elements border">
            <div className="border w-100">Menu here</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

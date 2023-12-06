import "./css/About.css";

import logo from "../Images/albertosLogo.png";

export const About = () => {
  return (
    <div className="container-fluid">
      <div className="col">
        <img src={logo} alt="" />
        <div className="about">
          Alberto’s Pizza proudly started as a small-time pizza store in Cebu
          City near the Vicente Sotto Memorial Medical Center. To stand above
          the rest of the competition, the founders of Alberto’s Pizza wanted
          their products to be as affordable as they can be without hurting the
          quality and freshness of their pizzas. Alberto’s only focused on
          deliveries and take-outs due to the limited space available but after
          several months, word spread out very quickly and they were getting
          more and more orders from doctors, nurses, interns, and even patients!
          Different people from all walks of life began to discover this hidden
          gem of a pizza parlor and they all can’t get enough of Alberto’s
          Pizza’s delicious menu
        </div>
      </div>
    </div>
  );
};

import image1 from "../assets/images/brothin.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Ourteam = () => {
  const cardsData = [
    {
      id: 1,
      title: "Brothin Das",
      Linkedin: "https://www.linkedin.com/in/brothin-das/",
      Github: "https://github.com/Brothin",
      image: image1,
    }
  ];
  return (
    <div className="ourteam">
      <h2 className="teamheading">Developed By</h2>
      <div className="profilecard">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} className="img-profile" alt="" />
            <h4>{card.title}</h4>
            <div className="icon-container">
              {" "}
              <a href={card.Linkedin} target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="icon" />{" "}
              </a>
              <a href={card.Github} target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" />{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;

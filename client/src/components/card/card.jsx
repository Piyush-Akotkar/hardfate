import "./card.css";
import "./flip-transition.css";
import dino from "../../img/dino.png";
// import sherlok from "../../img/sherlok.jpg";

function CardUI({ onClick, text }) {
  const flip = localStorage.getItem("flip");
  if (flip) {
    onClick = null;
  }

  return (
    <div className="cardui" onClick={onClick}>
      <div className="card-back text-center">{text}</div>

      <div className="card-front">
        <div className="px-5">
          <img src={dino} alt="" className="img-fluid w-100 rounded-2" />
        </div>
      </div>
    </div>
  );
}

export default CardUI;

import CardUI from "./card/card";
import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FlippableCard() {
  let { uuid } = useParams();
  const [showFront, setShowFront] = useState(true);
  const token = localStorage.getItem("token");
  const [flippedText, setFlippedText] = useState("");

  const flipCard = async () => {
    try {
      const config = {
        headers: { authorization: `bearer ${token}` },
      };
      const data = { flip: 1 };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/games/save-flips/${uuid}`,
        data,
        config
      )

      setFlippedText(response.data.text);
      if (showFront) {
        localStorage.setItem("flip", 1);
      } else {
        localStorage.removeItem("flip");
      }       
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <CardUI
          onClick={() => {
            setShowFront((v) => !v);
            flipCard();
          }}

          text={flippedText}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;

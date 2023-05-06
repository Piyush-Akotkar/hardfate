import CardUI from "./card/card";
import "./flippable-card.css";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FlippableCard() {
  let { uuid } = useParams();
  const [showFront, setShowFront] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
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
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    flipCard();
  }, [token]);

  if (showFront === false) {
    localStorage.setItem("flip", 1);
  } else {
    localStorage.removeItem("flip");
  }

  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <CardUI
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;

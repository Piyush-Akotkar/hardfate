import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FlippableCard from "../components/Flippable-card";
import axios from "axios";
import { useParams } from "react-router-dom";

function Challenge() {
  localStorage.removeItem("flip");
  let { uuid } = useParams();
  const token = localStorage.getItem("token");

  const[isGame, setIsGame] = useState(true);

  useEffect(() => {
    const checkGameOver = async () => {
      try {
        const config = {
          headers: { authorization: `bearer ${token}` },
        };
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/games/check-game-over/${uuid}`, config)
        setIsGame(response.data.isGame)
      } catch (error) {
        console.log(error);
      }
    }
    checkGameOver()
  },[uuid, token])

  return (
    <div className="challenge-container mt-5">
      <Container className="py-5">
      {isGame && <FlippableCard />}
        {!isGame && <div>
          
          <h2 className="text-light metorius">Game Over</h2>
          </div>}
      </Container>
    </div>
  );
}

export default Challenge;

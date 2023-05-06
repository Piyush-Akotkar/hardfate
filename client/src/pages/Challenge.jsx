import React from "react";
import { Container } from "react-bootstrap";
import FlippableCard from "../components/Flippable-card";

function Challenge() {
  return (
    <div className="challenge-container mt-5">
      <Container className="py-5">
        <FlippableCard />
      </Container>
    </div>
  );
}

export default Challenge;

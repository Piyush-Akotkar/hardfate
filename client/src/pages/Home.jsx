import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-heading-box text-center">
          <h1 className="home-heading metorius">HARDFATe</h1>
          <h4 className="daily-spark-700">the land of book mines</h4>
        </div>

        <div className="home-scroll text-center mt-5">
          <h5 className="metorius text-light">explore the land</h5>
        </div>
      </div>

      <div className="bg-cyan py-5 text-white">
        <Container className="">
          <div className="my-5 text-center">
            <h1 className="display-4 metorius">A feast for the storytellers</h1>
            <div>
              <h4 className="daily-spark-700 mt-4">
                The feast is going to start in
              </h4>
              <h1 className="daily-spark-700 display-4">16H : 36M : 55S</h1>
            </div>
            <img
              src={require("../img/homeImg1.png")}
              alt=""
              className="img-fluid w-25"
            />

            <div className="my-5 daily-spark-700">
              <h4>
                What unites people? Armies? Gold? Flags? Stories. <br />
                There's nothing in the world more powerful than a good story.{" "}
                <br />
                Nothing can stop it. No Enemy can defeat it. <br />
                And who has a better story than you?
              </h4>
            </div>

            <div className="my-5">
              <Link to="/contest" className="btn btn-theme">
                Participate
              </Link>
            </div>

            <div className="mt-4">
              <h4 className="daily-spark-700 mb-0">
                In a competition where someone will definitely win but no one
                will ever lose
              </h4>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-purple py-5 text-white">
        <Container className="">
          <div className="my-5 text-center">
            <h1 className="display-4 metorius">Games of fortune</h1>
            <div>
              <h4 className="daily-spark-700 mt-4">
                Games of fortune will start in
              </h4>
              <h1 className="daily-spark-700 display-4">19H : 36M : 55S</h1>
            </div>
            <img
              src={require("../img/homeImg2.png")}
              alt=""
              className="img-fluid w-25"
            />

            <div className="my-5 daily-spark-700">
              <h4>
                What unites people? Armies? Gold? Flags? Stories. <br />
                There's nothing in the world more powerful than a good story.
                Nothing
                <br />
                can stop it. No Enemy can defeat it. <br />
                And who has a better story than you?
              </h4>
            </div>

            <div className="my-5">
              <button className="btn btn-theme">Challenge your luck</button>
            </div>

            <div className="mt-4">
              <h4 className="daily-spark-700 mb-0">
                And win novels worth hundreds and even thousands of rupees with
                the money you buy your morning hot chai.
              </h4>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-parrot py-5 text-white">
        <Container className="">
          <div className="my-5 text-center">
            <h1 className="display-4 metorius">Giveaways</h1>
            <img
              src={require("../img/homeImg3.png")}
              alt=""
              className="img-fluid w-25 my-5"
            />

            <div className="my-5 daily-spark-700">
              <h2>We will soon Anounce the date</h2>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-deepblue py-5 text-white">
        <Container className="">
          <div className="my-5 text-center">
            <h1 className="display-4 metorius">Can I share a secret?</h1>
            <img
              src={require("../img/homeImg4.png")}
              alt=""
              className="img-fluid w-25 my-5"
            />

            <div className="my-5 daily-spark-700">
              <h4>
                I wasn't going to share this, but... I feel like I should let
                you know that
              </h4>
              <h2>Something is coming very soon.</h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;

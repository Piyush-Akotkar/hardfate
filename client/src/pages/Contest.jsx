import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Multiselect from "multiselect-react-dropdown";

import "./contest.css";
import { Link } from "react-router-dom";

function Contest() {
  const [genre, setGenre] = useState();
  setGenre([
    "Adventure",
    "Adult",
    "Children",
    "Contemporary",
    "Crime",
    "Epic",
    "Erotica",
    "Drama",
    "Fantasy",
    "Folklore",
    "Historical",
    "Horror",
    "Humor Fiction",
    "Magical Realism",
    "Mystery",
    "Mythical",
    "Paranormal",
    "Poetical",
    "Political",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Young Adult",
  ]);

  // get participant details
  const [participant, setParticipant] = useState({
    fname: "",
    lname: "",
    penname: "",
    storytitle: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setParticipant({ ...participant, [name]: value });
  };

  return (
    <div className="contest-container bg-cyan py-5">
      <Container className="my-5">
        <div className="text-center">
          <h1 className="display-4 metorius text-white">
            A feast for the storytellers 1.0 submission
          </h1>
          <div className="my-5">
            <h5 className="daily-spark-700 text-light mb-0">
              The feast will start on 01-Jan-2023 and will last for 28 days{" "}
              <br /> & <br />{" "}
            </h5>
            <h5 className="daily-spark-700 text-light">
              The result will be declared on january 20
            </h5>
          </div>

          <div className="my-5 contest-prize text-white">
            <h1 className="metorius">Top 3 Prizes</h1>
            <div className="row justify-content-between my-5">
              <div className="col-md-3 content-prize-card px-2 py-4 text-center daily-spark-700">
                <div className="my-3">
                  <img
                    src={require("../img/dino.png")}
                    alt=""
                    className="img-fluid w-75"
                    srcSet=""
                  />
                </div>
                <h5 className="mt-5">First Prize</h5>
                <h2>3000 Rs</h2>
              </div>

              <div className="col-md-3 content-prize-card px-2 py-4 text-center daily-spark-700">
                <div className="my-3">
                  <img
                    src={require("../img/doli.png")}
                    alt=""
                    className="img-fluid w-75"
                    srcSet=""
                  />
                </div>
                <h5 className="mt-5">Second Prize</h5>
                <h2>2000 Rs</h2>
              </div>

              <div className="col-md-3 content-prize-card px-2 py-4 text-center daily-spark-700">
                <div className="my-3">
                  <img
                    src={require("../img/lion.png")}
                    alt=""
                    className="img-fluid w-75"
                    srcSet=""
                  />
                </div>
                <h5 className="mt-5">Third Prize</h5>
                <h2>1000 Rs</h2>
              </div>
            </div>

            <div className="row my-5 justify-content-center">
              <h1 className="metorius">Consolation Prizes</h1>
              <div className="col-md-3 content-prize-card px-2 py-4 text-center daily-spark-700">
                <div className="my-3">
                  <img
                    src={require("../img/prince.png")}
                    alt=""
                    className="img-fluid w-75"
                    srcSet=""
                  />
                </div>
                <h5 className="breaksong-breaksong  mt-5">Consolation Prize</h5>
                <h4 className="breaksong-breaksong">TOMB OF SAND</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 text-center text-light breaksong-breaksong">
          <p className="h4 px-5">
            The rest of the 6 participants will win a tomb of sand <br /> as a
            consolation prize worth rupees 550
          </p>
        </div>

        <div className="my-5 text-center">
          <h3 className="daily-spark-700 text-white mt-5">
            Submission is going to end in
          </h3>
          <h1 className="daily-spark-700 text-white display-4">
            16H : 36M : 55S
          </h1>
        </div>

        <div className="contest-form daily-spark-700 text-light">
          <h1 className="display-3 text-white">Fill the form</h1>
          <Row>
            <Col md="4">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="contest-lable">First name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={participant.fname}
                  onChange={handleInputs}
                  className="contest-form-control"
                />
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="contest-lable">Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  value={participant.lname}
                  onChange={handleInputs}
                  className="contest-form-control"
                />
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="contest-lable">Pen name</Form.Label>
                <Form.Control
                  type="text"
                  name="penname"
                  value={participant.penname}
                  onChange={handleInputs}
                  className="contest-form-control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label className="contest-lable">
              Your short story must have name
            </Form.Label>
            <Form.Control
              type="text"
              name="storytitle"
              value={participant.storytitle}
              onChange={handleInputs}
              className="contest-form-control"
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label className="contest-lable">
              Short description of your short story{" "}
              <small>(upto 150 words)</small>{" "}
            </Form.Label>
            <textarea
              name="storydescription"
              value={participant.storydescription}
              onChange={handleInputs}
              id=""
              className="contest-form-control form-control"
              rows="4"
            ></textarea>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label className="contest-lable">
              Genres <small>(You can enlist upto 3)</small>
            </Form.Label>
            {/* <Form.Control type="text" className='contest-form-control' name='genre' /> */}
            <Multiselect
              className="contest-form-control"
              isObject={false}
              options={genre}
            />
          </Form.Group>

          <Row>
            <Col md="3">
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="contest-lable">Word Count</Form.Label>
                <Form.Control type="text" className="contest-form-control" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label className="contest-lable">
              One liner to ask for a vote
            </Form.Label>
            <Form.Control type="text" className="contest-form-control" />
          </Form.Group>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="contest-lable">
                  Upload cover pic
                </Form.Label>
                <Form.Control type="file" className="contest-form-control" />
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label className="contest-lable">
                  Upload story file
                </Form.Label>
                <Form.Control type="file" className="contest-form-control" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-5" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Plagiarism Oath" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicCheckbox2">
            <Form.Check
              type="checkbox"
              label="Enroll me in the next competition if I am not seleted in the current competition"
            />
          </Form.Group>

          <div className="my-5">
            <Link to="/contest" className="btn btn-theme">
              Submit
            </Link>
          </div>
        </div>
      </Container>
      <hr />

      <div className="text-center my-5 daily-spark-700 text-light">
        <h1>Hardfate's contest helpline for the rookies.</h1>
      </div>
    </div>
  );
}

export default Contest;

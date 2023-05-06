import { db } from "../config/db.js";

export const creatGame = (req, res) => {
  // Get game details
  const gameDetails = `{\"id\":\"ewdewd\",\"title\":\"Fortune play\",\"books\":\"25\",\"loops\":\"5\",\"innerLoops\":{\"loop0\":\"300\",\"loop1\":\"500\",\"loop2\":\"800\",\"loop3\":\"900\",\"loop4\":\"500\"},\"gameplay\":\"3000\",\"marbles\":\"1200\"}`;
  // res.send(gameDetails)
  const listofgame = JSON.parse(gameDetails);

  let innerloops = listofgame.innerLoops;

  // Get the inner loops
  let getInnerLoopArr = Object.keys(innerloops).map((key) => innerloops[key]);
  // Total gameplay
  let gameplay = 3000;
  // Total Novel
  let novel = 25;
  // Total Marbles
  let marble = 425;

  let fateNovel = []; // get all fate novel numbers
  let fateMarble = []; // get all fate marble numbers

  var minLimit = 1; // set min limit

  // Main Loop
  for (let i = 0; i < getInnerLoopArr.length; i++) {
    let loopBooks = novel / 5;
    let subloop = getInnerLoopArr[i] / loopBooks; // get sub loop value

    // Inner Loop
    for (let k = 0; k < loopBooks; k++) {
      if (k === 0) {
        // Set 1 in first loop
        if (i == 0 && k == 0) {
          fateNovel.push(1); // push to fate numbers
          minLimit = minLimit + subloop; // change the minLimit
        } else {
          // minLimit will be same
          // maxLimit will be
          let maxLimit = minLimit + subloop - 1;
          function getRandomInt(min, max) {
            return Math.round(Math.random() * (max - min) + min);
          }
          const ranVal = getRandomInt(minLimit, maxLimit);
          fateNovel.push(ranVal); // push to fate numbers
          // console.log(`min : ${minLimit} & max : ${maxLimit}`);
          minLimit = minLimit + subloop; // change the minLimit
        }
      } else {
        let lastMainLoop = getInnerLoopArr.length - 1;
        let lastInnerLoop = loopBooks - 1;
        if (i === lastMainLoop && k === lastInnerLoop) {
          fateNovel.push(gameplay); // push to fate numbers
        } else {
          // minLimit will be same
          let maxLimit = minLimit + subloop - 1;
          function getRandomInt(min, max) {
            return Math.round(Math.random() * (max - min) + min);
          }
          const ranVal = getRandomInt(minLimit, maxLimit);
          fateNovel.push(ranVal); // push to fate numbers
          // console.log(`min : ${minLimit} & max : ${maxLimit}`);
          minLimit = minLimit + subloop; // change the minLimit
        }
      }
    }
  }

  // Loop for marbles
  minLimit = 1;
  for (let i = 0; i < getInnerLoopArr.length; i++) {
    let submarbleloop = marble / 5;
    let maxLimit = minLimit + parseInt(getInnerLoopArr[i]) - 1;

    for (let k = 0; k < submarbleloop; k++) {
      fateMarble.push(getRandomInts(minLimit, maxLimit));
    }

    console.log(`min : ${minLimit} & max : ${maxLimit}`);
    minLimit = minLimit + parseInt(getInnerLoopArr[i]);
  }

  // get random int
  function getRandomInts(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    while (fateNovel.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    while (fateMarble.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return randomNumber;
  }

  // Convert array into object
  let allFaters = {
    novels: JSON.stringify(fateNovel),
    marbles: JSON.stringify(fateMarble),
  };

  return res.send(allFaters);
};

export const getGameDetailById = (req, res) => {
  let { uuid } = req.params.id;
  console.log(uuid);
  let q = "SELECT * FROM game WHERE uuid = ?";
  db.query(q, uuid, (err, results) => {
    if (err) return res.status(500).send({ message: "Error", error: err });
    if (results) {
      res.status(200).send({ message: "Success", status: 200, data: results });
    }
  });
};

export const saveFlips = (req, res) => {
  let uuid = req.params.id;
  let flip = req.body.flip;
  console.log(flip);
};

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
  const { id: uuid } = req.params;
  const { flip } = req.body;
  
  const selectFlips = `SELECT flips, gameplay, winners FROM game WHERE uuid=?`;
  db.query(selectFlips, [uuid], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }
    if(results){
      // Check the flips is less then gameplays
      const flipCount = results[0].flips + flip;
      const winners = results[0].winners
      if (results[0].flips <= results[0].gameplay) {
        updateFlipsCount(flipCount, res, uuid, winners);
      } 
      else if(results[0].flips == null || results[0].flips == 0){
        updateFlipsCount(1, res, uuid, winners);
      } 
      else {
        return res.json({ message:"success", text: "Game Over", statusCode: 200 });
      }
    } else {
      return res.json({ message: "no result", statusCode: 200 });
    }
  })
};

// update Flips count
const updateFlipsCount = (Flipscount, res, uuid, winner) => {
  const updateFlips = 'UPDATE game SET flips = ? WHERE uuid=?';
  db.query(updateFlips, [Flipscount, uuid], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error", statusCode: 500 });
    }

    const winnersList = JSON.parse(winner);

    // get the novel winner list to check wether the user is winning or not
    const novelWinner = JSON.parse(winnersList.novels);
      
    // get the marble winner list to check wether the user is winning or not
    const marbleWinner = JSON.parse(winnersList.marbles);
    
    if(novelWinner.includes(Flipscount)){
      res.json({ message: "success", text: "Congratulations! You win the Novel.", statusCode: 200 });
    } else if(marbleWinner.includes(Flipscount)) {
      res.json({ message: "success", text: "Congratulations! You win the Marble.", statusCode: 200 });
    } else {
      res.json({ message: "success", text: "Sorry! Try again", statusCode: 200 });
    }
  });
};

// check game over
export const checkGameOverById = (req, res) => {
  let {uuid} = req.params
  const gameOverquery = "SELECT gameplay, flips FROM game WHERE uuid=?";
  db.query(gameOverquery, [uuid], (err, results) => {
    if(err) {
      res.status(500).json({message: "error", error: err})
    }

    if(results[0].gameplay == results[0].flips){
      res.send({isGame:false})
    }else{
      res.send({isGame:true})
    }
  })
}
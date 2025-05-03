const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const e = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, "data.json");
const usersFilePath = path.join(__dirname, "users.json");
var username_logged = "";

// Initialize empty files if they don't exist
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify({}, null, 2));
}
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify({}, null, 2));
}

app.get("/", (req, res) => {
  res.json({ message: "New Explorer!" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Read the users.json file
  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      console.error("Error reading users file:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    // Parse the JSON data
    const userData = JSON.parse(data);

    // Check if the provided username exists in the JSON data
    if (!userData[username]) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Username" });
    }

    // Check if the provided password matches the stored password for the username
    if (userData[username].password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password" });
    }

    username_logged = username;

    // Read game data from data.json
    fs.readFile(dataFilePath, (err, gameData) => {
      if (err) {
        console.error("Error reading game data:", err);
        return res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }

      const gameStats = JSON.parse(gameData)[username] || {
        score: 0,
        memoryright: 0,
        memorywrong: 0,
        memorytime: 0,
        hanoimoves: 0,
        hanoitime: 0,
        numberpuzzlemoves: 0,
        numberpuzzletime: 0,
        eightqueen: 0,
      };

      // Authentication successful - return profile data
      res.json({
        success: true,
        message: "Authentication Successful!",
        profile: {
          message: "Why fit in when you were born to stand out!",
          username: username,
          age: userData[username].age,
          ...gameStats,
        },
      });
    });
  });
});

app.post("/register", (req, res) => {
  const { username, password, age } = req.body;

  // Read the users.json file
  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      console.error("Error reading users file:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    // Parse the JSON data
    let userData = {};
    try {
      userData = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    // Check if the username already exists
    if (userData[username]) {
      return res
        .status(400)
        .json({ success: false, message: "Username Already Exists" });
    }

    // Add the new username and password to the userData object
    userData[username] = { password, age };

    // Write the updated userData object back to users.json
    fs.writeFile(usersFilePath, JSON.stringify(userData, null, 2), (err) => {
      if (err) {
        console.error("Error writing data to file:", err);
        return res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }

      // Initialize game data in data.json
      fs.readFile(dataFilePath, (err, data) => {
        if (err) {
          console.error("Error reading data file:", err);
          return res
            .status(500)
            .json({ success: false, message: "Internal Server Error" });
        }

        let gameData = {};
        try {
          gameData = JSON.parse(data);
        } catch (error) {
          console.error("Error parsing game data:", error);
          return res
            .status(500)
            .json({ success: false, message: "Internal Server Error" });
        }

        // Initialize game data for new user
        gameData[username] = {
          score: 0,
          memoryright: 0,
          memorywrong: 0,
          memorytime: 0,
          hanoimoves: 0,
          hanoitime: 0,
          numberpuzzlemoves: 0,
          numberpuzzletime: 0,
          eightqueen: 0,
        };

        fs.writeFile(dataFilePath, JSON.stringify(gameData, null, 2), (err) => {
          if (err) {
            console.error("Error writing game data:", err);
            return res
              .status(500)
              .json({ success: false, message: "Internal Server Error" });
          }
          res.json({ success: true, message: "User Registered Successfully!" });
        });
      });
    });
  });
});

app.get("/logout", (req, res) => {
  if (username_logged !== "") {
    // console.log(username_logged);
    res.json({ success: true, message: "Still Logged In." });
  } else {
    res.json({ success: false, message: "Logout Successful!" });
  }
});

app.post("/logout", (req, res) => {
  const success = req.body;
  if (success) {
    username_logged = "";
  }
});

app.get("/profile", (req, res) => {
  // Read user credentials from users.json
  fs.readFile(usersFilePath, (err, userData) => {
    if (err) {
      console.error("Error reading users file:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    const userCredentials = JSON.parse(userData);
    const user = userCredentials[username_logged];

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Read game data from data.json
    fs.readFile(dataFilePath, (err, gameData) => {
      if (err) {
        console.error("Error reading data file:", err);
        return res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }

      const gameStats = JSON.parse(gameData)[username_logged] || {};

      res.json({
        message: "Why fit in when you were born to stand out!",
        username: username_logged,
        age: user.age,
        ...gameStats,
      });
    });
  });
});

app.post("/profile", (req, res) => {
  const { totalPoints } = req.body;

  // Read the data.json file
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error("Error reading data file:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    let gameData = {};
    try {
      gameData = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing game data:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    if (gameData[username_logged]) {
      gameData[username_logged].score = totalPoints;
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    fs.writeFile(dataFilePath, JSON.stringify(gameData, null, 2), (err) => {
      if (err) {
        console.error("Error writing game data:", err);
        return res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
      res.json({ success: true, message: "User score updated successfully" });
    });
  });
});

app.post("/memorygame", (req, res) => {
  const { rightMatches, wrongMatches, timetaken } = req.body;
  const username = username_logged;

  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error("Error reading game data:", err);
      return res.status(500).send({ error: "Internal server error" });
    }

    let gameData = JSON.parse(data);
    if (gameData[username]) {
      gameData[username].memoryright = rightMatches;
      gameData[username].memorywrong = wrongMatches;
      gameData[username].memorytime = timetaken;
    } else {
      gameData[username] = {
        memoryright: rightMatches,
        memorywrong: wrongMatches,
        memorytime: timetaken,
        score: 0,
        hanoimoves: 0,
        hanoitime: 0,
        numberpuzzlemoves: 0,
        numberpuzzletime: 0,
        eightqueen: 0,
      };
    }

    fs.writeFile(dataFilePath, JSON.stringify(gameData, null, 2), (err) => {
      if (err) {
        console.error("Error writing game data:", err);
        return res.status(500).send({ error: "Internal server error" });
      }
      res.status(200).send({ score: gameData[username].score });
    });
  });
});

app.post("/numberpuzzle", (req, res) => {
  const { moves, timeTaken } = req.body;
  const username = username_logged;

  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error("Error reading game data:", err);
      return res.status(500).send({ error: "Internal server error" });
    }

    let gameData = JSON.parse(data);
    if (gameData[username]) {
      gameData[username].numberpuzzlemoves = moves;
      gameData[username].numberpuzzletime = timeTaken;
    } else {
      gameData[username] = {
        numberpuzzlemoves: moves,
        numberpuzzletime: timeTaken,
        score: 0,
        memoryright: 0,
        memorywrong: 0,
        memorytime: 0,
        hanoimoves: 0,
        hanoitime: 0,
        eightqueen: 0,
      };
    }

    fs.writeFile(dataFilePath, JSON.stringify(gameData, null, 2), (err) => {
      if (err) {
        console.error("Error writing game data:", err);
        return res.status(500).send({ error: "Internal server error" });
      }
      res.status(200).send({ score: gameData[username].score });
    });
  });
});

app.post("/hanoi", (req, res) => {
  const { moves, timeTaken } = req.body;
  const username = username_logged;

  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error("Error reading game data:", err);
      return res.status(500).send({ error: "Internal server error" });
    }

    let gameData = JSON.parse(data);
    if (gameData[username]) {
      gameData[username].hanoimoves = moves;
      gameData[username].hanoitime = timeTaken;
    } else {
      gameData[username] = {
        hanoimoves: moves,
        hanoitime: timeTaken,
        score: 0,
        memoryright: 0,
        memorywrong: 0,
        memorytime: 0,
        numberpuzzlemoves: 0,
        numberpuzzletime: 0,
        eightqueen: 0,
      };
    }

    fs.writeFile(dataFilePath, JSON.stringify(gameData, null, 2), (err) => {
      if (err) {
        console.error("Error writing game data:", err);
        return res.status(500).send({ error: "Internal server error" });
      }
      res.status(200).send({ score: gameData[username].score });
    });
  });
});

app.post("/EightQueen", (req, res) => {
  const { queensPlaced } = req.body;
  const username = username_logged;

  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.error("Error reading game data:", err);
      return res.status(500).send({ error: "Internal server error" });
    }

    let gameData = JSON.parse(data);
    if (gameData[username]) {
      gameData[username].eightqueen = queensPlaced;
    } else {
      gameData[username] = {
        eightqueen: queensPlaced,
        score: 0,
        memoryright: 0,
        memorywrong: 0,
        memorytime: 0,
        hanoimoves: 0,
        hanoitime: 0,
        numberpuzzlemoves: 0,
        numberpuzzletime: 0,
      };
    }

    fs.writeFile(dataFilePath, JSON.stringify(gameData, null, 2), (err) => {
      if (err) {
        console.error("Error writing game data:", err);
        return res.status(500).send({ error: "Internal server error" });
      }
      res.status(200).send({ score: gameData[username].score });
    });
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

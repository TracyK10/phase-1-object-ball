// an object with all the player values
function gameObject() {
  const games = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return games;
}

// TODO:Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(player_name){
  // Initialize points by calling gameObject() function
  let points = gameObject();

  // Check if points for home team exist
  if(points["home"]){
      // If points for home team exist, return the points scored by the given player
      return points["home"]["players"][player_name]["points"]
  } 
  // Check if points for away team exist
  else if(points["away"]){
      // If points for away team exist, return the points scored by the given player
      return points["away"]["players"][player_name]["points"]
  } 
  // If points for neither team exist, return a message indicating that the player was not found
  else{
      return "Player not found"
  }

  // Return points if the execution reaches this point, but this should never happen
  return points;
}

// console.log(numPointsScored("Brook Lopez"));

// TODO:a function to retrieve player shoe sizes
function shoeSize(player_name){
  // Initialize a 'shoe' variable with the gameObject() function
  let shoe = gameObject();
  
  // Check if the player is in the 'home' team of the game object
  if (shoe.home.players.hasOwnProperty(player_name)) {
      // If the player is found, return their shoe size
      return shoe.home.players[player_name].shoe;
  } 
  // Check if the player is in the 'away' team of the game object
  else if (shoe.away.players.hasOwnProperty(player_name)) {
      // If the player is found, return their shoe size
      return shoe.away.players[player_name].shoe;
  } 
  // If the player is not found in either team, return a message
  else {
      return "Player shoe size not found";
  }
  // Return the 'shoe' object
  return shoe
}
// console.log(shoeSize("Ben Gordon"))

// TODO:Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(team_name){
  // Initialize an object containing team colors
  let colors = gameObject();

  // Check if the given team name matches the home team name
  if(colors.home.teamName === team_name){
      // If there's a match, return the home team's colors
      return colors.home.colors
  } else if(colors.away.teamName === team_name){
      // If there's a match, return the away team's colors
      return colors.away.colors
  } else{
      // If there's no match, return a message indicating that team colors do not exist
      return "Team colors do not exist"
  }

  // Return the object containing team colors
  return colors;
}
// console.log(teamColors("Charlotte Hornets"))

// TODO:Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(game) {
  const teamNames = Object.values(game).map(team => team.teamName);
  return teamNames;
}

// console.log(teamNames(gameObject()));


// TODO:Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(team_name){
  // Initialize a 'jerseyNumber' variable with the return value of 'gameObject()'
    let jerseyNumber = gameObject();

    if (jerseyNumber.home.teamName === team_name){
        return Object.entries(jerseyNumber.home.players.number)
    }
    return jerseyNumber;
}

// console.log(playerNumbers("Charlotte Hornets"))

// TODO:Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.
function playerStats(playerName) {
  const game = gameObject();
  for (const team in game) {
      if (game.hasOwnProperty(team)) {
          const players = game[team].players;
              return players[playerName];
          }
  }
  return "Player not found";
}

// console.log(playerStats("Ben Gordon"))

// TODO:Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds(){
  let reboundGame = gameObject().home.players;
  for(const size in reboundGame){
    const maxSize = Math.max(reboundGame[size])
    console.log(maxSize.shoe)
}
  return maxSize;
}

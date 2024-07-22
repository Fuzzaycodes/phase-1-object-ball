function numPointsScored(playerName) {
    for (const team in game) {
      const players = game[team].players;
      for (const player of players) {
        if (player.name === playerName) {
          return player.points;
        }
      }
    }
    return null; 
  }
  
  
  function shoeSize(playerName) {
    for (const team in game) {
      const players = game[team].players;
      for (const player of players) {
        if (player.name === playerName) {
          return player.shoe;
        }
      }
    }
    return null; 
  }
  
  
  function teamColors(teamName) {
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; 
  }
  
  function teamNames() {
    return [game.homeTeam.teamName, game.awayTeam.teamName];
  }
  
  
  function playerNumbers(teamName) {
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].players.map(player => player.number);
      }
    }
    return null;
  
  function playerStats(playerName) {
    for (const team in game) {
      const players = game[team].players;
      for (const player of players) {
        if (player.name === playerName) {
          return {
            number: player.number,
            shoe: player.shoe,
            points: player.points,
            rebounds: player.rebounds,
            assists: player.assists,
            steals: player.steals,
            blocks: player.blocks,
            slamDunks: player.slamDunks
          };
        }
      }
    }
    return null; 
  }
  
  
  function bigShoeRebounds() {
    let largestShoeSize = 0;
    let rebounds = 0;
  
    for (const team in game) {
      const players = game[team].players;
      for (const player of players) {
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
  
    return rebounds;
  }
  }
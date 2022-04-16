function flight_path(instructions) {
  let x = 0;
  let y = 0;
  let direction = "up";

  for (let i = 0; i < instructions.length; i++) {
    if (direction == "up") {
      if (instructions[i] == "R") {
        direction = "right";
      } else if (instructions[i] == "L") {
        direction = "left";
      } else {
        y--;
      }
    } else if (direction == "right") {
      if (instructions[i] == "R") {
        direction = "down";
      } else if (instructions[i] == "L") {
        direction = "up";
      } else {
        x++;
      }
    } else if (direction == "down") {
      if (instructions[i] == "R") {
        direction = "left";
      } else if (instructions[i] == "L") {
        direction = "right";
      } else {
        y++;
      }
    } else {
      if (instructions[i] == "R") {
        direction = "up";
      } else if (instructions[i] == "L") {
        direction = "down";
      } else {
        x--;
      }
    }
  }
  console.log("{x:" + x + ", y:" + y + ", direction: '" + direction + "'}");
}

flight_path("RAALALL"); //Return "{x: 2, y: -1, direction: 'down'}"
flight_path("AAAA"); //Return "{x: 0, y: -4, direction: 'up'}"
flight_path("RAARA"); //Return "{x: 2, y: 1, direction: 'down'}"
flight_path(""); //Return "{x: 0, y: 0, direction: 'up'}"
// "up" = N, "down" = S, "right" = E, "left" = W

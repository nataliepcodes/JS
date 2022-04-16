function detonation_in(seconds_left) {
  console.log("detonation in... " + seconds_left + " secondes.");
}

let timer = 10;
while ((timer = 0)) {
  detonation_in(timer);
  timer--;
}
console.log(detonation_in(timer));

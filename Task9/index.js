let raceNumber = 0;

let registeredEarly = false;
let runnerAge = 20;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (raceNumber >= 1000) {
  console.log(`you will race at 9:30 am , your raceNumber:${raceNumber}`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`you will race at 11:00 am , your raceNumber:${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(
    `Youth registrants run at 12:30 pm (regardless of registration) , your raceNumber:${raceNumber}`
  );
} else if (runnerAge === 18) {
  console.log(
    `Youth registrants run at 12:30 pm (regardless of registration) , your raceNumber:${raceNumber}`
  );
}
